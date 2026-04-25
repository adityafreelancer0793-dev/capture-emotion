import { Link } from "react-router-dom";
import {
  Megaphone, Sparkles, Video, Share2, MonitorPlay, Package,
  Building2, Users, Image as ImageIcon, PartyPopper, Film, Ribbon,
  Home, Factory, Store, Wine, Heart, Cake, Gift, Baby, KeyRound,
  Diamond, Camera, Flame, Calendar, Sofa, Utensils, ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

interface Group {
  title: string;
  tagline: string;
  items: { Icon: typeof Megaphone; label: string }[];
}

const groups: Group[] = [
  {
    title: "Commercial & Brand",
    tagline: "Ad films, fashion and content built for brands that want to stand out.",
    items: [
      { Icon: Megaphone, label: "Ads" },
      { Icon: Sparkles, label: "Fashion" },
      { Icon: Video, label: "Promotional Content" },
      { Icon: Share2, label: "Social Media Reels" },
      { Icon: MonitorPlay, label: "Digital Media Content" },
      { Icon: Package, label: "Product Shoots for E-commerce & Websites" },
    ],
  },
  {
    title: "Corporate & Events",
    tagline: "Polished coverage for companies, exhibitions and milestone moments.",
    items: [
      { Icon: Building2, label: "Corporate Events" },
      { Icon: Users, label: "Annual Meet-ups" },
      { Icon: ImageIcon, label: "Exhibition Shoots" },
      { Icon: PartyPopper, label: "Celebration Events" },
      { Icon: Film, label: "Premieres" },
      { Icon: Ribbon, label: "Inaugurations" },
    ],
  },
  {
    title: "Real Estate & Spaces",
    tagline: "Architectural, interior and ambience shoots that sell the experience.",
    items: [
      { Icon: Home, label: "Real Estate" },
      { Icon: Factory, label: "Plant & Factory Shoots" },
      { Icon: Store, label: "Shops & Commercial Compounds" },
      { Icon: Wine, label: "Pubs, Bars, Restaurants & Salons" },
      { Icon: Sofa, label: "Interior & Exterior Shoots" },
      { Icon: Camera, label: "Ambience Shoots" },
    ],
  },
  {
    title: "Personal Celebrations",
    tagline: "Heart-led photography for the moments that matter most.",
    items: [
      { Icon: Heart, label: "Weddings" },
      { Icon: Cake, label: "Birthdays" },
      { Icon: Gift, label: "Anniversaries" },
      { Icon: Baby, label: "Baby Showers" },
      { Icon: KeyRound, label: "House Warming" },
      { Icon: Diamond, label: "Engagements" },
      { Icon: Camera, label: "Pre-Wedding Events" },
    ],
  },
  {
    title: "Cultural & Festivals",
    tagline: "Capturing rituals, traditions and the colour of every celebration.",
    items: [
      { Icon: Flame, label: "Religious & Cultural Shoots" },
      { Icon: Calendar, label: "All Festival Events" },
      { Icon: Sparkles, label: "Holi, Diwali, Christmas & New Year" },
      { Icon: PartyPopper, label: "Ganpati & many more" },
    ],
  },
  {
    title: "Food & Beverage",
    tagline: "Crave-worthy F&B photography for restaurants and brands.",
    items: [
      { Icon: Utensils, label: "F & B Shoots" },
    ],
  },
];

const Services = () => (
  <>
    <SEO
      title="Services | Capture Emotions — Pan India Production House"
      description="Full-spectrum photography & cinematography services — ads, fashion, weddings, corporate events, product shoots, real estate, festivals and more across India."
    />

    {/* HERO */}
    <section className="bg-gradient-hero py-20 text-center">
      <div className="container max-w-3xl animate-fade-up">
        <span className="text-xs tracking-[0.3em] uppercase text-gold font-medium">Our Services</span>
        <h1 className="font-display text-5xl md:text-6xl mt-3 leading-tight">Everything we shoot, beautifully</h1>
        <p className="mt-6 text-muted-foreground text-lg">
          From ad films and fashion campaigns to weddings and festivals — Capture Emotions is a full-service production house covering every kind of shoot, anywhere in India.
        </p>
      </div>
    </section>

    {/* GROUPS */}
    <section className="container py-16 space-y-12">
      {groups.map((g, gi) => (
        <div key={g.title} className="animate-fade-up" style={{ animationDelay: `${gi * 80}ms` }}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-gold font-medium">0{gi + 1}</span>
              <h2 className="font-display text-3xl md:text-4xl mt-2">{g.title}</h2>
            </div>
            <p className="text-muted-foreground max-w-md md:text-right">{g.tagline}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {g.items.map(({ Icon, label }) => (
              <div key={label} className="bg-background border border-border rounded-3xl p-5 flex items-center gap-4 hover-lift">
                <div className="w-12 h-12 rounded-2xl bg-secondary flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-gold" />
                </div>
                <div className="font-medium text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>

    {/* CTA */}
    <section className="container pb-24">
      <div className="bg-foreground text-background rounded-[2.5rem] p-10 md:p-16 text-center relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-gold rounded-full opacity-20 blur-3xl" />
        <div className="relative">
          <h2 className="font-display text-4xl md:text-5xl mb-4">Have a project in mind?</h2>
          <p className="text-background/70 max-w-xl mx-auto mb-8">
            Tell us what you need shot — we'll design a production tailored to your vision and budget.
          </p>
          <Button asChild variant="gold" size="xl">
            <Link to="/contact">Get a Custom Quote <ArrowRight className="w-4 h-4" /></Link>
          </Button>
        </div>
      </div>
    </section>
  </>
);

export default Services;
