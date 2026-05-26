import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">FF</span>
              </div>
              <span className="text-white font-bold text-xl">
                Fitness<span className="text-rose-500">Freaks</span>
              </span>
            </div>
            <p className="text-zinc-500 text-sm">
              Transform your body, elevate your mind. Join Kolkata's premium fitness destination.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Programs", "Trainers", "Pricing", "Location"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-zinc-500 hover:text-rose-500 text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-white font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              {["Strength Training", "Cardio Blast", "HIIT Workouts", "Group Classes"].map((program) => (
                <li key={program}>
                  <a href="#programs" className="text-zinc-500 hover:text-rose-500 text-sm transition-colors">
                    {program}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-zinc-500">
              <li>+91 98765 43210</li>
              <li>info@fitnessfreaks.in</li>
              <li>123 Fitness Street, Kolkata</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">
            © {currentYear} Fitness Freaks. All rights reserved.
          </p>
          <p className="text-zinc-500 text-sm flex items-center gap-1">
            Made with <Heart size={14} className="text-rose-500 fill-rose-500" /> in Kolkata
          </p>
        </div>
      </div>
    </footer>
  );
}