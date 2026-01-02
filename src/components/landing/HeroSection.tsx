import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, ArrowRight, Eye } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-accent/20 animate-float blur-xl" />
      <div className="absolute bottom-40 right-20 w-32 h-32 rounded-full bg-white/10 animate-float animation-delay-200 blur-xl" />
      <div className="absolute top-1/3 right-1/4 w-16 h-16 rounded-full bg-accent/30 animate-float animation-delay-400 blur-lg" />

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-slide-up">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-sm text-white/90 font-medium">Secure & Anonymous Reporting</span>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up animation-delay-100">
            Empowering Citizens for{" "}
            <span className="text-accent">Fair & Transparent</span>{" "}
            Elections
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-white/80 mb-10 max-w-2xl mx-auto animate-slide-up animation-delay-200">
            Report election-day incidents securely with evidence and location data. 
            Help ensure accountability and transparency in our democratic process.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-300">
            <Link to="/report">
              <Button variant="hero" size="xl" className="w-full sm:w-auto group">
                Report an Incident
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/transparency">
              <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
                <Eye className="w-5 h-5" />
                View Dashboard
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-16 max-w-2xl mx-auto animate-slide-up animation-delay-400">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-display font-bold text-accent">2,847</div>
              <div className="text-sm text-white/60 mt-1">Reports Filed</div>
            </div>
            <div className="text-center border-x border-white/20">
              <div className="text-3xl sm:text-4xl font-display font-bold text-white">89%</div>
              <div className="text-sm text-white/60 mt-1">Resolved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-display font-bold text-accent">156</div>
              <div className="text-sm text-white/60 mt-1">Districts Covered</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
