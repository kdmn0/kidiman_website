import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGithub } from 'react-icons/fa';
import { ExternalLink, CalendarDays } from 'lucide-react';

export default function GitHubLiveActivity() {
  const { t } = useTranslation();
  const [userStats, setUserStats] = useState(null);
  const [contributionsData, setContributionsData] = useState(null);
  const [hoveredDay, setHoveredDay] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const [userRes, contribRes] = await Promise.all([
          fetch('https://api.github.com/users/yigitardakidiman'),
          fetch('https://github-contributions-api.jogruber.de/v4/yigitardakidiman?y=last'),
        ]);

        if (userRes.ok) {
          const userData = await userRes.json();
          setUserStats(userData);
        }

        if (contribRes.ok) {
          const contribJson = await contribRes.json();
          setContributionsData(contribJson);
        }
      } catch (err) {
        console.error('GitHub API fetch error:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubData();
  }, []);

  // Group contributions into 7-day columns (weeks)
  const weeks = [];
  if (contributionsData?.contributions) {
    const list = contributionsData.contributions;
    for (let i = 0; i < list.length; i += 7) {
      weeks.push(list.slice(i, i + 7));
    }
  }

  const getLevelColor = (level) => {
    switch (level) {
      case 1:
        return 'bg-[#0e4429] border-[#006d32]/40 hover:bg-[#006d32]';
      case 2:
        return 'bg-[#006d32] border-[#26a641]/50 hover:bg-[#26a641]';
      case 3:
        return 'bg-[#26a641] border-[#39d353]/60 hover:bg-[#39d353] shadow-[0_0_4px_rgba(38,166,65,0.4)]';
      case 4:
        return 'bg-[#39d353] border-white/60 hover:bg-[#56e36d] shadow-[0_0_8px_rgba(57,211,83,0.6)]';
      default:
        return 'bg-[#161b22]/90 border-white/[0.04] hover:bg-[#21262d]';
    }
  };

  return (
    <div className="rounded-2xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] p-3.5 sm:p-5 relative overflow-hidden bg-black/40 backdrop-blur-xl border border-white/10 mb-8">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 sm:gap-3 pb-3 border-b border-white/5 text-xs">
        {/* Profile Info */}
        <div className="flex items-center justify-between w-full sm:w-auto">
          <div className="flex items-center gap-2">
            <FaGithub className="text-lg sm:text-base text-textMain shrink-0" />
            <a
              href="https://github.com/yigitardakidiman"
              target="_blank"
              rel="noreferrer"
              className="font-mono font-medium text-textMain hover:text-brand transition-colors flex items-center gap-2"
            >
              <span className="text-xs sm:text-sm font-semibold">@yigitardakidiman</span>
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            </a>
          </div>

          {/* Mobile Profile Link */}
          <a
            href="https://github.com/yigitardakidiman"
            target="_blank"
            rel="noreferrer"
            className="sm:hidden text-textMuted hover:text-brand transition-colors flex items-center gap-1 font-medium bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-md text-[11px]"
          >
            <span>{t('github.viewProfile')}</span>
            <ExternalLink size={11} />
          </a>
        </div>

        {/* Stats & Action on sm+ */}
        <div className="flex items-center justify-between sm:justify-end gap-2.5 sm:gap-3 text-textMuted w-full sm:w-auto">
          {contributionsData?.total?.lastYear !== undefined && (
            <span className="text-textMain font-medium flex items-center gap-1.5 text-[11px] sm:text-xs bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 sm:py-1 rounded-full text-emerald-400 whitespace-nowrap">
              <CalendarDays size={12} className="text-emerald-400 shrink-0" />
              <span>{t('github.contributionsYear', { count: contributionsData.total.lastYear })}</span>
            </span>
          )}

          {userStats?.public_repos !== undefined && (
            <span className="hidden md:inline text-xs text-textMuted">
              <span className="text-textMain font-semibold">{userStats.public_repos}</span> {t('github.publicRepos').toLowerCase()}
            </span>
          )}

          <a
            href="https://github.com/yigitardakidiman"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex text-textMuted hover:text-brand transition-colors items-center gap-1 font-medium text-xs ml-1 bg-white/5 hover:bg-white/10 px-2.5 py-1 rounded-md"
          >
            <span>{t('github.viewProfile')}</span>
            <ExternalLink size={11} />
          </a>
        </div>
      </div>

      {/* Heatmap Section */}
      <div className="pt-3">
        {loading ? (
          <div className="h-20 sm:h-28 bg-white/5 rounded-xl animate-pulse flex items-center justify-center text-xs text-textMuted">
            {t('github.loading')}
          </div>
        ) : (
          <div className="space-y-2.5 sm:space-y-3">
            {/* Fluid Heatmap Grid - 100% visible on all screen sizes */}
            <div className="w-full flex justify-between gap-[1px] xs:gap-[1.5px] sm:gap-[2.5px] md:gap-[3px] select-none py-1">
              {weeks.map((week, wIndex) => (
                <div key={wIndex} className="flex flex-col flex-1 gap-[1px] xs:gap-[1.5px] sm:gap-[2.5px] md:gap-[3px]">
                  {week.map((day, dIndex) => (
                    <button
                      key={dIndex}
                      type="button"
                      onClick={() => setHoveredDay(hoveredDay?.date === day.date ? null : day)}
                      onMouseEnter={() => setHoveredDay(day)}
                      onMouseLeave={() => setHoveredDay(null)}
                      className={`w-full aspect-square rounded-[1px] sm:rounded-[2px] border-[0.5px] sm:border transition-all duration-150 cursor-pointer focus:outline-none focus:ring-1 focus:ring-emerald-400 ${getLevelColor(day.level)}`}
                      title={t('github.contributionsCount', { count: day.count, date: day.date })}
                      aria-label={t('github.contributionsCount', { count: day.count, date: day.date })}
                    />
                  ))}
                </div>
              ))}
            </div>

            {/* Bottom Status Bar */}
            <div className="flex items-center justify-between pt-2 border-t border-white/5 text-[11px] text-textMuted font-mono min-h-[1.75rem]">
              {hoveredDay ? (
                <span className="text-emerald-400 font-medium bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 text-[10px] sm:text-[11px]">
                  {t('github.contributionsCount', { count: hoveredDay.count, date: hoveredDay.date })}
                </span>
              ) : (
                <span className="text-textMuted/50 text-[10px] sm:text-[11px]">
                  {t('github.hoverHint')}
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
