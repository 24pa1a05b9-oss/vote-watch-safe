import { FileText, CheckCircle, BarChart3, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Submit Report",
    description: "Report an incident with media evidence, GPS location, and detailed description. Stay anonymous or verify your identity.",
    color: "bg-accent",
  },
  {
    icon: CheckCircle,
    title: "Verification",
    description: "Authorities review and verify the report. Evidence is analyzed and appropriate actions are taken.",
    color: "bg-emerald-500",
  },
  {
    icon: BarChart3,
    title: "Transparency",
    description: "Verified incidents contribute to public transparency reports, accessible to all citizens.",
    color: "bg-primary",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A simple, secure process to report incidents and contribute to election transparency
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-16 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-accent via-emerald-500 to-primary" />
            
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <div className="bg-card rounded-2xl p-8 shadow-large hover:shadow-xl transition-shadow duration-300 relative z-10">
                  {/* Step Number */}
                  <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-muted flex items-center justify-center font-display font-bold text-sm text-muted-foreground border-2 border-background">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-xl ${step.color} flex items-center justify-center mb-6`}>
                    <step.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (Mobile) */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center my-4">
                    <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
