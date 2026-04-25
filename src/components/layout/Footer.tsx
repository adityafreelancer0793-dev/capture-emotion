import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube, MessageCircle, MapPin, Phone, Clock } from "lucide-react";

const Footer = () => (
  <footer className="bg-secondary/40 border-t border-border mt-24">
    <div className="container py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
      <div>
        <Link to="/" className="flex items-center gap-2 mb-4">
          <div className="w-10 h-10 rounded-2xl bg-gradient-gold flex items-center justify-center shadow-glow">
            <span className="text-primary-foreground font-display font-bold text-lg">C</span>
          </div>
          <span className="font-display text-xl font-semibold">Capture Emotions</span>
        </Link>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Premium wedding, portrait, event & product photography in Mumbai. Capturing emotions that last forever.
        </p>
        <div className="flex gap-3 mt-5">
          {[
            { Icon: Instagram, href: "#" },
            { Icon: Facebook, href: "#" },
            { Icon: Youtube, href: "#" },
            { Icon: MessageCircle, href: "https://wa.me/919372194847" },
          ].map(({ Icon, href }, i) => (
            <a key={i} href={href} target="_blank" rel="noreferrer"
               className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:bg-foreground hover:text-background hover:border-foreground transition-smooth">
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-display text-base mb-4">Quick Links</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {[["Home","/"],["About","/about"],["Portfolio","/portfolio"],["Reviews","/reviews"],["Contact","/contact"]].map(([l,h]) => (
            <li key={h}><Link to={h} className="hover:text-foreground transition-smooth">{l}</Link></li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-display text-base mb-4">Services</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {["Wedding Photography","Pre Wedding Shoots","Portrait Photography","Event Photography","Product Photography","Baby & Family Shoots"].map((s) => (
            <li key={s} className="hover:text-foreground transition-smooth cursor-pointer">{s}</li>
          ))}
        </ul>
      </div>

      <div>
        <h4 className="font-display text-base mb-4">Get in Touch</h4>
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li className="flex gap-3"><Phone className="w-4 h-4 mt-0.5 text-gold shrink-0" /><a href="tel:09372194847" className="hover:text-foreground">093721 94847</a></li>
          <li className="flex gap-3"><MapPin className="w-4 h-4 mt-0.5 text-gold shrink-0" />Link Plaza Commercial Complex, 92, Andheri West, Mumbai 400102</li>
          <li className="flex gap-3"><Clock className="w-4 h-4 mt-0.5 text-gold shrink-0" />Open 24 hours</li>
        </ul>
      </div>
    </div>
    <div className="border-t border-border">
      <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Capture Emotions. All rights reserved.</p>
        <p>
          Made by{" "}
          <a
            href="https://wa.me/919337166103"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-foreground hover:text-gold transition-smooth"
          >
            Aditya
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
