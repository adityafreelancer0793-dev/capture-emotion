import { Link } from "react-router-dom";
import {
  Megaphone, Sparkles, Video, Share2, MonitorPlay, Package,
  Building2, Users, Image as ImageIcon, PartyPopper, Film, Ribbon,
  Home, Factory, Store, Wine, Heart, Cake, Gift, Baby, KeyRound,
  Diamond, Camera, Flame, Calendar, Sofa, Utensils, ArrowRight,
  Music, Sunrise,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

interface Service {
  Icon: typeof Megaphone;
  title: string;
  description: string;
}

const services: Service[] = [
  { Icon: Megaphone, title: "Ads", description: "High-impact advertising films and stills built to convert." },
  { Icon: Sparkles, title: "Fashion", description: "Editorial fashion shoots with mood, movement and style." },
  { Icon: Video, title: "Promotional Content", description: "Brand promos crafted to drive awareness and engagement." },
  { Icon: Share2, title: "Social Media Reels", description: "Scroll-stopping reels designed for Instagram and beyond." },
  { Icon: MonitorPlay, title: "Digital Media Content", description: "Versatile content tailored for every digital platform." },
  { Icon: Package, title: "Product Shoots for E-commerce & Websites", description: "Clean, conversion-focused product photography." },
  { Icon: Building2, title: "Corporate Events", description: "Polished coverage of conferences, launches and summits." },
  { Icon: Users, title: "Annual Meet-ups", description: "Documenting your company culture and milestones." },
  { Icon: ImageIcon, title: "Exhibition Shoots", description: "Trade show and exhibition coverage that tells your brand story." },
  { Icon: PartyPopper, title: "Celebration Events", description: "Capturing the joy of every kind of celebration." },
  { Icon: Film, title: "Premieres", description: "Red-carpet ready coverage for premieres and launches." },
  { Icon: Ribbon, title: "Inaugurations", description: "Memorable visuals for openings and ribbon-cutting moments." },
  { Icon: Home, title: "Real Estate", description: "Architectural photography that sells the space." },
  { Icon: Factory, title: "Plant & Factory Shoots", description: "Industrial photography showcasing scale and capability." },
  { Icon: Store, title: "Shops & Commercial Compounds", description: "Retail and commercial space photography." },
  { Icon: Wine, title: "Pubs, Bars, Restaurants & Salons", description: "Atmospheric shoots that capture the vibe of your venue." },
  { Icon: Heart, title: "Weddings", description: "Cinematic, heart-led wedding photography and films." },
  { Icon: Cake, title: "Birthdays", description: "Joyful birthday photography for every age." },
  { Icon: Gift, title: "Anniversaries", description: "Intimate anniversary shoots that honour your story." },
  { Icon: Baby, title: "Baby Showers", description: "Soft, celebratory shoots for new beginnings." },
  { Icon: KeyRound, title: "House Warming", description: "Capturing the warmth of your new home." },
  { Icon: Diamond, title: "Engagements", description: "Romantic engagement photography to remember forever." },
  { Icon: Sunrise, title: "Pre-Wedding Events", description: "Dreamy pre-wedding shoots in stunning locations." },
  { Icon: Flame, title: "Religious & Cultural Shoots", description: "Respectful coverage of rituals and traditions." },
  { Icon: Calendar, title: "All Festival Events", description: "Vibrant festival photography full of colour and life." },
  { Icon: Music, title: "Holi, Diwali, Christmas & New Year", description: "Festive shoots that capture the spirit of the season." },
  { Icon: PartyPopper, title: "Ganpati & many more", description: "Devotional and cultural festival coverage." },
  { Icon: Sofa, title: "Interior & Exterior Shoots", description: "Stunning interior and exterior architectural photography." },
  { Icon: Camera, title: "Ambience Shoots", description: "Mood-driven shoots that capture atmosphere and feel." },
  { Icon: Utensils, title: "F & B Shoots", description: "Crave-worthy food and beverage photography." },
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

    {/* SERVICES GRID */}
    <section className="container py-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ Icon, title, description }, i) => (
          <div
            key={title}
            className="group bg-background border border-border rounded-3xl p-7 hover-lift animate-fade-up flex flex-col"
            style={{ animationDelay: `${i * 30}ms` }}
          >
            <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-gradient-gold transition-luxury">
              <Icon className="w-6 h-6 text-gold group-hover:text-background transition-smooth" />
            </div>
            <h3 className="font-display text-xl mb-2 leading-snug">{title}</h3>
            <p className="text-sm text-muted-foreground mb-6 flex-1">{description}</p>
            <Button asChild variant="luxury" size="sm" className="self-start">
              <Link to="/contact">Enquire Now <ArrowRight className="w-3.5 h-3.5" /></Link>
            </Button>
          </div>
        ))}
      </div>
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
