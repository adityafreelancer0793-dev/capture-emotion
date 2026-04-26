import { useState } from "react";
import { Phone, MapPin, Clock, MessageCircle, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import SEO from "@/components/SEO";

const Contact = () => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      toast.success("Inquiry sent! We'll respond within an hour.");
      (e.target as HTMLFormElement).reset();
      setSubmitting(false);
    }, 700);
  };

  return (
    <>
      <SEO
        title="Contact Capture Emotions | Book Your Photography Shoot in Mumbai"
        description="Book your premium photography session with Capture Emotions Mumbai. Call 093721 94847, message on WhatsApp or visit our Andheri West studio."
      />

      {/* HERO */}
      <section className="bg-gradient-hero py-20 text-center">
        <div className="container max-w-3xl animate-fade-up">
          <span className="text-xs tracking-[0.3em] uppercase text-gold font-medium">Get in Touch</span>
          <h1 className="font-display text-5xl md:text-6xl mt-3">Let's craft your story</h1>
          <p className="mt-6 text-muted-foreground text-lg">We respond within one hour, every day. Tell us a bit about your shoot below.</p>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="container py-16 grid lg:grid-cols-5 gap-8">
        {/* INFO CARDS */}
        <div className="lg:col-span-2 space-y-5">
          {[
            { Icon: Phone, label: "Call Us", value: "093721 94847", href: "tel:09372194847" },
            { Icon: MessageCircle, label: "WhatsApp", value: "Chat instantly", href: "https://wa.me/919372194847" },
            { Icon: Mail, label: "Email", value: "Capturestudio1506@gmail.com", href: "mailto:Capturestudio1506@gmail.com" },
            { Icon: MapPin, label: "Studio", value: "Link Plaza, 92, Andheri West, Mumbai 400102" },
            { Icon: Clock, label: "Working Hours", value: "Open 24 hours · 7 days" },
          ].map(({ Icon, label, value, href }) => {
            const inner = (
              <div className="bg-background border border-border rounded-3xl p-6 hover-lift flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-gold flex items-center justify-center shrink-0 shadow-glow">
                  <Icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{label}</div>
                  <div className="font-display text-lg mt-1">{value}</div>
                </div>
              </div>
            );
            return href ? (
              <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="block">{inner}</a>
            ) : <div key={label}>{inner}</div>;
          })}

          <div className="bg-foreground text-background rounded-3xl p-6">
            <div className="font-display text-xl mb-2">Quick Response Promise</div>
            <p className="text-sm text-background/70">Every inquiry is answered personally — usually within 60 minutes.</p>
          </div>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="lg:col-span-3 bg-background border border-border rounded-[2rem] p-8 md:p-10 shadow-card space-y-5">
          <div>
            <h2 className="font-display text-3xl">Send a quick inquiry</h2>
            <p className="text-sm text-muted-foreground mt-1">Tell us about your event and we'll send a personalised quote.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Name</label>
              <Input required name="name" className="mt-2 h-12 rounded-2xl bg-secondary/40 border-border" placeholder="Your full name" />
            </div>
            <div>
              <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Phone</label>
              <Input required name="phone" type="tel" className="mt-2 h-12 rounded-2xl bg-secondary/40 border-border" placeholder="+91" />
            </div>
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Email</label>
            <Input name="email" type="email" className="mt-2 h-12 rounded-2xl bg-secondary/40 border-border" placeholder="you@email.com" />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Service Interested In</label>
            <Input name="service" className="mt-2 h-12 rounded-2xl bg-secondary/40 border-border" placeholder="Wedding, Portrait, Event…" />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">Message</label>
            <Textarea name="message" rows={5} className="mt-2 rounded-2xl bg-secondary/40 border-border" placeholder="Tell us about your shoot, date, location…" />
          </div>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button type="submit" disabled={submitting} variant="luxury" size="xl" className="w-full sm:w-auto">
              {submitting ? "Sending…" : <>Send Inquiry <Send className="w-4 h-4" /></>}
            </Button>
            <Button asChild variant="soft" size="xl" className="w-full sm:w-auto">
              <a href="https://wa.me/919372194847" target="_blank" rel="noreferrer">
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </a>
            </Button>
          </div>
        </form>
      </section>

      {/* MAP */}
      <section className="container pb-24">
        <div className="rounded-[2rem] overflow-hidden shadow-card aspect-[16/7]">
          <iframe
            title="Capture Emotions Studio Location"
            src="https://www.google.com/maps?q=Link+Plaza+Commercial+Complex+Andheri+West+Mumbai&output=embed"
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          />
        </div>
      </section>
    </>
  );
};

export default Contact;
