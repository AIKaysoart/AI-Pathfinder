
import React from 'react';

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col items-center px-6 py-12 md:py-24">
      <header className="mb-16 text-center fade-in">
        <h1 className="serif text-2xl md:text-3xl font-light tracking-[0.15em] text-neutral-800 uppercase">
          AI Pathfinder
        </h1>
        <div className="mt-4 flex justify-center">
          <div className="h-[1px] w-8 bg-neutral-300" />
        </div>
      </header>
      <main className="w-full max-w-3xl flex flex-col items-center">
        {children}
      </main>
    </div>
  );
};
