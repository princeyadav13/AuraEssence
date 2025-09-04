import { Star, ShoppingCart } from "lucide-react";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Mellow Moon Cream",
    price: 499,
    description: "Fast-absorbing period pain relief with 6 Ayurvedic oils",
    rating: 5,
    reviews: 1247,
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
  },
  {
    id: 2,
    name: "Glow+ Oil",
    price: 599,
    description: "Nourishing body oil for radiant, healthy skin",
    rating: 5,
    reviews: 891,
    image: "https://pixabay.com/get/gddf24ab6e55cd189e6f5d1744bdb887d4e667233d40807d67cf9ea6761b135ef08c77c8606099c5ec645c450ba94c72547149d428c03a327534df06a6b3f83e3_1280.jpg"
  },
  {
    id: 3,
    name: "Gold Glow Serum",
    price: 699,
    description: "Premium facial serum with 24k gold particles",
    rating: 5,
    reviews: 562,
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
  },
  {
    id: 4,
    name: "Essence Boost",
    price: 399,
    description: "Concentrated herbal essence for daily wellness",
    rating: 5,
    reviews: 734,
    image: "https://images.unsplash.com/photo-1612817288484-6f916006741a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
  }
];

export default function BestSellers() {
  const [addedToCart, setAddedToCart] = useState<number | null>(null);

  const handleAddToCart = (productId: number) => {
    setAddedToCart(productId);
    setTimeout(() => setAddedToCart(null), 1500);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="bestsellers-title">
            Best Sellers
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="bestsellers-subtitle">
            Discover our most loved products, crafted with pure Ayurvedic ingredients for your wellness journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="card-hover bg-card rounded-2xl shadow-sm overflow-hidden" data-testid={`product-card-${product.id}`}>
              <div className="overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.name} 
                  className="w-full h-48 object-cover transition-transform duration-300"
                  data-testid={`product-image-${product.id}`}
                />
              </div>
              <div className="p-6">
                <h3 className="font-semibold text-lg text-card-foreground mb-2" data-testid={`product-name-${product.id}`}>
                  {product.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4" data-testid={`product-description-${product.id}`}>
                  {product.description}
                </p>
                <div className="flex items-center mb-4">
                  <div className="star-rating text-sm mr-2 flex" data-testid={`product-rating-${product.id}`}>
                    {[...Array(product.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-muted-foreground text-sm" data-testid={`product-reviews-${product.id}`}>
                    ({product.reviews} reviews)
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-foreground" data-testid={`product-price-${product.id}`}>
                    ₹{product.price}
                  </span>
                  <button 
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center space-x-2 ${
                      addedToCart === product.id 
                        ? "bg-green-500 text-white" 
                        : "bg-primary text-primary-foreground hover:bg-opacity-90"
                    }`}
                    onClick={() => handleAddToCart(product.id)}
                    data-testid={`add-to-cart-${product.id}`}
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>{addedToCart === product.id ? "Added!" : "Add to Cart"}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
