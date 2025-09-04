import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "Is MellowMoon safe for all skin types?",
    answer: "Yes, our formula is specifically designed for sensitive skin. All ingredients are natural and toxin-free, making it safe for daily use. However, we recommend doing a patch test before first use if you have known allergies."
  },
  {
    id: 2,
    question: "Will the cream stain my clothes?",
    answer: "No, our fast-absorbing formula is designed to penetrate quickly without leaving residue. The cream absorbs completely within 2-3 minutes of application and won't stain fabrics."
  },
  {
    id: 3,
    question: "How quickly does it work?",
    answer: "Most users experience relief within 10-15 minutes of application. The warming sensation begins immediately, followed by gradual pain relief as the herbal oils take effect."
  },
  {
    id: 4,
    question: "Does it have a strong smell?",
    answer: "MellowMoon has a subtle, pleasant herbal fragrance from natural essential oils. The scent is calming and not overwhelming, designed to enhance your relaxation experience."
  },
  {
    id: 5,
    question: "Can I use it with a heating pad?",
    answer: "Yes, MellowMoon can be used with heating pads for enhanced relief. Apply the cream first, let it absorb for a few minutes, then use your heating pad as usual for maximum comfort."
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="faq-title">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground" data-testid="faq-subtitle">
            Everything you need to know about MellowMoon cream.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="bg-card rounded-2xl overflow-hidden" data-testid={`faq-item-${faq.id}`}>
              <button 
                className="w-full p-6 text-left flex justify-between items-center hover:bg-muted transition-colors"
                onClick={() => toggleItem(faq.id)}
                data-testid={`faq-question-${faq.id}`}
              >
                <span className="font-semibold text-lg text-card-foreground">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openItems.includes(faq.id) ? 'transform rotate-180' : ''
                  }`} 
                />
              </button>
              {openItems.includes(faq.id) && (
                <div className="px-6 pb-6" data-testid={`faq-answer-${faq.id}`}>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
