import { useState, useEffect } from "react";
import { Coffee, UtensilsCrossed, Cake, MapPin, Phone, Mail, Instagram, Clock, Dog, Sun, Wifi } from "lucide-react";
import heroImage from "./assets/hero.jpg";
import aboutImage from "./assets/about.jpg";
import terraceImage from "./assets/terrace.jpg";

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Hours />
      <Visit />
      <Footer />
    </div>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Carta", href: "#carta" },
    { label: "Horarios", href: "#horarios" },
    { label: "Visítanos", href: "#visitas" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || menuOpen ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
      <div className="container-narrow flex items-center justify-between px-6 py-4">
        <a href="#" className={`text-xl tracking-tight transition-colors ${scrolled || menuOpen ? "text-foreground" : "text-white"}`} style={{ fontFamily: "var(--font-heading)", fontWeight: 600 }}>
          Restart Coffee
        </a>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className={`text-sm font-medium transition-colors ${scrolled ? "text-foreground/80 hover:text-foreground" : "text-white/90 hover:text-white"}`}>
              {link.label}
            </a>
          ))}
          <a href="#visitas" className={`inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-medium transition-colors ${scrolled ? "bg-primary text-primary-foreground hover:bg-earth-light" : "bg-white text-earth-dark hover:bg-cream-dark"}`}>
            Contacto
          </a>
        </div>
        <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menú">
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 transition-all duration-300 ${scrolled || menuOpen ? "bg-foreground" : "bg-white"} ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 transition-all duration-300 ${scrolled || menuOpen ? "bg-foreground" : "bg-white"} ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 transition-all duration-300 ${scrolled || menuOpen ? "bg-foreground" : "bg-white"} ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-6 pb-6 pt-2 flex flex-col gap-4 bg-background/95 backdrop-blur-md">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-base font-medium text-foreground/80 hover:text-foreground transition-colors" onClick={() => setMenuOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#visitas" className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-earth-light" onClick={() => setMenuOpen(false)}>
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-[70vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImage} alt="Interior luminoso de Restart Coffee" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50" />
      </div>
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p className="text-sm md:text-base tracking-widest uppercase text-white/90 mb-4 font-medium">Vilanova i la Geltrú</p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-white leading-tight mb-6 text-balance" style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}>
         Café de especialidad y brunch en Vilanova
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 font-light tracking-wide">Café, brunch y terraza en un espacio tranquilo</p>
        <a href="#carta" className="inline-flex items-center justify-center rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-earth-dark transition-all hover:bg-cream-dark hover:scale-105">
          Ver carta
        </a>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/40 flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="order-2 md:order-1">
            <p className="text-sm tracking-widest uppercase text-muted-foreground mb-3 font-medium">Sobre nosotros</p>
            <h2 className="text-3xl md:text-4xl mb-6 text-balance" style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}>
              Café de especialidad y brunch artesanal
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              En Restart Coffee servimos café de especialidad tostado por Nomad y brunch casero. Cuidamos cada detalle para ofrecer una experiencia tranquila, con productos frescos, opciones para desayunar o hacer brunch y un espacio pensado para disfrutar.
            </p>
            <div className="flex flex-wrap gap-4">
              <FeatureBadge icon={<Dog className="w-4 h-4" />} label="Dog-friendly" />
              <FeatureBadge icon={<Sun className="w-4 h-4" />} label="Terraza" />
              <FeatureBadge icon={<Wifi className="w-4 h-4" />} label="Wifi" />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={aboutImage} alt="Arte latte en taza de cerámica" className="w-full h-auto object-cover aspect-[4/3]" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureBadge({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm text-secondary-foreground">
      {icon}
      {label}
    </span>
  );
}

function Menu() {
  const categories = [
    { title: "Café de especialidad", icon: <Coffee className="w-6 h-6" />, items: ["Espresso", "Caramel Latte", "Matcha Latte", "Cortado", "Flat White"] },
    { title: "Brunch", icon: <UtensilsCrossed className="w-6 h-6" />, items: ["Tostadas gourmet", "Huevos Benedict", "Opciones sin glúten", "Sandwich Restart", "Aguacate toast"] },
    { title: "Repostería casera", icon: <Cake className="w-6 h-6" />, items: ["Cookies artesanas", "Bizcochos caseros", "Tartas del día"] },
  ];

  return (
    <section id="carta" className="section-padding bg-cream-dark/30">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <p className="text-sm tracking-widest uppercase text-muted-foreground mb-3 font-medium">Qué hacemos bien</p>
          <h2 className="text-3xl md:text-4xl text-balance" style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}>Un espacio donde el café, el brunch y la repostería se disfrutan sin prisas</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category) => (
            <div key={category.title} className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border/50 transition-shadow hover:shadow-md">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">{category.icon}</div>
                <h3 className="text-xl" style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}>{category.title}</h3>
              </div>
              <ul className="space-y-3">
                {category.items.map((item) => (
                  <li key={item} className="text-muted-foreground flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-terra mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Hours() {
  const schedule = [
    { days: "Lunes a Jueves", hours: "8:30 – 16:00" },
    { days: "Viernes", hours: "8:30 – 18:00" },
    { days: "Sábado", hours: "9:00 – 16:00" },
    { days: "Domingo", hours: "Cerrado" },
  ];

  return (
    <section id="horarios" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img src={terraceImage} alt="Terraza de Restart Coffee" className="w-full h-auto object-cover aspect-[4/3]" loading="lazy" />
            </div>
          </div>
          <div>
            <p className="text-sm tracking-widest uppercase text-muted-foreground mb-3 font-medium">Horarios</p>
            <h2 className="text-3xl md:text-4xl mb-8 text-balance" style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}>Ven cuando quieras</h2>
            <div className="space-y-4">
              {schedule.map((item) => (
                <div key={item.days} className={`flex items-center justify-between py-3 border-b border-border/60 ${item.days === "Domingo" ? "opacity-60" : ""}`}>
                  <span className="flex items-center gap-3 text-foreground">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    {item.days}
                  </span>
                  <span className="font-medium text-foreground">{item.hours}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Visit() {
  return (
    <section id="visitas" className="section-padding bg-cream-dark/30">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <p className="text-sm tracking-widest uppercase text-muted-foreground mb-3 font-medium">Visítanos</p>
          <h2 className="text-3xl md:text-4xl text-balance" style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}>Te esperamos en Escolapis, 8</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="rounded-2xl overflow-hidden shadow-lg h-80 md:h-auto min-h-[320px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.123!2d1.7247!3d41.2242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4878b2e2e2e2f%3A0x1234567890abcdef!2sCarrer%20dels%20Escolapis%2C%208%2C%2008800%20Vilanova%20i%20la%20Geltr%C3%BA!5e0!3m2!1ses!2ses!4v1680000000000"
              width="100%" height="100%" style={{ border: 0, minHeight: "320px" }}
              allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Restart Coffee"
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col justify-center gap-8">
            <div className="space-y-6">
              {[
                { icon: <MapPin className="w-5 h-5" />, title: "Dirección", content: <p className="text-muted-foreground">Carrer dels Escolapis, 8<br />08800 Vilanova i la Geltrú, Barcelona</p> },
                { icon: <Phone className="w-5 h-5" />, title: "Teléfono", content: <a href="tel:+34621306720" className="text-muted-foreground hover:text-foreground transition-colors">+34 621 30 67 20</a> },
                { icon: <Mail className="w-5 h-5" />, title: "Email", content: <a href="mailto:rscafevng@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">rscafevng@gmail.com</a> },
                { icon: <Instagram className="w-5 h-5" />, title: "Instagram", content: <a href="https://instagram.com/rscafevng" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">@rscafevng</a> },
              ].map(({ icon, title, content }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary shrink-0">{icon}</div>
                  <div>
                    <h3 className="text-lg mb-1" style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}>{title}</h3>
                    {content}
                  </div>
                </div>
              ))}
            </div>
            <a href="https://maps.google.com/?q=Carrer+dels+Escolapis,+8,+08800+Vilanova+i+la+Geltrú" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-earth-light w-fit">
              <MapPin className="w-4 h-4" />
              Cómo llegar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-earth-dark text-primary-foreground">
      <div className="container-narrow py-12 px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-xl mb-1" style={{ fontFamily: "var(--font-heading)", fontWeight: 500 }}>Restart Coffee</h3>
            <p className="text-sm text-white/70">Especialidad en Vilanova i la Geltrú</p>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://instagram.com/rscafevng" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
            <a href="mailto:rscafevng@gmail.com" className="text-white/70 hover:text-white transition-colors" aria-label="Email"><Mail className="w-5 h-5" /></a>
            <a href="tel:+34621306720" className="text-white/70 hover:text-white transition-colors" aria-label="Teléfono"><Phone className="w-5 h-5" /></a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-white/50">Carrer dels Escolapis, 8 · 08800 Vilanova i la Geltrú · Barcelona</p>
        </div>
      </div>
    </footer>
  );
}
