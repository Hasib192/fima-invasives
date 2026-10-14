import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Menu,
  X,
  Facebook,
  Linkedin,
  Instagram,
  ArrowRight,
  Syringe,
  Activity,
  Layers,
  Cable,
  Package,
} from "lucide-react";
import fimaLogoPng from "@/assets/fima-logo.png";
import cipiLogoPng from "@/assets/cipi-logo.png";
import fionazWebp from "@/assets/fionaz.webp";
import aboutImg from "@/assets/about-medical.jpg";

const fimaLogo = { url: fimaLogoPng };
const cipiLogo = { url: cipiLogoPng };
const fionaz = { url: fionazWebp };

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FiMa Invasives — Importer, Exporter & Reseller | Dhaka" },
      {
        name: "description",
        content:
          "FiMa Invasives imports, exports and resells items for invasive procedures: interventional devices, stents, catheters, guidewires and consumables.",
      },
      { property: "og:title", content: "FiMa Invasives — Importer, Exporter & Reseller" },
      {
        property: "og:description",
        content: "Items for invasive procedures, supplied from Dhaka, Bangladesh.",
      },
    ],
  }),
  component: Index,
});

const PHONE1 = "+8801715600400";
const PHONE2 = "+8801819484999";
const EMAIL = "akmnoor14@gmail.com";
const ADDRESS = "709/9, Ibrahimpur, Kafrul, Dhaka-1206";
const MAP = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS + ", Bangladesh")}`;

const nav = [
  ["About", "#about"],
  ["Products", "#products"],
  ["Our Concerns", "#concerns"],
];

const products = [
  { icon: Activity, name: "Interventional Devices" },
  { icon: Syringe, name: "Procedural Consumables" },
  { icon: Layers, name: "Stents & Accessories" },
  { icon: Cable, name: "Catheters & Guidewires" },
  { icon: Package, name: "Other Invasive Items" },
];

function Index() {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState<string | null>(null);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#top">
            <img src={fimaLogo.url} alt="FiMa logo" className="h-9 w-auto sm:h-10" />
          </a>
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map(([l, h]) => (
              <a
                key={h}
                href={h}
                className="text-sm font-semibold text-foreground/80 hover:text-accent"
              >
                {l}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-primary-foreground"
            >
              Contact Us
            </a>
          </nav>
          <button className="md:hidden" aria-label="Menu" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
        </div>
        {open && (
          <div className="border-t px-4 py-3 md:hidden">
            {nav.map(([l, h]) => (
              <a
                key={h}
                href={h}
                onClick={() => setOpen(false)}
                className="block py-2 font-semibold"
              >
                {l}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-full bg-brand px-5 py-2 text-center text-sm font-semibold text-primary-foreground"
            >
              Contact Us
            </a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden bg-cream">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-teal/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-navy/15 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-4 py-14 md:grid-cols-2 md:gap-10 md:py-28">
          <div>
            <p className="mb-4 inline-block rounded-full border border-navy/20 px-4 py-1 text-xs font-bold uppercase tracking-widest text-navy">
              Dhaka, Bangladesh
            </p>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-6xl">
              <span className="text-navy">FiMa</span> <span className="text-teal">Invasives</span>
            </h1>
            <p className="mt-4 text-xl font-semibold text-navy/80 sm:text-2xl">
              Importer, Exporter &amp; Reseller
            </p>
            <p className="mt-3 max-w-md text-muted-foreground">
              For all kinds of items for invasive procedures.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3 font-semibold text-primary-foreground shadow-soft transition hover:opacity-90"
              >
                Contact Us <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href={`tel:${PHONE1}`}
                className="inline-flex items-center gap-2 rounded-full border-2 border-navy px-7 py-3 font-semibold text-navy hover:bg-navy hover:text-primary-foreground"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>
          </div>
          <div className="rounded-3xl bg-card p-6 shadow-soft sm:p-8">
            <img
              src={fimaLogo.url}
              alt="FiMa Invasives logo"
              className="mx-auto w-full max-w-xs sm:max-w-sm"
            />
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2">
          <img
            src={aboutImg}
            alt="Interventional devices in a cath lab"
            width={1280}
            height={960}
            loading="lazy"
            className="rounded-3xl shadow-soft"
          />
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-teal">About Us</p>
            <h2 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">
              A young, dynamic and fast growing company
            </h2>
            <p className="mt-5 text-muted-foreground">
              FiMa Invasives is an importer, exporter and reseller of items for invasive procedures,
              based in Dhaka. We supply interventional devices, consumables, stents, catheters and
              guidewires.
            </p>
            <div className="mt-6 rounded-2xl border bg-card p-5">
              <p className="font-display text-lg font-bold text-navy">Dr. AKM Noor</p>
              <p className="text-sm text-muted-foreground">Managing Director</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="bg-cream py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-teal">Our Products</p>
            <h2 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">
              Everything for invasive procedures
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {products.map(({ icon: Icon, name }) => (
              <div
                key={name}
                className="group rounded-2xl bg-card p-6 text-center shadow-soft transition hover:-translate-y-1"
              >
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border-2 border-teal text-navy transition group-hover:bg-brand group-hover:text-primary-foreground">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-4 font-bold text-navy">{name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Concerns */}
      <section id="concerns" className="py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-teal">Our Concerns</p>
            <h2 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">Sister concerns</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <button
              onClick={() => setModal("CIPI BD")}
              className="flex min-h-56 flex-col items-center justify-center rounded-3xl border bg-card p-6 shadow-soft transition hover:-translate-y-1 sm:min-h-64 sm:p-8"
            >
              <img
                src={cipiLogo.url}
                alt="CIPI BD logo"
                className="w-full max-w-md"
                loading="lazy"
              />
              <span className="mt-4 text-sm font-semibold text-teal">Visit website →</span>
            </button>
            <button
              onClick={() => setModal("Fiona'z Trimmings")}
              className="relative min-h-56 overflow-hidden rounded-3xl shadow-soft transition hover:-translate-y-1 sm:min-h-64"
            >
              <img
                src={fionaz.url}
                alt="Fiona'z background"
                className="absolute inset-0 h-full w-full object-cover object-left"
                loading="lazy"
              />
              <div className="relative flex h-full flex-col items-start justify-center p-6 text-left sm:p-8">
                <span className="font-display text-3xl font-semibold tracking-[0.15em] text-cream sm:text-5xl">
                  FIONA'Z
                </span>
                <span className="mt-2 text-base tracking-widest text-cream sm:text-lg">
                  TRIMMINGS
                </span>
                <span className="mt-6 text-sm font-semibold text-cream/90">Visit website →</span>
              </div>
            </button>
          </div>
        </div>
      </section>

      <Contact />

      <footer className="bg-navy py-8 text-primary-foreground">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 text-sm sm:flex-row">
          <p>© {new Date().getFullYear()} FiMa Invasives. All rights reserved.</p>
          <p className="opacity-80">{ADDRESS}</p>
        </div>
      </footer>

      {modal && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-foreground/60 p-4"
          onClick={() => setModal(null)}
        >
          <div
            className="w-full max-w-sm rounded-3xl bg-card p-8 text-center shadow-soft"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-extrabold text-navy">{modal}</h3>
            <p className="mt-3 text-muted-foreground">Website coming soon</p>
            <button
              onClick={() => setModal(null)}
              className="mt-6 rounded-full bg-brand px-6 py-2 font-semibold text-primary-foreground"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Contact() {
  const [f, setF] = useState({ name: "", phone: "", message: "" });
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Hello FiMa Invasives,\nName: ${f.name}\nPhone: ${f.phone}\n\n${f.message}`;
    window.open(
      `https://wa.me/${PHONE2.replace("+", "")}?text=${encodeURIComponent(text)}`,
      "_blank",
    );
  };
  const input =
    "w-full rounded-xl border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring";
  const socials = [
    { icon: Facebook, label: "Facebook" },
    { icon: Linkedin, label: "LinkedIn" },
    { icon: Instagram, label: "Instagram" },
  ];
  return (
    <section id="contact" className="bg-cream py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-teal">Contact Us</p>
          <h2 className="mt-2 text-3xl font-extrabold text-navy sm:text-4xl">Let's talk</h2>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <form onSubmit={submit} className="space-y-4 rounded-3xl bg-card p-6 shadow-soft sm:p-8">
            <input
              required
              maxLength={100}
              placeholder="Your name"
              className={input}
              value={f.name}
              onChange={(e) => setF({ ...f, name: e.target.value })}
            />
            <input
              required
              maxLength={20}
              type="tel"
              placeholder="Phone number"
              className={input}
              value={f.phone}
              onChange={(e) => setF({ ...f, phone: e.target.value })}
            />
            <textarea
              required
              maxLength={1000}
              rows={5}
              placeholder="Your message"
              className={input}
              value={f.message}
              onChange={(e) => setF({ ...f, message: e.target.value })}
            />
            <button className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand py-3 font-semibold text-primary-foreground">
              <MessageCircle className="h-5 w-5" /> Send via WhatsApp
            </button>
          </form>
          <div className="space-y-4">
            <a
              href={MAP}
              target="_blank"
              rel="noreferrer"
              className="flex gap-4 rounded-2xl bg-card p-5 shadow-soft hover:ring-2 hover:ring-ring"
            >
              <MapPin className="h-6 w-6 shrink-0 text-teal" />
              <div>
                <p className="font-bold text-navy">Address</p>
                <p className="text-muted-foreground">{ADDRESS}</p>
              </div>
            </a>
            <div className="flex gap-4 rounded-2xl bg-card p-5 shadow-soft">
              <Phone className="h-6 w-6 shrink-0 text-teal" />
              <div>
                <p className="font-bold text-navy">Phone</p>
                <a href={`tel:${PHONE1}`} className="block text-muted-foreground hover:text-accent">
                  +88 01715 600 400
                </a>
                <a href={`tel:${PHONE2}`} className="block text-muted-foreground hover:text-accent">
                  +88 01819 484 999
                </a>
              </div>
            </div>
            <a
              href={`https://wa.me/${PHONE2.replace("+", "")}`}
              target="_blank"
              rel="noreferrer"
              className="flex gap-4 rounded-2xl bg-card p-5 shadow-soft hover:ring-2 hover:ring-ring"
            >
              <MessageCircle className="h-6 w-6 shrink-0 text-teal" />
              <div>
                <p className="font-bold text-navy">WhatsApp</p>
                <p className="text-muted-foreground">+88 01819 484 999</p>
              </div>
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="flex gap-4 rounded-2xl bg-card p-5 shadow-soft hover:ring-2 hover:ring-ring"
            >
              <Mail className="h-6 w-6 shrink-0 text-teal" />
              <div>
                <p className="font-bold text-navy">Email</p>
                <p className="break-all text-muted-foreground">{EMAIL}</p>
              </div>
            </a>
            <div className="rounded-2xl bg-card p-5 shadow-soft">
              <p className="font-bold text-navy">Follow us</p>
              <div className="mt-3 flex gap-3">
                {socials.map(({ icon: I, label }) => (
                  <span
                    key={label}
                    className="grid h-11 w-11 place-items-center rounded-full border text-navy opacity-60"
                  >
                    <I className="h-5 w-5" />
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
