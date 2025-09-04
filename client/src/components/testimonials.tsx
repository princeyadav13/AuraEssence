import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ritika Verma",
    location: "Mumbai",
    rating: 5,
    text: "MellowMoon has completely changed my period experience. The pain relief is almost instant, and I love that it's completely natural. No more relying on strong painkillers!",
    image: "https://pixabay.com/get/ga053a5e0f5090ea7b403eadd56570080299eb21ea937d2f12b4d346ca0730edb4a19be403946bb30e5f8235598f2bb06e8f82a5f814e2bd607edda97991fd825_1280.jpg"
  },
  {
    id: 2,
    name: "Priya Singh",
    location: "Delhi",
    rating: 5,
    text: "As someone with sensitive skin, finding the right period care was challenging. MellowMoon's gentle formula works wonders without any irritation.",
    image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
  },
  {
    id: 3,
    name: "Ananya Sharma",
    location: "Bangalore",
    rating: 5,
    text: "The quality and effectiveness exceeded my expectations. It's become an essential part of my monthly routine. Highly recommend to all women!",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&h=100"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="testimonials-title">
            What Our Community Says
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="testimonials-subtitle">
            Real stories from women who've embraced natural period care.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-card rounded-2xl p-8 shadow-sm" data-testid={`testimonial-${testimonial.id}`}>
              <div className="star-rating text-xl mb-4 flex" data-testid={`testimonial-rating-${testimonial.id}`}>
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed" data-testid={`testimonial-text-${testimonial.id}`}>
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonial.image}
                  alt={`${testimonial.name} testimonial`} 
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  data-testid={`testimonial-image-${testimonial.id}`}
                />
                <div>
                  <div className="font-semibold text-card-foreground" data-testid={`testimonial-name-${testimonial.id}`}>
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground" data-testid={`testimonial-location-${testimonial.id}`}>
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
