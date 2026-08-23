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
        return 'bg-[#0e4429] border-[#006d32]/30 hover:bg-[#006d32]';
      case 2:
        return 'bg-[#006d32] border-[#26a641]/30 hover:bg-[#26a641]';
      case 3:
        return 'bg-[#26a641] border-[#39d353]/40 hover:bg-[#39d353] shadow-[0_0_4px_rgba(38,166,65,0.3)]';
      case 4:
        return 'bg-[#39d353] border-white/40 hover:bg-[#56e36d] shadow-[0_0_8px_rgba(57,211,83,0.5)]';
      default:
        return 'bg-[#161b22]/80 border-white/5 hover:bg-[#21262d]';
    }
  };

  return (
    <div className="card-base p-5 relative overflow-hidden bg-black/40 backdrop-blur-xl border border-white/10 hover:border-brand/30 transition-all duration-300 mb-8 group">
      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3.5 border-b border-white/5 text-xs">
        {/* Profile Info */}
        <div className="flex items-center gap-2.5">
          <FaGithub className="text-lg text-textMain group-hover:text-brand transition-colors" />
          <a
            href="https://github.com/yigitardakidiman"
            target="_blank"
            rel="noreferrer"
            className="font-mono font-medium text-textMain hover:text-brand transition-colors flex items-center gap-1.5"
          >
            <span>@yigitardakidiman</span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
          </a>
        </div>

        {/* Stats & Action */}
        <div className="flex items-center gap-4 text-textMuted">
          {contributionsData?.total?.lastYear && (
            <span className="text-textMain font-medium flex items-center gap-1">
              <CalendarDays size={13} className="text-emerald-400" />
              <span className="text-emerald-400 font-bold">{contributionsData.total.lastYear}</span> {t('github.contributionsYear', { count: '' }).trim()}
            </span>
          )}

          {userStats?.public_repos && (
            <span className="hidden sm:inline">
              <span className="text-textMain font-semibold">{userStats.public_repos}</span> {t('github.publicRepos').toLowerCase()}
            </span>
          )}

          <a
            href="https://github.com/yigitardakidiman"
            target="_blank"
            rel="noreferrer"
            className="text-textMuted hover:text-brand transition-colors flex items-center gap-1 font-medium"
          >
            <span>{t('github.viewProfile')}</span>
            <ExternalLink size={11} />
          </a>
        </div>
      </div>

      {/* Heatmap Grid */}
      <div className="pt-3">
        {loading ? (
          <div className="h-20 bg-white/5 rounded-xl animate-pulse flex items-center justify-center text-xs text-textMuted">
            {t('github.loading')}
          </div>
        ) : (
          <div className="w-full overflow-x-auto pb-1 scrollbar-thin">
            <div className="flex gap-[3px] sm:gap-[3.5px] py-1 w-max mx-auto">
              {weeks.map((week, wIndex) => (
                <div key={wIndex} className="flex flex-col gap-[3px] sm:gap-[3.5px]">
                  {week.map((day, dIndex) => (
                    <div
                      key={dIndex}
                      onMouseEnter={() => setHoveredDay(day)}
                      onMouseLeave={() => setHoveredDay(null)}
                      className={`w-[10px] h-[10px] sm:w-[11px] sm:h-[11px] rounded-[2px] border transition-all duration-150 cursor-pointer ${getLevelColor(day.level)}`}
                      title={t('github.contributionsCount', { count: day.count, date: day.date })}
                    />
                  ))}
                </div>
              ))}
            </div>

            {/* Bottom Status / Legend Bar */}
            <div className="flex items-center justify-between mt-2 pt-2 border-t border-white/5 text-[11px] text-textMuted font-mono">
              <div className="h-4 flex items-center">
                {hoveredDay ? (
                  <span className="text-emerald-400 font-medium">
                    {t('github.contributionsCount', { count: hoveredDay.count, date: hoveredDay.date })}
                  </span>
                ) : (
                  <span className="text-textMuted/40">{t('github.hoverHint')}</span>
                )}
              </div>

              <div className="flex items-center gap-1.5 text-[10px] text-textMuted/70">
                <span>{t('github.less')}</span>
                <div className="flex gap-1 items-center">
                  <div className="w-2 h-2 rounded-[2px] bg-[#161b22] border border-white/5"></div>
                  <div className="w-2 h-2 rounded-[2px] bg-[#0e4429]"></div>
                  <div className="w-2 h-2 rounded-[2px] bg-[#006d32]"></div>
                  <div className="w-2 h-2 rounded-[2px] bg-[#26a641]"></div>
                  <div className="w-2 h-2 rounded-[2px] bg-[#39d353]"></div>
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
