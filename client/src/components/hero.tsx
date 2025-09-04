export default function Hero() {
  return (
    <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&h=1080" 
          alt="Peaceful woman in wellness setting" 
          className="w-full h-full object-cover opacity-20" 
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight" data-testid="hero-title">
            Mellow the Pain.<br />
            <span className="text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Embrace Your Moon.</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed" data-testid="hero-subtitle">
            A luxurious Ayurvedic cream that transforms period pain into a moment of calm, care, and connection with your body.
          </p>
          <button className="glow-button text-primary-foreground px-12 py-4 rounded-full text-lg font-semibold shadow-lg" data-testid="hero-cta">
            Know More
          </button>
          <div className="mt-16 flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8 text-muted-foreground">
            <div className="text-center" data-testid="stat-natural">
              <div className="text-2xl font-bold text-foreground">100%</div>
              <div className="text-sm">Natural</div>
            </div>
            <div className="text-center" data-testid="stat-toxins">
              <div className="text-2xl font-bold text-foreground">0</div>
              <div className="text-sm">Toxins</div>
            </div>
            <div className="text-center" data-testid="stat-customers">
              <div className="text-2xl font-bold text-foreground">10K+</div>
              <div className="text-sm">Happy Women</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
