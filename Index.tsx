import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Globe, ArrowRight, Share2, MessageCircle } from 'lucide-react';

export default function Index() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let fadeRaf: number;

    const fadeOpacity = (from: number, to: number, duration: number, onComplete?: () => void) => {
      const start = performance.now();
      const step = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        video.style.opacity = String(from + (to - from) * t);
        if (t < 1) {
          fadeRaf = requestAnimationFrame(step);
        } else {
          onComplete?.();
        }
      };
      fadeRaf = requestAnimationFrame(step);
    };

    const handleCanPlay = () => {
      video.play().then(() => {
        fadeOpacity(0, 1, 500);
      });
    };

    const handleTimeUpdate = () => {
      const remaining = video.duration - video.currentTime;
      if (remaining <= 0.55 && parseFloat(video.style.opacity) > 0) {
        cancelAnimationFrame(fadeRaf);
        fadeOpacity(parseFloat(video.style.opacity || '1'), 0, 500);
      }
    };

    const handleEnded = () => {
      video.style.opacity = '0';
      setTimeout(() => {
        video.currentTime = 0;
        video.play().then(() => {
          fadeOpacity(0, 1, 500);
        });
      }, 100);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleEnded);

    return () => {
      cancelAnimationFrame(fadeRaf);
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <div className="min-h-screen overflow-hidden relative flex flex-col bg-black">
      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover object-bottom"
        muted
        autoPlay
        playsInline
        preload="auto"
        style={{ opacity: 0 }}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_074625_a81f018a-956b-43fb-9aee-4d1508e30e6a.mp4"
      />

      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      {/* Navbar */}
      <nav className="relative z-20 px-6 py-6">
        <div className="liquid-glass rounded-full max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Left */}
          <div className="flex items-center gap-2">
            <Globe size={24} className="text-white" />
            <span className="text-white font-semibold text-lg">CoffeeConfess</span>
            <div className="hidden md:flex items-center gap-8 ml-8">
              <a href="#" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Menu</a>
              <a href="#" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Events</a>
              <a href="#" className="text-white/80 hover:text-white text-sm font-medium transition-colors">Find Us</a>
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            <button className="text-white text-sm font-medium hidden md:block">Join</button>
            <button className="liquid-glass rounded-full px-6 py-2 text-white text-sm font-medium" onClick={() => navigate('/menu')}>
              Order
            </button>
          </div>
        </div>
      </nav>

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center -translate-y-[20%]">
        <h1
          className="text-7xl md:text-8xl lg:text-9xl text-white tracking-tight whitespace-nowrap mb-8 instrument-serif"
        >
          Sip it then <em className="italic">all</em>.
        </h1>

        {/* Email input */}
        <div className="max-w-xl w-full mb-6">
          <div className="liquid-glass rounded-full pl-6 pr-2 py-2 flex items-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent text-white placeholder:text-white/40 text-sm outline-none"
            />
            <button className="bg-white rounded-full p-3 text-black flex-shrink-0 hover:bg-white/90 transition-colors">
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-white text-sm leading-relaxed px-4 max-w-md mb-6 opacity-80">
          Be first to know about new roasts, slow pour sessions, and confessions from behind the counter.
        </p>

        {/* Manifesto button */}
        <button className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors">
          Read our manifesto
        </button>
      </div>

      {/* Social icons footer */}
      <div className="relative z-10 flex justify-center gap-4 pb-12">
        <button className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all">
          <Share2 size={20} />
        </button>
        <button className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all">
          <MessageCircle size={20} />
        </button>
        <button className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all">
          <Globe size={20} />
        </button>
      </div>
    </div>
  );
}
