import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const cards = [
  {
    src: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4',
    tag: 'Morning',
    title: 'The Daily Confession',
    description:
      "Start your day with our signature espresso blend — pulled slow, served honest. No gimmicks. Just the purest shot you'll have this side of Naples.",
  },
  {
    src: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4',
    tag: 'Experience',
    title: 'The Slow Pour Sessions',
    description:
      'On weekends we host pour-over tastings where every batch tells a different origin story. Book a seat, bring your curiosity, leave your rush at the door.',
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="bg-black py-28 md:py-40 px-6 overflow-hidden">
      <div className="bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_60%)]">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <motion.div
            className="flex items-end justify-between mb-12 md:mb-16"
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-5xl text-white tracking-tight instrument-serif">What we pour</h2>
            <p className="text-white/40 text-sm hidden md:block">Our offerings</p>
          </motion.div>

          {/* Cards */}
          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                className="liquid-glass rounded-3xl overflow-hidden group"
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
              >
                {/* Video */}
                <div className="aspect-video relative overflow-hidden">
                  <video
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    muted
                    autoPlay
                    loop
                    playsInline
                    preload="auto"
                    src={card.src}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                {/* Body */}
                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-white/40 text-xs tracking-widest uppercase">{card.tag}</span>
                    <span className="liquid-glass rounded-full p-2">
                      <ArrowUpRight size={16} className="text-white" />
                    </span>
                  </div>
                  <h3 className="text-white text-xl md:text-2xl mb-3 tracking-tight instrument-serif">{card.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{card.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
