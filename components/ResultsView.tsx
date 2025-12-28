
import React from 'react';
import { StrategyProfile } from '../types';

interface ResultsViewProps {
  profile: StrategyProfile;
}

export const ResultsView: React.FC<ResultsViewProps> = ({ profile }) => {
  const days = [
    { day: 1, theme: profile.actionPath.day1, label: 'Orientation', color: 'bg-slate-50 border-slate-200 text-slate-600' },
    { day: 2, theme: profile.actionPath.day2, label: 'Setup', color: 'bg-stone-50 border-stone-200 text-stone-600' },
    { day: 3, theme: profile.actionPath.day3, label: 'Execution', color: 'bg-zinc-50 border-zinc-200 text-zinc-600' },
    { day: 4, theme: profile.actionPath.day4, label: 'Deep Dive', color: 'bg-neutral-50 border-neutral-200 text-neutral-600' },
    { day: 5, theme: profile.actionPath.day5, label: 'Scaling', color: 'bg-slate-50 border-slate-200 text-slate-600' },
    { day: 6, theme: profile.actionPath.day6, label: 'Refinement', color: 'bg-stone-50 border-stone-200 text-stone-600' },
    { day: 7, theme: profile.actionPath.day7, label: 'Milestone', color: 'bg-neutral-900 border-neutral-800 text-white' },
  ];

  return (
    <div className="w-full space-y-24 fade-in pb-32">
      {/* Hero Visual */}
      <section className="w-full flex flex-col items-center text-center">
        <div className="relative w-full aspect-[21/9] rounded-[2.5rem] overflow-hidden shadow-2xl mb-12 bg-white ring-1 ring-black/5">
          {profile.imageUrl && (
            <img 
              src={profile.imageUrl} 
              alt={profile.name} 
              className="w-full h-full object-cover transition-transform duration-[4s] scale-100 hover:scale-105"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
        </div>
        
        <div className="px-4">
          <div className="inline-block px-5 py-1.5 border border-neutral-200 rounded-full text-[10px] uppercase tracking-[0.25em] text-neutral-400 mb-8 bg-white/50 backdrop-blur-sm">
            🔍 Diagnosis Summary
          </div>
          <h2 className="serif text-5xl md:text-7xl text-neutral-900 mb-8 tracking-tight leading-tight">{profile.name}</h2>
          <p className="text-neutral-500 leading-relaxed max-w-2xl mx-auto italic text-xl font-light">
            “{profile.diagnosisSummary}”
          </p>
        </div>
      </section>

      <div className="soft-divider" />

      {/* Strategic Intelligence Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-4">
          <h3 className="text-[11px] font-semibold tracking-[0.2em] text-neutral-400 uppercase flex items-center gap-3">
            🧭 Your Direction
          </h3>
          <p className="text-neutral-800 leading-relaxed text-lg font-light">
            {profile.strategicDirection}
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-[11px] font-semibold tracking-[0.2em] text-neutral-400 uppercase flex items-center gap-3">
            🎯 Your Focus
          </h3>
          <p className="text-neutral-800 leading-relaxed text-lg font-light">
            {profile.leverageModel}
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-[11px] font-semibold tracking-[0.2em] text-neutral-400 uppercase flex items-center gap-3">
            ✨ Key Insight
          </h3>
          <p className="text-neutral-800 leading-relaxed text-lg font-light">
            {profile.thinkingShift}
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-[11px] font-semibold tracking-[0.2em] text-neutral-400 uppercase flex items-center gap-3">
            ⚠️ Watch Outs
          </h3>
          <p className="text-neutral-800 leading-relaxed text-lg font-light">
            {profile.risksToAvoid}
          </p>
        </div>
      </section>

      <div className="soft-divider" />

      {/* 7-Day Implementation Grid */}
      <section className="space-y-16">
        <div className="text-center">
          <h3 className="text-[11px] font-semibold tracking-[0.25em] text-neutral-400 uppercase mb-4 flex justify-center items-center gap-3">
            📆 7-Day Blueprint
          </h3>
          <h4 className="serif text-4xl md:text-5xl text-neutral-900 tracking-tight">Rapid Implementation Path</h4>
          <p className="mt-4 text-neutral-400 font-light text-sm italic">Focus on solid, simple execution for the first week.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {days.slice(0, 6).map((d) => (
            <div key={d.day} className="flex flex-col bg-white border border-neutral-100 p-8 rounded-[2rem] hover:shadow-xl hover:border-neutral-200 transition-all duration-500 group">
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] font-bold tracking-[0.1em] text-neutral-300 group-hover:text-neutral-900 transition-colors uppercase">Day 0{d.day}</span>
                <span className="text-[9px] uppercase tracking-widest text-neutral-400 py-1 px-3 border border-neutral-100 rounded-full">{d.label}</span>
              </div>
              <p className="text-neutral-700 text-base font-light leading-relaxed flex-grow">
                {d.theme}
              </p>
            </div>
          ))}
          {/* Day 7 Highlight Card */}
          <div className="lg:col-span-3 bg-neutral-900 text-white p-10 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
            <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="space-y-4 max-w-xl">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-[10px] font-bold tracking-[0.2em] text-neutral-500 uppercase">Day 07</span>
                  <span className="text-[9px] uppercase tracking-[0.2em] bg-white/10 px-3 py-1 rounded-full">Final Milestone</span>
                </div>
                <h5 className="serif text-3xl md:text-4xl">System Consolidation</h5>
                <p className="text-neutral-400 text-lg font-light leading-relaxed">
                  {days[6].theme}
                </p>
              </div>
              <div className="shrink-0">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                  <span className="text-xl">✨</span>
                </div>
              </div>
            </div>
            {/* Subtle decorative circle */}
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          </div>
        </div>
      </section>

      {/* Outcomes & Tools */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
        <div className="space-y-12 bg-white/50 p-10 rounded-[2.5rem] border border-neutral-100 shadow-sm">
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400 mb-6 flex items-center gap-2">🛠️ Your Stack</h4>
            <div className="flex flex-wrap gap-2.5">
              {profile.actionPath.tools.map(tool => (
                <span key={tool} className="px-4 py-2 bg-white text-neutral-700 text-[11px] font-medium rounded-xl border border-neutral-200 shadow-sm">
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <div className="soft-divider !bg-neutral-100" />
          <div>
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-400 mb-4 flex items-center gap-2">🌱 Expected Outcome</h4>
            <p className="text-neutral-800 text-xl font-light leading-relaxed serif italic">
              “{profile.actionPath.expectedOutcome}”
            </p>
          </div>
        </div>

        <div className="bg-neutral-900 text-white p-12 rounded-[2.5rem] flex flex-col justify-center relative overflow-hidden shadow-2xl">
          <h4 className="text-[10px] uppercase tracking-widest text-neutral-500 mb-8 z-10">Strategic Philosophy</h4>
          <p className="serif text-2xl md:text-3xl italic leading-tight text-neutral-200 font-light z-10">
            This path is your blue calm foundation. From here, every move you make is reinforced by high-level strategic clarity.
          </p>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16 blur-2xl" />
        </div>
      </section>

      {/* King Solomon CTA */}
      <section className="relative overflow-hidden bg-white border border-neutral-100 p-16 md:p-24 rounded-[3.5rem] text-center shadow-2xl ring-1 ring-black/5">
        <div className="relative z-10">
          <div className="inline-block mb-10 text-3xl">👑</div>
          <h3 className="serif text-4xl md:text-6xl text-neutral-900 mb-8 leading-tight tracking-tight">Elevate with King Solomon</h3>
          <p className="text-neutral-500 max-w-xl mx-auto mb-14 text-xl font-light leading-relaxed">
            The blueprint is set, but navigation is faster with a strategist. Connect with <strong>King Solomon</strong> to implement this path with precision as your AI strategist or coach.
          </p>
          <button className="group px-12 py-5 bg-neutral-900 text-white text-[11px] tracking-[0.3em] uppercase rounded-full hover:scale-105 transition-all shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
            Begin Consultation <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
        <div className="absolute top-0 right-0 w-80 h-80 bg-stone-100/50 rounded-full -mr-40 -mt-40 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-slate-100/50 rounded-full -ml-40 -mb-40 blur-3xl" />
      </section>

      <footer className="text-center pt-24 border-t border-neutral-100">
        <p className="text-neutral-400 text-[10px] font-medium tracking-[0.3em] uppercase mb-16 opacity-60">
          Precision Guidance • AI Pathfinder Strategic Intelligence
        </p>
        <div className="flex justify-center items-center gap-12">
          <button 
            onClick={() => window.print()}
            className="text-neutral-300 hover:text-neutral-900 text-[10px] tracking-[0.3em] uppercase transition-all"
          >
            [ Save Report ]
          </button>
        </div>
      </footer>
    </div>
  );
};
