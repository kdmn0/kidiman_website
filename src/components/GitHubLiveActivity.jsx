import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { FaGithub } from 'react-icons/fa';
import { ExternalLink, CalendarDays } from 'lucide-react';

export default function GitHubLiveActivity() {
  const { t } = useTranslation();
  const [userStats, setUserStats] = useState(null);
  const [contributionsData, setContributionsData] = useState(null);
  const [hoveredDay, setHoveredDay] = useState(null);
  const [loading, setLoading] = useState(true);
  const scrollContainerRef = useRef(null);

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

  // Auto-scroll to current date (right side) on mobile and initial load
  useEffect(() => {
    if (scrollContainerRef.current && contributionsData) {
      const container = scrollContainerRef.current;
      // Slight delay to ensure DOM is fully rendered
      requestAnimationFrame(() => {
        container.scrollLeft = container.scrollWidth;
      });
    }
  }, [contributionsData]);

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
        return 'bg-[#006d32] border-[#26a641]/40 hover:bg-[#26a641]';
      case 3:
        return 'bg-[#26a641] border-[#39d353]/50 hover:bg-[#39d353] shadow-[0_0_4px_rgba(38,166,65,0.4)]';
      case 4:
        return 'bg-[#39d353] border-white/50 hover:bg-[#56e36d] shadow-[0_0_8px_rgba(57,211,83,0.6)]';
      default:
        return 'bg-[#161b22]/90 border-white/5 hover:bg-[#21262d]';
    }
  };

  return (
    <div className="card-base p-4 sm:p-5 relative overflow-hidden bg-black/40 backdrop-blur-xl border border-white/10 hover:border-brand/30 transition-all duration-300 mb-8 group">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3.5 border-b border-white/5 text-xs">
        {/* Profile Info */}
        <div className="flex items-center justify-between w-full sm:w-auto">
          <div className="flex items-center gap-2.5">
            <FaGithub className="text-xl sm:text-lg text-textMain group-hover:text-brand transition-colors shrink-0" />
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
        <div className="flex items-center justify-between sm:justify-end gap-3 text-textMuted w-full sm:w-auto">
          {contributionsData?.total?.lastYear !== undefined && (
            <span className="text-textMain font-medium flex items-center gap-1.5 text-[11px] sm:text-xs bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full text-emerald-400 whitespace-nowrap">
              <CalendarDays size={13} className="text-emerald-400 shrink-0" />
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
          <div className="h-28 bg-white/5 rounded-xl animate-pulse flex items-center justify-center text-xs text-textMuted">
            {t('github.loading')}
          </div>
        ) : (
          <div className="space-y-3">
            {/* Scrollable Heatmap Grid */}
            <div
              ref={scrollContainerRef}
              className="w-full overflow-x-auto pb-2 pt-1 scrollbar-custom select-none touch-pan-x"
            >
              <div className="flex gap-[3px] sm:gap-[3.5px] min-w-max pb-1 sm:justify-center">
                {weeks.map((week, wIndex) => (
                  <div key={wIndex} className="flex flex-col gap-[3px] sm:gap-[3.5px]">
                    {week.map((day, dIndex) => (
                      <button
                        key={dIndex}
                        type="button"
                        onClick={() => setHoveredDay(hoveredDay?.date === day.date ? null : day)}
                        onMouseEnter={() => setHoveredDay(day)}
                        onMouseLeave={() => setHoveredDay(null)}
                        className={`w-[10px] h-[10px] sm:w-[11px] sm:h-[11px] rounded-[2px] border transition-all duration-150 cursor-pointer focus:outline-none focus:ring-1 focus:ring-emerald-400 ${getLevelColor(day.level)}`}
                        title={t('github.contributionsCount', { count: day.count, date: day.date })}
                        aria-label={t('github.contributionsCount', { count: day.count, date: day.date })}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Status / Legend Bar (Static & Always visible) */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pt-2 border-t border-white/5 text-[11px] text-textMuted font-mono">
              <div className="min-h-[1.5rem] flex items-center">
                {hoveredDay ? (
                  <span className="text-emerald-400 font-medium bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20 text-[11px]">
                    {t('github.contributionsCount', { count: hoveredDay.count, date: hoveredDay.date })}
                  </span>
                ) : (
                  <span className="text-textMuted/50 text-[10px] sm:text-[11px]">
                    {t('github.hoverHint')}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-1.5 text-[10px] text-textMuted/70 self-end sm:self-auto shrink-0">
                <span>{t('github.less')}</span>
                <div className="flex gap-1 items-center">
                  <div className="w-2.5 h-2.5 rounded-[2px] bg-[#161b22] border border-white/5"></div>
                  <div className="w-2.5 h-2.5 rounded-[2px] bg-[#0e4429]"></div>
                  <div className="w-2.5 h-2.5 rounded-[2px] bg-[#006d32]"></div>
                  <div className="w-2.5 h-2.5 rounded-[2px] bg-[#26a641]"></div>
                  <div className="w-2.5 h-2.5 rounded-[2px] bg-[#39d353]"></div>
                </div>
                <span>{t('github.more')}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
