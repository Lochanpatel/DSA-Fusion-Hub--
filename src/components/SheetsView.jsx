import { BookOpen, Users, Lock, ChevronRight, Plus, Layers } from 'lucide-react';
import { mockSourceSheets, mockUserSheets } from '../data/mockData';
import { useState } from 'react';

export default function SheetsView() {
  const [activeTab, setActiveTab] = useState('official');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Practice Sheets</h1>
          <p className="text-slate-600 mt-1">Choose from curated sheets or create your own</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg font-medium transition-colors">
          <Plus className="h-4 w-4" />
          Create Custom Sheet
        </button>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 border-b border-slate-200">
        <button
          onClick={() => setActiveTab('official')}
          className={`pb-3 px-1 font-medium transition-colors relative ${
            activeTab === 'official'
              ? 'text-emerald-600'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          Official Sheets
          {activeTab === 'official' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600" />
          )}
        </button>
        <button
          onClick={() => setActiveTab('custom')}
          className={`pb-3 px-1 font-medium transition-colors relative ${
            activeTab === 'custom'
              ? 'text-emerald-600'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          My Custom Sheets
          {activeTab === 'custom' && (
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600" />
          )}
        </button>
      </div>

      {/* Official Sheets */}
      {activeTab === 'official' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockSourceSheets.map((sheet) => (
            <div key={sheet.id} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all group cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div className="bg-gradient-to-br from-emerald-500 to-cyan-600 p-3 rounded-lg">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <span className="text-xs font-medium px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-200">
                  Official
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                {sheet.name}
              </h3>
              <p className="text-sm text-slate-600 mb-4 line-clamp-2">{sheet.description}</p>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="flex items-center gap-4 text-sm text-slate-600">
                  <span className="font-medium">{sheet.totalQuestions} questions</span>
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    by {sheet.creator}
                  </span>
                </div>
                <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Custom Sheets */}
      {activeTab === 'custom' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockUserSheets.map((sheet) => (
            <div key={sheet.id} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-all group cursor-pointer">
              <div className="flex items-start justify-between mb-4">
                <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-3 rounded-lg">
                  <Layers className="h-6 w-6 text-white" />
                </div>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full border ${
                  sheet.isPublic
                    ? 'bg-blue-50 text-blue-700 border-blue-200'
                    : 'bg-slate-100 text-slate-600 border-slate-200'
                }`}>
                  {sheet.isPublic ? (
                    <span className="flex items-center gap-1">
                      <Users className="h-3 w-3" />
                      Public
                    </span>
                  ) : (
                    <span className="flex items-center gap-1">
                      <Lock className="h-3 w-3" />
                      Private
                    </span>
                  )}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-cyan-600 transition-colors">
                {sheet.name}
              </h3>
              <p className="text-sm text-slate-600 mb-4 line-clamp-2">{sheet.description}</p>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-slate-600">Progress</span>
                  <span className="font-semibold text-slate-900">
                    {sheet.solvedCount} / {sheet.questionCount}
                  </span>
                </div>
                <div className="w-full bg-slate-100 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-500"
                    style={{ width: `${(sheet.solvedCount / sheet.questionCount) * 100}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div className="text-sm text-slate-600">
                  Based on {sheet.basedOnSheets.length} {sheet.basedOnSheets.length === 1 ? 'sheet' : 'sheets'}
                </div>
                <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-cyan-600 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}

          {/* Create New Card */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-dashed border-slate-300 rounded-xl p-6 hover:border-emerald-400 hover:bg-emerald-50 transition-all group cursor-pointer flex flex-col items-center justify-center min-h-[280px]">
            <div className="bg-white p-4 rounded-full mb-4 group-hover:bg-emerald-100 transition-colors">
              <Plus className="h-8 w-8 text-slate-400 group-hover:text-emerald-600" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Create Custom Sheet</h3>
            <p className="text-sm text-slate-600 text-center">
              Merge questions from multiple sheets or build your own
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
