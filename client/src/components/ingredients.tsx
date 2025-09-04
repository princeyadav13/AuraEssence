import { Flower2, Leaf, Sprout, BrickWall, Pill, Droplet } from "lucide-react";

const ingredients = [
  {
    id: 1,
    name: "Lavender Oil",
    description: "Calming and anti-inflammatory properties that soothe pain and reduce stress.",
    icon: Flower2,
    color: "primary"
  },
  {
    id: 2,
    name: "Peppermint Oil",
    description: "Natural cooling effect that provides immediate relief from menstrual cramps.",
    icon: Leaf,
    color: "accent"
  },
  {
    id: 3,
    name: "Eucalyptus Oil",
    description: "Anti-inflammatory and analgesic properties for deep muscle relaxation.",
    icon: Sprout,
    color: "secondary"
  },
  {
    id: 4,
    name: "Ajwain Oil",
    description: "Traditional Ayurvedic remedy known for its warming and pain-relieving qualities.",
    icon: BrickWall,
    color: "primary"
  },
  {
    id: 5,
    name: "Dashmool Extract",
    description: "Blend of ten medicinal roots that support feminine health and balance.",
    icon: Pill,
    color: "accent"
  },
  {
    id: 6,
    name: "Sesame Oil",
    description: "Nourishing base oil that enhances absorption and moisturizes the skin.",
    icon: Droplet,
    color: "secondary"
  }
];

export default function Ingredients() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="ingredients-title">
            Pure Ayurvedic Ingredients
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="ingredients-subtitle">
            Each ingredient is carefully selected for its therapeutic properties and gentle effectiveness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ingredients.map((ingredient) => {
            const Icon = ingredient.icon;
            return (
              <div key={ingredient.id} className="ingredient-card rounded-2xl p-8 text-center" data-testid={`ingredient-${ingredient.id}`}>
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${ingredient.color} flex items-center justify-center`}>
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h4 className="font-semibold text-lg text-foreground mb-3" data-testid={`ingredient-name-${ingredient.id}`}>
                  {ingredient.name}
                </h4>
                <p className="text-muted-foreground text-sm" data-testid={`ingredient-description-${ingredient.id}`}>
                  {ingredient.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
