import { Leaf, Zap, Shield } from "lucide-react";

export default function StorySection() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-8" data-testid="story-title">
              Your Body Knows.<br />
              <span className="text-primary">Ayurveda Listens.</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed" data-testid="story-description">
              For centuries, Ayurveda has understood the delicate balance of feminine wellness. Our toxin-free formulations honor this ancient wisdom while embracing modern science.
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4" data-testid="feature-natural">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">100% Natural Ingredients</h4>
                  <p className="text-muted-foreground">Carefully sourced herbs and oils, free from harmful chemicals and toxins.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4" data-testid="feature-absorbing">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Fast Absorbing Formula</h4>
                  <p className="text-muted-foreground">Advanced extraction methods ensure quick absorption without greasy residue.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4" data-testid="feature-toxin-free">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-secondary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Toxin-Free Promise</h4>
                  <p className="text-muted-foreground">No parabens, sulfates, or artificial fragrances. Just pure, gentle care.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Natural skincare application" 
              className="rounded-3xl shadow-2xl w-full"
              data-testid="story-image"
            />
            <div className="absolute -bottom-6 -left-6 bg-background rounded-2xl p-6 shadow-xl" data-testid="rating-badge">
              <div className="text-3xl font-bold text-foreground">4.9/5</div>
              <div className="text-sm text-muted-foreground">Customer Rating</div>
              <div className="star-rating text-sm mt-1 flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
