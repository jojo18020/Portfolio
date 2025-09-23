import React from 'react';

const PageHero = ({ eyebrow, title, highlight, description }) => (
  <section className="relative overflow-hidden rounded-3xl border border-[#FF3B63]/40 bg-gradient-to-r from-[#3b061a]/90 via-[#520e28]/90 to-[#7a143a]/80 px-6 py-12 sm:px-10 sm:py-14 shadow-[0_25px_80px_-40px_rgba(255,59,99,0.8)]">
    <div className="relative z-10 max-w-3xl">
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#FFB5C7]">
          {eyebrow}
        </p>
      )}
      <h1 className="mt-4 text-3xl sm:text-4xl font-bold text-white">
        {title}{' '}
        {highlight && (
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B8D] via-[#FF4B7A] to-[#FF9AAE]">
            {highlight}
          </span>
        )}
      </h1>
      {description && (
        <p className="mt-4 text-base sm:text-lg text-[#FFD6DF]/90">
          {description}
        </p>
      )}
    </div>

    <div
      className="pointer-events-none absolute -top-24 -right-16 h-64 w-64 rounded-full bg-[#FF4B7A]/30 blur-3xl"
      aria-hidden="true"
    />
    <div
      className="pointer-events-none absolute -bottom-28 -left-10 h-72 w-72 rounded-full bg-[#CC1E4A]/25 blur-3xl"
      aria-hidden="true"
    />
  </section>
);

export default PageHero;