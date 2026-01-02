import { Eye, Lock, Scale, Shield, Users, Globe } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "Transparency",
    description: "Real-time public dashboard with anonymized incident data and verification status.",
  },
  {
    icon: Scale,
    title: "Accountability",
    description: "Every report is tracked and documented, ensuring proper follow-up and resolution.",
  },
  {
    icon: Lock,
    title: "Privacy-First",
    description: "Advanced encryption and anonymous reporting options protect reporter identities.",
  },
  {
    icon: Shield,
    title: "Non-Partisan",
    description: "Independent platform committed to fair elections regardless of political affiliation.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Empowers citizens, observers, and NGOs to participate in election monitoring.",
  },
  {
    icon: Globe,
    title: "Accessible",
    description: "Mobile-friendly interface with GPS integration and offline support.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Why This Platform?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Built with security, transparency, and accessibility at its core
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-6 shadow-soft hover:shadow-large transition-all duration-300 hover:-translate-y-1 border border-border/50"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-6 h-6 text-primary group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
