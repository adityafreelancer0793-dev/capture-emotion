import { Link } from "react-router-dom";
import { Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

const reviews = [
  { name: "Priya S.", role: "Bride", text: "Best quality work just in budget prices, I love the photos. Every frame felt like a memory worth framing." },
  { name: "Rohan M.", role: "Event Manager", text: "Amazing service and very professional photography team. Coverage was seamless from start to finish." },
  { name: "Aanya & Vikram", role: "Wedding Couple", text: "Beautiful wedding moments captured perfectly. The cinematic edit took our breath away." },
  { name: "Neha K.", role: "Portrait Client", text: "Highly recommended for events and portraits. The team made us feel completely at ease on set." },
  { name: "Arjun T.", role: "Brand Owner", text: "Premium product photography that elevated our entire campaign. Quick turnaround too!" },
  { name: "Sara D.", role: "Family Shoot", text: "They captured our family in such a real, warm way. The album is a treasure." },
];

const Reviews = () => (
  <>
    <SEO
      title="Reviews | 4.8★ Capture Emotions Photography Mumbai"
      description="Read 146+ five-star Google reviews for Capture Emotions — Mumbai's trusted wedding, event and portrait photography studio."
    />

    {/* HERO */}
    <section className="bg-gradient-hero py-20 text-center">
      <div className="container max-w-3xl animate-fade-up">
        <span className="text-xs tracking-[0.3em] uppercase text-gold font-medium">Client Love</span>
        <h1 className="font-display text-5xl md:text-6xl mt-3">Loved by 146+ happy clients</h1>
        <div className="flex justify-center items-center gap-2 mt-6">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-gold text-gold" />)}
          <span className="font-display text-2xl ml-2">4.8</span>
        </div>
        <p className="mt-2 text-muted-foreground">Average rating across 146 Google Reviews</p>
      </div>
    </section>

    {/* COUNTERS */}
    <section className="container -mt-10 mb-16">
      <div className="bg-background rounded-[2rem] shadow-elegant p-8 grid grid-cols-3 gap-6">
        {[
          { v: "146+", l: "Five-Star Reviews" },
          { v: "500+", l: "Happy Clients" },
          { v: "98%", l: "Would Refer Us" },
        ].map((s) => (
          <div key={s.l} className="text-center">
            <div className="font-display text-3xl md:text-4xl text-gold">{s.v}</div>
            <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
          </div>
        ))}
      </div>
    </section>

    {/* REVIEW GRID */}
    <section className="container pb-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {reviews.map((r, i) => (
        <article key={r.name} className="bg-background border border-border rounded-3xl p-7 hover-lift animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
          <Quote className="w-7 h-7 text-gold/40 mb-4" />
          <div className="flex mb-3">
            {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-gold text-gold" />)}
          </div>
          <p className="text-foreground/80 leading-relaxed mb-6">"{r.text}"</p>
          <div className="flex items-center gap-3 pt-4 border-t border-border">
            <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center text-background font-display font-semibold">
              {r.name.charAt(0)}
            </div>
            <div>
              <div className="font-semibold text-sm">{r.name}</div>
              <div className="text-xs text-muted-foreground">{r.role}</div>
            </div>
          </div>
        </article>
      ))}
    </section>

    {/* CTA */}
    <section className="container pb-24">
      <div className="bg-gradient-warm rounded-[2.5rem] p-10 md:p-16 text-center">
        <h2 className="font-display text-4xl md:text-5xl mb-4">Be our next happy story</h2>
        <p className="text-muted-foreground max-w-xl mx-auto mb-8">Book your shoot today and join hundreds of clients who trusted us with their moments.</p>
        <Button asChild variant="luxury" size="xl">
          <Link to="/contact">Book Your Shoot</Link>
        </Button>
      </div>
    </section>
  </>
);

export default Reviews;
