import { Hand, Flame, Heart } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Massage",
    description: "Apply a small amount to your lower abdomen and back. Gently massage in circular motions until absorbed.",
    icon: Hand,
    gradient: "from-primary to-accent"
  },
  {
    id: 2,
    title: "Melt",
    description: "Feel the warming sensation as the natural oils penetrate deep into your muscles, releasing tension and pain.",
    icon: Flame,
    gradient: "from-accent to-secondary"
  },
  {
    id: 3,
    title: "Breathe",
    description: "Take a moment to breathe deeply and connect with your body as comfort and calm wash over you.",
    icon: Heart,
    gradient: "from-secondary to-primary"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="how-it-works-title">
            Your Healing Ritual
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="how-it-works-subtitle">
            Three simple steps to transform your period experience into a moment of self-care.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className="text-center" data-testid={`step-${step.id}`}>
                <div className={`w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r ${step.gradient} flex items-center justify-center`}>
                  <Icon className="w-12 h-12 text-background" />
                </div>
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-4" data-testid={`step-title-${step.id}`}>
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed" data-testid={`step-description-${step.id}`}>
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
