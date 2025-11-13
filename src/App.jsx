import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function App() {
  const backendUrl = import.meta.env.VITE_BACKEND_URL

  return (
    <div className="min-h-screen bg-black text-white">
      {/* HERO: Spline cover with overlays */}
      <section className="relative h-screen w-full overflow-hidden">
        {/* Spline 3D Cover */}
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/5iNiBKPngFKgC6zA/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>

        {/* Dark vignette + blood red gradient wash (should not block interactions) */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(190,0,20,0.25),transparent_60%)] mix-blend-screen" />
        </div>

        {/* Moving fog layers */}
        <div className="pointer-events-none absolute inset-0">
          <motion.div
            aria-hidden
            className="absolute -inset-1 opacity-25"
            style={{
              background:
                'radial-gradient(60% 40% at 50% 50%, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 60%, transparent 100%)',
              filter: 'blur(20px)'
            }}
            animate={{ x: [0, 40, -30, 0], y: [0, -20, 30, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            aria-hidden
            className="absolute -inset-1 opacity-15"
            style={{
              background:
                'radial-gradient(70% 50% at 60% 40%, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.015) 55%, transparent 100%)',
              filter: 'blur(28px)'
            }}
            animate={{ x: [0, -30, 25, 0], y: [0, 25, -25, 0] }}
            transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        {/* Heartbeat pulse glow */}
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0.25, scale: 0.98 }}
          animate={{ opacity: [0.15, 0.35, 0.15], scale: [0.98, 1.03, 0.98] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-[60vmin] h-[60vmin] rounded-full"
               style={{
                 background:
                   'radial-gradient(closest-side, rgba(220,0,30,0.28), rgba(220,0,30,0.14) 45%, transparent 70%)',
                 filter: 'blur(24px)'
               }}
          />
        </motion.div>

        {/* Subtle creeping shadow sweep */
        <motion.div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-black/50 to-transparent"
          animate={{ x: ['0%', '5%', '-2%', '0%'] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            style={{ textShadow: '0 0 24px rgba(255,0,32,0.25)' }}
          >
            FEAR AROUND
          </motion.h1>

          <motion.p
            className="mt-4 max-w-2xl text-base sm:text-lg md:text-xl text-red-200/85"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: 'easeOut' }}
          >
            In the dark, evolution is the enemy.
          </motion.p>

          {/* Info panel: poster, teaser, description, GDD button */}
          <motion.div
            className="mt-10 w-full max-w-6xl bg-black/50 backdrop-blur-xl border border-red-900/40 rounded-2xl p-6 md:p-8 shadow-[0_0_60px_rgba(200,0,30,0.15)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.35, ease: 'easeOut' }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Poster placeholder */}
              <div className="group relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-red-900/40 bg-gradient-to-b from-red-950 to-black">
                <div className="absolute inset-0 flex items-center justify-center text-red-200/60 text-sm tracking-widest uppercase">
                  Poster
                </div>
                <motion.div
                  className="absolute inset-0"
                  initial={{ opacity: 0.15 }}
                  animate={{ opacity: [0.15, 0.3, 0.15] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  style={{ background: 'radial-gradient(120% 80% at 30% 10%, rgba(255,0,40,0.15), transparent 60%)' }}
                />
              </div>

              {/* Teaser video placeholder */}
              <div className="relative lg:col-span-2 rounded-xl overflow-hidden border border-red-900/40 bg-black/60">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  playsInline
                  muted
                  loop
                  poster="https://images.unsplash.com/photo-1544551763-7ef4200b2b37?q=80&w=1470&auto=format&fit=crop"
                >
                  <source src="https://cdn.coverr.co/videos/coverr-dark-waves-1039/1080p.mp4" type="video/mp4" />
                </video>
                <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
                  <span className="text-xs tracking-widest text-red-200/80 uppercase">Teaser</span>
                  <span className="text-xs text-red-300/70">00:24</span>
                </div>
              </div>
            </div>

            {/* Description + CTA */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 text-left">
                <p className="text-sm sm:text-base text-red-100/80 leading-relaxed">
                  Paranoia seeps through breathing darkness. Hallways remember. Metal groans. In waterlogged echo chambers, forms adapt and devour. Every footstep breeds a new mistake — every breath, a mutation. The longer you listen, the closer it gets.
                </p>
              </div>
              <div className="flex md:justify-end">
                <a
                  href="#gdd"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg px-5 py-3 bg-red-700/80 hover:bg-red-700 text-white font-semibold tracking-wide transition-colors border border-red-900/60 shadow-[0_0_30px_rgba(200,0,30,0.25)]"
                >
                  Read the GDD
                  <span aria-hidden className="inline-block">→</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer spacer (dark ambiance) */}
      <div className="relative py-10 bg-gradient-to-b from-black to-[#0a0003] text-center text-xs text-red-200/50">
        <div className="max-w-6xl mx-auto px-6">
          <p>Atmosphere: paranoia • breathing darkness • evolving creatures</p>
        </div>
      </div>

      {/* Inline keyframes for any extra subtle motion (no Tailwind config edits) */}
      <style>{`
        @keyframes shadowCreep { 0%{transform:translateX(0)} 50%{transform:translateX(6%)} 100%{transform:translateX(0)} }
      `}</style>
    </div>
  )
}

export default App
