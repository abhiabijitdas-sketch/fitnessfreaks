import { useEffect, useRef, useState } from "react";
import { Clock, Mail, Phone } from "lucide-react";

export default function Location() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="location"
      ref={sectionRef}
      className="py-24 bg-zinc-900 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-rose-500 font-semibold text-sm uppercase tracking-wider">Location</span>
          <h2 className="text-3xl sm:text-5xl font-black text-white mt-2 mb-4">
            FIND <span className="text-rose-500">US</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Visit our state-of-the-art facility and start your transformation today.
          </p>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-3 gap-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Map */}
          <div className="lg:col-span-2 h-80 lg:h-96 rounded-2xl overflow-hidden border border-zinc-800">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986432970718!3d40.69714941680757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645564756836!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Fitness Freaks Location"
            />
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            {/* Address */}
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800">
              <h3 className="text-lg font-bold text-white mb-2">Address</h3>
              <p className="text-zinc-400">
                123 Fitness Street<br />
                New York, NY 10001<br />
                United States
              </p>
            </div>

            {/* Hours */}
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800">
              <div className="flex items-center gap-3 mb-3">
                <Clock size={20} className="text-rose-500" />
                <h3 className="text-lg font-bold text-white">Hours</h3>
              </div>
              <div className="space-y-2 text-zinc-400 text-sm">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="text-white">24 Hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="text-white">6AM - 10PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-white">8AM - 8PM</span>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="p-6 rounded-2xl bg-zinc-950 border border-zinc-800">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-rose-500" />
                  <span className="text-zinc-300">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-rose-500" />
                  <span className="text-zinc-300">info@fitnessfreaks.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}