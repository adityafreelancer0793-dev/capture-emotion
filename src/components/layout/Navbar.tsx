import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        scrolled ? "bg-background/85 backdrop-blur-xl shadow-soft" : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-12 h-12 rounded-2xl bg-background border border-border flex items-center justify-center shadow-glow overflow-hidden transition-luxury group-hover:rotate-6">
            <img src={logo} alt="Capture Emotions logo" className="w-full h-full object-contain" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg font-semibold">Capture Emotions</div>
            <div className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase">Pan India Production House</div>
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm font-medium transition-smooth ${
                    isActive
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:09372194847" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-smooth">
            <Phone className="w-4 h-4" />
            093721 94847
          </a>
          <Button asChild variant="luxury" size="lg">
            <Link to="/contact">Book Now</Link>
          </Button>
        </div>

        <button
          className="lg:hidden p-2 rounded-xl hover:bg-secondary transition-smooth"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border animate-fade-in">
          <ul className="container py-6 space-y-1">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    `block px-4 py-3 rounded-xl font-medium transition-smooth ${
                      isActive ? "bg-secondary" : "hover:bg-secondary/60"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li className="pt-3">
              <Button asChild variant="luxury" className="w-full">
                <Link to="/contact">Book Now</Link>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
