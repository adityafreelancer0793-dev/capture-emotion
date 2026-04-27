import { Link } from "react-router-dom";
import { Star, Award, Clock, Users, Heart, Camera, Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import founder from "@/assets/founder.jpg";

const About = () => (
  <>
    <SEO
      title="About Capture Emotions | Premium Photography Studio Mumbai"
      description="Meet the team behind Capture Emotions — Mumbai's award-winning photography studio with 146+ five-star reviews. Discover our story, mission, and craft."
    />

    {/* HERO */}
    <section className="bg-gradient-hero py-20">
      <div className="container text-center max-w-3xl mx-auto animate-fade-up">
        <span className="text-xs tracking-[0.3em] uppercase text-gold font-medium">Our Story</span>
        <h1 className="font-display text-5xl md:text-6xl mt-3 leading-tight">A studio built on emotion, craft & trust</h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Capture Emotions is a Mumbai-based photography studio creating cinematic visuals for weddings, portraits, events and brands across India.
        </p>
      </div>
    </section>

    {/* STATS */}
    <section className="container -mt-10">
      <div className="bg-background rounded-[2rem] shadow-elegant p-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { Icon: Star, value: "4.8★", label: "Google Rating" },
          { Icon: Users, value: "146+", label: "Happy Reviews" },
          { Icon: Clock, value: "24/7", label: "Always Open" },
          { Icon: Award, value: "8+ Yrs", label: "Trusted Brand" },
        ].map(({ Icon, value, label }) => (
          <div key={label} className="text-center">
            <div className="w-12 h-12 mx-auto rounded-2xl bg-secondary flex items-center justify-center mb-3">
              <Icon className="w-5 h-5 text-gold" />
            </div>
            <div className="font-display text-2xl">{value}</div>
            <div className="text-xs text-muted-foreground mt-1">{label}</div>
          </div>
        ))}
      </div>
    </section>

    {/* FOUNDER */}
    <section className="container py-24 grid lg:grid-cols-2 gap-14 items-center">
      <div className="relative">
        <div className="rounded-[2rem] overflow-hidden shadow-elegant">
          <img src={founder} alt="Vishwas Gulati — Founder of Capture Emotions" className="w-full h-auto object-cover" />
        </div>
        <div className="absolute -bottom-6 -right-4 md:-right-10 bg-background rounded-2xl shadow-card p-5 max-w-[240px]">
          <div className="text-xs text-gold tracking-widest uppercase mb-1">Award Winning</div>
          <div className="font-display text-base leading-snug">Best Photography Company of the Year 2024</div>
        </div>
        <div className="mt-10 bg-secondary/40 rounded-3xl p-6 md:p-7">
          <div className="text-xs tracking-[0.3em] uppercase text-gold font-medium mb-2">About the Founder</div>
          <h3 className="font-display text-2xl md:text-3xl leading-tight">Vishwas Gulati</h3>
          <p className="text-sm text-muted-foreground mt-1 italic">Award winning Photographer &amp; Cinematographer</p>
          <ul className="mt-4 space-y-1.5 text-sm text-foreground">
            <li>• Young Entrepreneur</li>
            <li>• Director — Capture Emotions</li>
            <li>• Director — Studio One Photographer Private Limited</li>
          </ul>
        </div>
      </div>
      <div>
        <span className="text-xs tracking-[0.3em] uppercase text-gold font-medium">Meet the Founder</span>
        <h2 className="font-display text-4xl md:text-5xl mt-3 mb-6">Crafting stories one frame at a time</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          What started as passion for capturing fleeting moments has grown into one of Mumbai's most loved photography studios. Our founder leads every shoot with an eye for emotion, light, and the small details that make a memory feel alive.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Recognised as <span className="font-semibold text-foreground">Best Photography Company of the Year 2024</span>, we continue to push craft and care forward — for every couple, family and brand we serve.
        </p>
        <Button asChild variant="luxury" size="lg">
          <Link to="/contact">Work with us <ArrowRight className="w-4 h-4" /></Link>
        </Button>
      </div>
    </section>

    {/* MISSION & VISION */}
    <section className="container pb-24 grid md:grid-cols-2 gap-6">
      {[
        { Icon: Heart, title: "Our Mission", text: "To capture genuine emotion in every frame — delivering premium-quality photography at honest, accessible prices." },
        { Icon: Sparkles, title: "Our Vision", text: "To become India's most trusted photography brand by combining cinematic craft with personal, considerate service." },
      ].map(({ Icon, title, text }) => (
        <div key={title} className="bg-secondary/40 rounded-3xl p-10 hover-lift">
          <div className="w-12 h-12 rounded-2xl bg-background flex items-center justify-center mb-5 shadow-soft">
            <Icon className="w-5 h-5 text-gold" />
          </div>
          <h3 className="font-display text-3xl mb-3">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{text}</p>
        </div>
      ))}
    </section>

    {/* WHY CLIENTS CHOOSE US */}
    <section className="container pb-24">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs tracking-[0.3em] uppercase text-gold font-medium">Why Clients Choose Us</span>
        <h2 className="font-display text-4xl md:text-5xl mt-3">A premium experience, end to end</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { Icon: Camera, title: "Cinematic Craft", text: "Editorial framing, natural light mastery, and timeless edits." },
          { Icon: Heart, title: "Personal Approach", text: "We listen first, then design a shoot tailored to your story." },
          { Icon: Award, title: "Trusted Quality", text: "146+ five-star reviews and recognition from industry leaders." },
        ].map(({ Icon, title, text }) => (
          <div key={title} className="bg-background border border-border rounded-3xl p-7 hover-lift">
            <Icon className="w-6 h-6 text-gold mb-4" />
            <h3 className="font-display text-xl mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </section>

    {/* TIMELINE */}
    <section className="container pb-24">
      <div className="bg-gradient-warm rounded-[2.5rem] p-10 md:p-16">
        <div className="text-center mb-12">
          <span className="text-xs tracking-[0.3em] uppercase text-gold font-medium">Experience Timeline</span>
          <h2 className="font-display text-4xl md:text-5xl mt-3">Eight years of capturing emotion</h2>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { y: "2017", t: "Studio Founded", d: "First wedding shoot in Mumbai." },
            { y: "2019", t: "100 Weddings", d: "Crossed 100 luxury weddings." },
            { y: "2022", t: "Brand Clients", d: "Premium product & commercial shoots." },
            { y: "2024", t: "Award Winning", d: "Best Photography Company of the Year." },
          ].map((m) => (
            <div key={m.y} className="bg-background rounded-2xl p-6 shadow-soft hover-lift">
              <div className="font-display text-3xl text-gold mb-2">{m.y}</div>
              <div className="font-semibold mb-1">{m.t}</div>
              <div className="text-sm text-muted-foreground">{m.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* AWARD WINNING COMPANY */}
    <section className="container pb-24">
      <div className="relative bg-foreground text-background rounded-[2.5rem] p-10 md:p-16 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-80 h-80 bg-gradient-gold rounded-full opacity-20 blur-3xl" />
        <div className="relative grid md:grid-cols-[auto,1fr] items-center gap-8">
          <div className="w-24 h-24 rounded-3xl bg-gradient-gold flex items-center justify-center shadow-glow shrink-0">
            <Award className="w-10 h-10 text-primary-foreground" />
          </div>
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-gold font-medium">Recognised Excellence</span>
            <h3 className="font-display text-3xl md:text-4xl mt-2 mb-3">Award Winning Company</h3>
            <p className="text-background/70 leading-relaxed max-w-2xl">
              Honoured as <span className="text-gold font-semibold">Best Photography Company of the Year 2024</span> — a recognition of eight years of craft, care and cinematic storytelling for clients across India.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* COMPANY SIGNATURE */}
    <section className="container pb-20">
      <div className="bg-secondary/40 rounded-[2rem] py-10 px-6 md:py-14 md:px-12 text-center max-w-4xl mx-auto">
        <h3 className="font-display text-2xl sm:text-3xl md:text-4xl leading-tight">
          Capture Emotions
        </h3>
        <p className="mt-3 text-sm sm:text-base md:text-lg text-muted-foreground leading-relaxed">
          An Initiative by <span className="text-foreground font-medium">Studio One Photography Private Limited</span>
        </p>
        <p className="mt-4 text-xs sm:text-sm tracking-[0.3em] uppercase text-gold font-medium">
          Professionally
        </p>
      </div>
    </section>
  </>
);

export default About;
