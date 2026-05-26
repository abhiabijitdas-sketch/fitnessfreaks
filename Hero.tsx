import { useEffect, useRef } from "react";
import { ArrowRight, Play, Users, Clock, Shield } from "lucide-react";

interface HeroProps {
  onJoinClick: () => void;
}

export default function Hero({ onJoinClick }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  const stats = [
    { icon: Users, value: "5000+", label: "Active Members" },
    { icon: Clock, value: "24/7", label: "Access Hours" },
    { icon: Shield, value: "50+", label: "Expert Trainers" },
  ];

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.unsplash.com/photo-1534438327276-14e5300c5f2b?w=1920&q=80"
      >
        <source src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27eecc69a27dbc4ff2b87d38afc35f1a9e7f766&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-zinc-950" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
          <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
          <span className="text-white text-sm font-medium">Premium Fitness Experience</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black text-white mb-6 leading-tight tracking-tight">
          UNLEASH YOUR
          <br />
          <span className="bg-gradient-to-r from-rose-500 to-pink-600 bg-clip-text text-transparent">
            INNER BEAST
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-zinc-300 max-w-2xl mx-auto mb-10">
          Transform your body and mind at Fitness Freaks. State-of-the-art equipment, expert trainers, and a community that pushes you to your limits.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={onJoinClick}
            className="group px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold rounded-full hover:shadow-lg hover:shadow-rose-500/30 transition-all duration-300 flex items-center gap-2"
          >
            Join Now
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="group px-8 py-4 bg-white/10 backdrop-blur-md text-white font-semibold rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center gap-2">
            <Play size={20} className="text-rose-500" />
            Watch Tour
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-16 max-w-3xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-md mb-3">
                <stat.icon size={24} className="text-rose-500" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-xs sm:text-sm text-zinc-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-zinc-400 text-sm">Scroll to explore</span>
        <div className="w-6 h-10 rounded-full border-2 border-zinc-500 flex justify-center pt-2">
          <div className="w-1.5 h-3 rounded-full bg-rose-500 animate-bounce" />
        </div>
      </div>
    </section>
  );
}