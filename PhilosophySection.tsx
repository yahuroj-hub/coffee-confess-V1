import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function PhilosophySection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-black py-28 md:py-40 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-5xl md:text-7xl lg:text-8xl text-white tracking-tight mb-16 md:mb-24 instrument-serif"
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
        >
          Ritual{' '}
          <em className="italic text-white/40">×</em>{' '}
          Ritual
        </motion.h2>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left: video */}
          <motion.div
            className="rounded-3xl overflow-hidden aspect-[4/3]"
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <video
              className="w-full h-full object-cover"
              muted
              autoPlay
              loop
              playsInline
              preload="auto"
              src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4"
            />
          </motion.div>

          {/* Right: text blocks */}
          <motion.div
            className="flex flex-col justify-center gap-10"
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div>
              <p className="text-white/40 text-xs tracking-widest uppercase mb-4">Find your corner</p>
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                Every meaningful moment begins in a quiet space. Our café is designed to slow you down — dark wood, warm light, the hiss of steam. Come to think, to feel, to confess the week to your journal.
              </p>
            </div>

            <div className="w-full h-px bg-white/10" />

            <div>
              <p className="text-white/40 text-xs tracking-widest uppercase mb-4">Roast with purpose</p>
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                We source single-origin beans from farms where growers are paid fairly and treated as partners. Each roast is named for a feeling — not a flavor note. Because the best cup always starts with the right intention.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
