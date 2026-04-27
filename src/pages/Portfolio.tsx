import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { X, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";
import { categories, portfolioItems, adVideos, type Category } from "@/data/portfolio";

const Portfolio = () => {
  const [active, setActive] = useState<Category>("All Pics");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = useMemo(
    () => active === "All Pics" ? portfolioItems : portfolioItems.filter(p => p.category === active),
    [active]
  );

  const showAds = active === "Ads Work";

  return (
    <>
      <SEO
        title="Portfolio | Capture Emotions Photography Mumbai"
        description="Explore our premium photography portfolio — weddings, portraits, events, ad films and product shoots crafted by Capture Emotions Mumbai."
      />

      {/* HERO */}
      <section className="bg-gradient-hero py-20 text-center">
        <div className="container max-w-3xl animate-fade-up">
          <span className="text-xs tracking-[0.3em] uppercase text-gold font-medium">Portfolio</span>
          <h1 className="font-display text-5xl md:text-6xl mt-3">A curated gallery of moments</h1>
          <p className="mt-6 text-muted-foreground text-lg">Real stories, captured with intention. Filter by category to explore our work.</p>
        </div>
      </section>

      {/* FILTERS */}
      <section className="container py-10">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-smooth ${
                active === cat
                  ? "bg-foreground text-background shadow-soft"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* GALLERY or ADS WORK */}
      <section className="container pb-20">
        {showAds ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {adVideos.map((v, i) => (
              <div
                key={v.id}
                className="group bg-background rounded-3xl overflow-hidden shadow-card hover-lift animate-fade-up flex flex-col"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <a href={v.url} target="_blank" rel="noreferrer" className="relative block aspect-video overflow-hidden">
                  <img
                    src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                    alt={v.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-luxury group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/30 transition-smooth flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-background/95 flex items-center justify-center shadow-elegant group-hover:scale-110 transition-luxury">
                      <Play className="w-6 h-6 text-foreground ml-1" fill="currentColor" />
                    </div>
                  </div>
                </a>
                <div className="p-5 flex items-center justify-between gap-3">
                  <div>
                    <div className="text-[10px] tracking-[0.3em] uppercase text-gold">Ad Film</div>
                    <div className="font-display text-base mt-1">{v.title}</div>
                  </div>
                  <Button asChild variant="luxury" size="sm">
                    <a href={v.url} target="_blank" rel="noreferrer">View</a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            <p>No images in this category yet — check back soon.</p>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filtered.map((item, i) => (
              <div
                key={item.src}
                className="break-inside-avoid relative rounded-3xl overflow-hidden shadow-card hover-lift cursor-pointer group animate-fade-up"
                style={{ animationDelay: `${i * 60}ms` }}
                onClick={() => setLightbox(item.src)}
              >
                <img src={item.src} alt={item.alt} loading="lazy" className="w-full h-auto object-cover transition-luxury group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                <div className="absolute bottom-5 left-5 right-5 text-background opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-luxury">
                  <div className="text-[10px] tracking-[0.3em] uppercase">{item.category}</div>
                  <div className="font-display text-lg leading-snug">{item.alt}</div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* AD FILMS */}
      <section className="container pb-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs tracking-[0.3em] uppercase text-gold font-medium">Ad Films</span>
          <h2 className="font-display text-4xl md:text-5xl mt-3">Our Ad Work</h2>
          <p className="mt-4 text-muted-foreground">A showcase of cinematic ad films crafted by Capture Emotions.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {adVideos.map((v, i) => (
            <div
              key={v.id}
              className="group bg-background rounded-3xl overflow-hidden shadow-card hover-lift animate-fade-up flex flex-col"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <a href={v.url} target="_blank" rel="noreferrer" className="relative block aspect-video overflow-hidden">
                <img
                  src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                  alt={v.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-luxury group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/30 transition-smooth flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-background/95 flex items-center justify-center shadow-elegant group-hover:scale-110 transition-luxury">
                    <Play className="w-6 h-6 text-foreground ml-1" fill="currentColor" />
                  </div>
                </div>
              </a>
              <div className="p-5 flex items-center justify-between gap-3">
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase text-gold">Ad Film</div>
                  <div className="font-display text-base mt-1">{v.title}</div>
                </div>
                <Button asChild variant="luxury" size="sm">
                  <a href={v.url} target="_blank" rel="noreferrer">View</a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BEHIND THE SCENES */}
      <section className="container pb-20">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs tracking-[0.3em] uppercase text-gold font-medium">Behind the Scenes</span>
          <h2 className="font-display text-4xl md:text-5xl mt-3">From our set to your story</h2>
          <p className="mt-4 text-muted-foreground">A peek into the craft, energy and emotion behind every Capture Emotions production.</p>
        </div>
        <div className="rounded-[2rem] overflow-hidden shadow-elegant bg-foreground aspect-video w-full">
          <iframe
            src="https://drive.google.com/file/d/1IfRLSrekJVS1CXzp9pazsVZVtwbs3KI0/preview"
            className="w-full h-full"
            allow="autoplay; fullscreen"
            allowFullScreen
            title="Behind the scenes — Capture Emotions"
          />
        </div>
      </section>

      {/* FEATURED */}
      <section className="container pb-24">
        <div className="bg-foreground text-background rounded-[2.5rem] p-10 md:p-16 text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-4">Love what you see?</h2>
          <p className="text-background/70 max-w-xl mx-auto mb-8">Let's plan your shoot — weddings, portraits, brand campaigns and more.</p>
          <Button asChild variant="gold" size="xl">
            <Link to="/contact">Book Your Session</Link>
          </Button>
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightbox && (
        <div className="fixed inset-0 z-[60] bg-foreground/95 backdrop-blur-sm flex items-center justify-center p-6 animate-fade-in" onClick={() => setLightbox(null)}>
          <button className="absolute top-6 right-6 w-12 h-12 rounded-full bg-background/10 text-background flex items-center justify-center hover:bg-background/20 transition-smooth" onClick={() => setLightbox(null)}>
            <X className="w-5 h-5" />
          </button>
          <img src={lightbox} alt="Preview" className="max-h-[90vh] max-w-full rounded-2xl shadow-elegant" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </>
  );
};

export default Portfolio;
