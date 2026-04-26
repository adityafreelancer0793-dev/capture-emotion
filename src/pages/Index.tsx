import { Link } from "react-router-dom";
import { Star, ArrowRight, Camera, Heart, Sparkles, Users, Award, Clock, ChevronDown, Film, ShoppingBag, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { portfolioItems, homepageRecent } from "@/data/portfolio";

const services = [
  { Icon: Film, title: "Films & Ad Shoot", desc: "Cinematic ad films & branded content" },
  { Icon: ShoppingBag, title: "Fashion & Products", desc: "Editorial fashion & e-commerce shoots" },
  { Icon: Sparkles, title: "Events", desc: "Premieres, parties & cultural events" },
  { Icon: Building2, title: "Corporate Shoots", desc: "Conferences, annual meets & exhibitions" },
  { Icon: Heart, title: "Wedding", desc: "Timeless wedding stories" },
];

const Index = () => {
  const lastTwo = homepageRecent;

  return (
    <>
      <SEO
        title="Capture Emotions Photography Mumbai | Wedding, Events & Portrait Shoots"
        description="Capture Emotions offers premium wedding photography, portraits, event shoots and product photography in Mumbai. Affordable quality photography with 4.8 rating and 146 reviews."
      />

      {/* HERO */}
      <section className="relative bg-gradient-hero overflow-hidden">
        <div className="container pt-12 pb-24 lg:pt-20 lg:pb-32 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-secondary px-4 py-2 rounded-full text-xs font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              Mumbai's Premium Photography Studio
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight">
              We Capture <em className="text-gold not-italic">Emotions</em><br />
              That Last Forever
            </h1>
            <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
              From intimate weddings to bold editorials, Capture Emotions crafts photography that feels handcrafted, cinematic, and timeless.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="luxury" size="xl">
                <Link to="/contact">Book a Shoot <ArrowRight className="w-4 h-4" /></Link>
              </Button>
              <Button asChild variant="soft" size="xl">
                <Link to="/portfolio">View Portfolio</Link>
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <span className="text-sm font-semibold">4.8</span>
                <span className="text-xs text-muted-foreground">(146 Google Reviews)</span>
              </div>
              <div className="h-8 w-px bg-border" />
              <div className="text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">50,000+</span> happy clients
              </div>
            </div>
          </div>

          {/* Floating image collage */}
          <div className="lg:col-span-6 relative h-[500px] lg:h-[620px]">
            <div className="absolute top-0 right-0 w-[58%] h-[70%] rounded-[2rem] overflow-hidden shadow-elegant animate-float">
              <img src={portfolioItems[0].src} alt={portfolioItems[0].alt} className="w-full h-full object-cover" loading="eager" />
            </div>
            <div className="absolute bottom-0 left-0 w-[55%] h-[60%] rounded-[2rem] overflow-hidden shadow-elegant animate-float" style={{ animationDelay: "1.5s" }}>
              <img src={portfolioItems[2].src} alt={portfolioItems[2].alt} className="w-full h-full object-cover" loading="eager" />
            </div>
            <div className="absolute top-[30%] left-[10%] bg-background rounded-2xl p-4 shadow-card flex items-center gap-3 animate-float" style={{ animationDelay: "0.7s" }}>
              <div className="w-10 h-10 rounded-full bg-gradient-gold flex items-center justify-center">
                <Award className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Trusted by</div>
                <div className="text-sm font-semibold">50,000+ Clients</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BADGES */}
      <section className="container py-12 border-y border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { Icon: Star, label: "4.8 Google Rating", value: "146 Reviews" },
            { Icon: Users, label: "Happy Clients", value: "50,000+" },
            { Icon: Clock, label: "Available", value: "24 / 7" },
            { Icon: Award, label: "Years of Craft", value: "8+ Years" },
          ].map(({ Icon, label, value }) => (
            <div key={label} className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-gold" />
              </div>
              <div>
                <div className="text-lg font-display font-semibold">{value}</div>
                <div className="text-xs text-muted-foreground">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="container py-24">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs tracking-[0.3em] uppercase text-gold font-medium">What We Do</span>
          <h2 className="font-display text-4xl md:text-5xl mt-3">A studio built around your story</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {services.map(({ Icon, title, desc }) => (
            <div key={title} className="bg-background border border-border rounded-3xl p-7 hover-lift cursor-pointer group">
              <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-foreground group-hover:text-background transition-smooth">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="container py-20">
        <div className="bg-gradient-warm rounded-[2.5rem] p-10 md:p-16 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-gold font-medium">Why Choose Us</span>
            <h2 className="font-display text-4xl md:text-5xl mt-3 mb-6">Premium craft. Honest pricing.</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              We blend editorial vision with documentary instinct — delivering galleries you'll cherish for generations, without inflated agency price tags.
            </p>
            <div className="space-y-3">
              {["Top-rated 4.8★ photography in Mumbai","Cinematic storytelling, not just photos","Transparent budget-friendly packages","Fast delivery with premium edits"].map((p) => (
                <div key={p} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-foreground text-background text-xs flex items-center justify-center">✓</div>
                  <span className="text-sm">{p}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[420px]">
            <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-elegant">
              <img src={portfolioItems[1].src} alt="Featured" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* RECENT WORK from portfolio */}
      <section className="container py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-gold font-medium">Recent Work</span>
            <h2 className="font-display text-4xl md:text-5xl mt-3 max-w-xl">A glimpse from our latest stories</h2>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {lastTwo.map((item) => (
            <div key={item.src} className="group relative rounded-3xl overflow-hidden shadow-card hover-lift aspect-[4/5]">
              <img src={item.src} alt={item.alt} className="w-full h-full object-cover transition-luxury group-hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
              <div className="absolute bottom-6 left-6 right-6 text-background opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-luxury">
                <div className="text-xs tracking-widest uppercase">{item.category}</div>
                <div className="font-display text-xl">{item.alt}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center mt-12">
          <Button asChild variant="luxury" size="xl" className="group">
            <Link to="/portfolio">
              See All Portfolio
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-smooth" />
            </Link>
          </Button>
        </div>
      </section>

      {/* INTRO VIDEO */}
      <section className="container pb-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-xs tracking-[0.3em] uppercase text-gold font-medium">Studio Intro</span>
          <h2 className="font-display text-4xl md:text-5xl mt-3">A glimpse inside our world</h2>
        </div>
        <div className="rounded-[2rem] overflow-hidden shadow-elegant bg-foreground aspect-video w-full max-w-5xl mx-auto">
          <iframe
            src="https://drive.google.com/file/d/1gaoeH4HS7QKQyjFOqkDrkeqcLr5wXMrX/preview"
            className="w-full h-full"
            allow="autoplay; fullscreen"
            allowFullScreen
            title="Capture Emotions — Studio Intro"
          />
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="container pb-24">
        <div className="bg-foreground text-background rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-gold rounded-full opacity-20 blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-4xl md:text-5xl mb-4">Let's create something timeless</h2>
            <p className="text-background/70 max-w-xl mx-auto mb-8">Tell us about your moment — we'll craft a photography experience around it.</p>
            <Button asChild variant="gold" size="xl">
              <Link to="/contact">Book Your Shoot <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
