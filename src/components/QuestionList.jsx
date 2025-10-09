import { ExternalLink, CheckCircle2, Clock, AlertCircle, Building2 } from 'lucide-react';
import { mockQuestions, mockUserProgress, mockTopics } from '../data/mockData';
export default function QuestionList({ filter = 'all', limit, topicFilter, difficultyFilter }) {
  let filteredQuestions = [...mockQuestions];

  // Apply filters
  if (filter === 'solved') {
    const solvedIds = mockUserProgress.filter(p => p.status === 'solved').map(p => p.questionId);
    filteredQuestions = filteredQuestions.filter(q => solvedIds.includes(q.id));
  } else if (filter === 'unsolved') {
    const solvedIds = mockUserProgress.map(p => p.questionId);
    filteredQuestions = filteredQuestions.filter(q => !solvedIds.includes(q.id));
  } else if (filter === 'revision') {
    const revisionIds = mockUserProgress.filter(p => p.status === 'need_revision').map(p => p.questionId);
    filteredQuestions = filteredQuestions.filter(q => revisionIds.includes(q.id));
  } else if (filter === 'recent') {
    const recentIds = mockUserProgress
      .sort((a, b) => {
        const dateA = a.solvedAt || a.lastAttemptedAt || '0';
        const dateB = b.solvedAt || b.lastAttemptedAt || '0';
        return dateB.localeCompare(dateA);
      })
      .slice(0, 5)
      .map(p => p.questionId);
    filteredQuestions = filteredQuestions.filter(q => recentIds.includes(q.id));
  }

  if (topicFilter) {
    filteredQuestions = filteredQuestions.filter(q => q.topicId === topicFilter);
  }

  if (difficultyFilter) {
    filteredQuestions = filteredQuestions.filter(q => q.difficulty === difficultyFilter);
  }

  if (limit) {
    filteredQuestions = filteredQuestions.slice(0, limit);
  }

  return (
    <div className="space-y-3">
      {filteredQuestions.length === 0 ? (
        <div className="text-center py-12 text-slate-500">
          <p>No questions found</p>
        </div>
      ) : (
        filteredQuestions.map((question) => {
          const progress = mockUserProgress.find(p => p.questionId === question.id);
          const topic = mockTopics.find(t => t.id === question.topicId);
          return (
            <QuestionCard key={question.id} question={question} progress={progress} topicName={topic?.name} />
          );
        })
      )}
    </div>
  );
}

function QuestionCard({ question, progress, topicName }) {
  const statusConfig = {
    solved: { icon: CheckCircle2, color: 'text-emerald-500', bg: 'bg-emerald-50', label: 'Solved' },
    need_revision: { icon: AlertCircle, color: 'text-amber-500', bg: 'bg-amber-50', label: 'Needs Revision' },
    not_started: { icon: Clock, color: 'text-slate-400', bg: 'bg-slate-50', label: 'Not Started' },
  };

  const difficultyConfig = {
    Easy: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    Medium: 'text-amber-600 bg-amber-50 border-amber-200',
    Hard: 'text-rose-600 bg-rose-50 border-rose-200',
  };

  const status = progress?.status || 'not_started';
  const StatusIcon = statusConfig[status].icon;

  return (
    <div className="bg-white border border-slate-200 rounded-lg p-4 hover:shadow-md transition-all group">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-2">
            <div className={`${statusConfig[status].bg} p-1.5 rounded`}>
              <StatusIcon className={`h-4 w-4 ${statusConfig[status].color}`} />
            </div>
            <h3 className="text-base font-semibold text-slate-900 group-hover:text-cyan-600 transition-colors">
              {question.title}
            </h3>
          </div>

          {question.description && (
            <p className="text-sm text-slate-600 mb-3 line-clamp-2">{question.description}</p>
          )}

          <div className="flex flex-wrap items-center gap-2">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${difficultyConfig[question.difficulty]}`}>
              {question.difficulty}
            </span>
            {topicName && (
              <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-cyan-50 text-cyan-700 border border-cyan-200">
                {topicName}
              </span>
            )}
            {progress && progress.attempts > 0 && (
              <span className="text-xs text-slate-500">
                {progress.attempts} {progress.attempts === 1 ? 'attempt' : 'attempts'}
              </span>
            )}
          </div>

          {question.companyTags.length > 0 && (
            <div className="flex items-center gap-2 mt-3 flex-wrap">
              <Building2 className="h-3.5 w-3.5 text-slate-400" />
              {question.companyTags.slice(0, 3).map((company) => (
                <span key={company} className="text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                  {company}
                </span>
              ))}
              {question.companyTags.length > 3 && (
                <span className="text-xs text-slate-400">+{question.companyTags.length - 3} more</span>
              )}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2">
          {question.leetcodeUrl && (
            <a
              href={question.leetcodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium rounded-lg transition-colors"
            >
              <span>LeetCode</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
          {question.gfgUrl && (
            <a
              href={question.gfgUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium rounded-lg transition-colors"
            >
              <span>GFG</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
