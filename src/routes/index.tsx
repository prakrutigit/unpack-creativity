import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import legoBrush from "@/assets/lego-brush.png.asset.json";
import blinkitFridge from "@/assets/blinkit-fridge.png.asset.json";
import dysonHelmet from "@/assets/dyson-helmet.webp.asset.json";
import appleAura from "@/assets/apple-aura.webp.asset.json";
import smartTravel from "@/assets/smart-travel.png.asset.json";
import paperprintId from "@/assets/paperprint-id.png.asset.json";
import airIndiaBaby from "@/assets/air-india-baby.webp.asset.json";
import silentSnack from "@/assets/silent-snack.webp.asset.json";
import portrait from "@/assets/portrait.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Prakruti Pethani — Creative Design Portfolio" },
      {
        name: "description",
        content:
          "Explore Prakruti Pethani's playful product, packaging, and experience design ideas, including an interactive jar of concepts.",
      },
      { property: "og:title", content: "Prakruti Pethani — Creative Design Portfolio" },
      {
        property: "og:description",
        content: "Playful product ideas and thoughtful experiences by Prakruti Pethani.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

const projects = [
  {
    n: "01",
    name: "LEGO Brush",
    subtitle: "Build Your Smile",
    tagline: "A smile, built your way.",
    description:
      "A playful toothbrush concept that turns daily brushing into a chance to build, customize, and smile. Colorful modular handles let kids make a routine feel like their own little creation.",
    keywords: ["Product Concept", "Playful Design", "Customizable"],
    img: legoBrush.url,
    bg: "var(--plum)",
    fg: "var(--cream)",
    accent: "var(--lavender)",
  },
  {
    n: "02",
    name: "Blinkit Smart Fridge",
    subtitle: "Freshness, Delivered",
    tagline: "Your fridge knows when it's time.",
    description:
      "A connected grocery experience that notices when everyday essentials are running low, checks with you, and brings them to your door. A small, timely nudge makes staying stocked feel effortless.",
    keywords: ["Service Concept", "Smart Living", "Everyday Convenience"],
    img: blinkitFridge.url,
    bg: "var(--teal-deep)",
    fg: "var(--cream)",
    accent: "var(--orange-accent)",
  },
];

const jarIdeas = [
  {
    name: "Dyson Clearer Ride",
    subtitle: "Airflow helmet concept",
    description:
      "Bringing Dyson-inspired airflow to a riding helmet, with ventilation, comfort, and visibility thoughtfully considered for the road.",
    image: dysonHelmet.url,
  },
  {
    name: "Apple Aura",
    subtitle: "Connected jewellery concept",
    description:
      "A jewellery collection imagining how health insights, gentle notifications, and everyday connection could live in timeless pieces.",
    image: appleAura.url,
  },
  {
    name: "Smart Travel Pillow",
    subtitle: "A gentler journey",
    description:
      "A travel pillow concept that pairs soothing comfort with a gentle location-aware alert, so you can rest without missing your stop.",
    image: smartTravel.url,
  },
  {
    name: "PaperPrint ID",
    subtitle: "Invisible exam security",
    description:
      "A paper-authentication idea using discreet identifiers to help make exam papers easier to verify and harder to counterfeit.",
    image: paperprintId.url,
  },
  {
    name: "Air India Baby",
    subtitle: "Happier little journeys",
    description:
      "A family-focused flight experience with thoughtful comforts for babies, young travellers, and the parents travelling with them.",
    image: airIndiaBaby.url,
  },
  {
    name: "Silent Snack Pack",
    subtitle: "A quieter, greener snack",
    description:
      "A snack-packet concept exploring a softer-opening, lower-crinkle experience and more considered materials for quiet spaces.",
    image: silentSnack.url,
  },
];

type JarIdea = (typeof jarIdeas)[number];

const skills =
  "Packaging Design • Branding • Visual Storytelling • Creative Concept Development • Sustainable Design • UI/UX • Graphic Design •";

function Portfolio() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2600);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="grain relative min-h-screen overflow-x-clip bg-[var(--cream)] text-[var(--ink)]">
      <CustomCursor />
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      <Nav />
      <Hero />
      <About />
      <Works />
      <Philosophy />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}

/* --------------------- Loader --------------------- */
function Loader() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--cream)]"
      initial={{ opacity: 1 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
    >
      <div className="relative flex flex-col items-center">
        <motion.div
          className="relative h-32 w-32"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Box body */}
          <motion.div
            className="absolute inset-x-0 bottom-0 h-20 rounded-sm border-2 border-[var(--plum)] bg-[var(--plum)]/10"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            style={{ originY: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          />
          {/* Lid */}
          <motion.div
            className="absolute inset-x-0 top-8 h-6 origin-bottom rounded-sm border-2 border-[var(--plum)] bg-[var(--plum)]"
            initial={{ rotateX: 0 }}
            animate={{ rotateX: -140 }}
            transition={{ delay: 0.9, duration: 0.7 }}
          />
          {/* Emerging items */}
          {[
            { c: "var(--orange-accent)", d: 1.2, x: -40, r: -20 },
            { c: "var(--olive)", d: 1.35, x: 0, r: 8 },
            { c: "var(--plum)", d: 1.5, x: 42, r: 22 },
          ].map((it, i) => (
            <motion.div
              key={i}
              className="absolute left-1/2 top-6 h-4 w-4 -translate-x-1/2 rounded-full"
              style={{ background: it.c }}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: -30, x: it.x, rotate: it.r, opacity: 1 }}
              transition={{ delay: it.d, duration: 0.9, ease: "easeOut" }}
            />
          ))}
        </motion.div>

        <motion.p
          className="mt-10 font-display text-2xl tracking-tight"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 }}
        >
          Unpacking Creativity…
        </motion.p>
        <motion.p
          className="mt-1 text-xs uppercase tracking-[0.35em] text-[var(--plum)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1 }}
        >
          Designed by Prakruti Pethani
        </motion.p>
      </div>
    </motion.div>
  );
}

/* --------------------- Custom cursor --------------------- */
function CustomCursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 400, damping: 40 });
  const sy = useSpring(y, { stiffness: 400, damping: 40 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const el = e.target as HTMLElement;
      setHover(!!el.closest("a,button,[data-magnetic]"));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[90] hidden h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[var(--plum)] mix-blend-difference md:block"
      style={{ x: sx, y: sy, scale: hover ? 2.2 : 1, background: hover ? "var(--plum)" : "transparent" }}
    />
  );
}

/* --------------------- Nav --------------------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener("scroll", on);
    return () => window.removeEventListener("scroll", on);
  }, []);
  const links = [
    ["Home", "#top"],
    ["About", "#about"],
    ["Selected Work", "#work"],
    ["Design Process", "#process"],
    ["Contact", "#contact"],
  ] as const;
  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 2.7, duration: 0.6 }}
      className={`fixed left-1/2 top-4 z-50 -translate-x-1/2 rounded-full border transition-all ${
        scrolled
          ? "border-[var(--plum)]/20 bg-[var(--cream)]/70 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="flex items-center gap-2 px-3 py-2 sm:gap-6 sm:px-5">
        <a href="#top" className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[var(--plum)] font-display text-sm text-[var(--cream)]">
          PP
        </a>
        <nav className="hidden items-center gap-5 text-sm md:flex">
          {links.map(([l, h]) => (
            <a key={l} href={h} className="group relative py-1 text-[var(--ink)]/80 transition hover:text-[var(--ink)]">
              {l}
              <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-[var(--plum)] transition-transform group-hover:scale-x-100" />
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          data-magnetic
          className="ml-auto inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-4 py-2 text-xs font-medium text-[var(--cream)] transition hover:bg-[var(--plum)]"
        >
          Let's Create
          <span className="inline-block transition-transform group-hover:translate-x-1">↗</span>
        </a>
      </div>
    </motion.header>
  );
}

/* --------------------- Hero --------------------- */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const words = "I DON'T JUST DESIGN PACKAGING. I DESIGN EXPERIENCES.".split(" ");

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const px = useSpring(mouseX, { stiffness: 60, damping: 20 });
  const py = useSpring(mouseY, { stiffness: 60, damping: 20 });
  useEffect(() => {
    const on = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      mouseX.set((e.clientX - cx) / 40);
      mouseY.set((e.clientY - cy) / 40);
    };
    window.addEventListener("mousemove", on);
    return () => window.removeEventListener("mousemove", on);
  }, [mouseX, mouseY]);

  return (
    <section id="top" ref={ref} className="relative min-h-[100svh] pt-28 sm:pt-32">
      <motion.div style={{ y, opacity }} className="mx-auto grid max-w-[100rem] grid-cols-1 gap-10 px-5 sm:px-8 lg:grid-cols-12">
        {/* Floating shapes */}
        <FloatingShapes px={px} py={py} />

        <div className="relative z-10 lg:col-span-8">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.9 }}
            className="mb-6 flex items-center gap-2 text-xs uppercase tracking-[0.35em] text-[var(--plum)]"
          >
            <span className="h-px w-8 bg-[var(--plum)]" />
            Portfolio · 2026
          </motion.p>

          <h1 className="font-display text-[13vw] font-black leading-[0.92] tracking-[-0.03em] sm:text-[10vw] lg:text-[7.2vw]">
            {words.map((w, i) => (
              <span key={i} className="mr-[0.25em] inline-block overflow-hidden align-bottom">
                <motion.span
                  className="inline-block"
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ delay: 2.8 + i * 0.06, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                >
                  {w === "EXPERIENCES." ? (
                    <span className="italic text-[var(--plum)]">{w}</span>
                  ) : (
                    w
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.6, duration: 0.8 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-[var(--ink)]/75 sm:text-lg"
          >
            Hi, I'm <span className="font-medium text-[var(--ink)]">Prakruti</span> — a freelance packaging
            designer and Computer Engineering student creating playful, functional, sustainable, and
            meaningful packaging experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.9 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <MagneticButton href="#work" variant="dark">
              Explore My Work →
            </MagneticButton>
            <MagneticButton href="#contact" variant="light">
              Let's Connect
            </MagneticButton>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.4, duration: 0.9 }}
          className="relative z-10 lg:col-span-4"
        >
          <div className="relative mx-auto max-w-sm">
            <motion.div style={{ x: px, y: py }} className="relative">
              <div
                className="overflow-hidden bg-[var(--plum)]"
                style={{
                  clipPath:
                    "polygon(8% 0%, 100% 4%, 96% 88%, 88% 100%, 4% 96%, 0% 12%)",
                }}
              >
                <img
                  src={portrait}
                  alt="Prakruti Pethani portrait"
                  width={1000}
                  height={1300}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 rounded-full bg-[var(--orange-accent)] px-4 py-2 font-hand text-lg text-[var(--ink)] shadow-lg">
                Designer • Thinker • Creator
              </div>
              <div className="absolute -left-6 top-6 rotate-[-8deg] font-hand text-[var(--plum)]">
                ✦ hi there
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute inset-x-0 bottom-6 flex justify-center">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-xs uppercase tracking-[0.35em] text-[var(--ink)]/50"
        >
          scroll ↓
        </motion.div>
      </div>
    </section>
  );
}

function FloatingShapes({ px, py }: { px: any; py: any }) {
  const items = [
    { style: "top-24 left-8 h-16 w-16 rounded-full bg-[var(--orange-accent)]", r: "-8deg" },
    { style: "top-1/3 right-[8%] h-10 w-24 bg-[var(--olive)] rounded-full", r: "20deg" },
    { style: "bottom-24 left-[15%] h-20 w-20 bg-[var(--plum)]", r: "12deg", clip: "polygon(50% 0,100% 100%,0 100%)" },
    { style: "top-[55%] left-[45%] h-6 w-32 bg-[var(--lavender)]", r: "45deg" },
    { style: "bottom-32 right-[20%] h-14 w-14 rounded-full border-2 border-[var(--plum)]", r: "0deg" },
  ];
  return (
    <>
      {items.map((it, i) => (
        <motion.div
          key={i}
          style={{ x: px, y: py, rotate: it.r, clipPath: it.clip, ["--r" as any]: it.r }}
          className={`animate-floaty pointer-events-none absolute z-0 ${it.style}`}
        />
      ))}
    </>
  );
}

function MagneticButton({
  href,
  children,
  variant = "dark",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "dark" | "light";
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });
  return (
    <motion.a
      ref={ref}
      href={href}
      data-magnetic
      style={{ x: sx, y: sy }}
      onMouseMove={(e) => {
        const r = ref.current!.getBoundingClientRect();
        x.set((e.clientX - r.left - r.width / 2) * 0.3);
        y.set((e.clientY - r.top - r.height / 2) * 0.3);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition ${
        variant === "dark"
          ? "bg-[var(--ink)] text-[var(--cream)] hover:bg-[var(--plum)]"
          : "border border-[var(--ink)]/30 bg-transparent text-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--cream)]"
      }`}
    >
      {children}
    </motion.a>
  );
}

/* --------------------- About --------------------- */
function About() {
  const keywords = ["Creativity", "Packaging", "Branding", "Innovation", "Storytelling", "Sustainability", "Technology"];
  return (
    <section id="about" className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionLabel n="01" title="About" />
        <div className="mt-10 grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <RevealText
              as="h2"
              className="font-display text-5xl font-black leading-[0.95] tracking-[-0.02em] sm:text-7xl"
            >
              Creativity meets <span className="italic text-[var(--plum)]">curiosity.</span>
            </RevealText>
            <div className="mt-8 max-w-2xl space-y-5 text-[var(--ink)]/75">
              <p>
                I'm Prakruti Pethani, a third-year B.Tech Computer Engineering student and a passionate freelance
                packaging designer. My interest lies in transforming ordinary products into creative experiences
                through visual storytelling, thoughtful branding, functionality, and sustainable design.
              </p>
              <p>
                For me, packaging is more than a container. It is the first interaction between a product and its
                audience — a small moment that can feel engaging, meaningful, and unforgettable.
              </p>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="relative mx-auto aspect-square w-full max-w-sm rounded-full bg-[var(--plum)]/5">
              <div className="absolute inset-6 rounded-full border border-dashed border-[var(--plum)]/30" />
              <div className="absolute inset-14 overflow-hidden rounded-full">
                <img src={portrait} alt="" className="h-full w-full object-cover" loading="lazy" />
              </div>
              {keywords.map((k, i) => {
                const angle = (i / keywords.length) * Math.PI * 2 - Math.PI / 2;
                const r = 46;
                const left = 50 + Math.cos(angle) * r;
                const top = 50 + Math.sin(angle) * r;
                return (
                  <motion.span
                    key={k}
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    style={{ left: `${left}%`, top: `${top}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--cream)] px-3 py-1 text-xs shadow-sm ring-1 ring-[var(--plum)]/20"
                  >
                    {k}
                  </motion.span>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Skills marquee */}
      <div className="mt-24 overflow-hidden border-y border-[var(--ink)]/10 bg-[var(--plum)] py-6 text-[var(--cream)]">
        <div className="flex animate-marquee whitespace-nowrap font-display text-3xl sm:text-5xl">
          <span className="px-6">{skills.repeat(4)}</span>
          <span className="px-6">{skills.repeat(4)}</span>
        </div>
      </div>
    </section>
  );
}

/* --------------------- Works --------------------- */
function Works() {
  return (
    <section id="work" className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionLabel n="02" title="Selected Work" />
        <div className="mt-8 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-5xl font-black leading-none tracking-[-0.02em] sm:text-7xl">
            Ideas for a more <br />
            <span className="italic text-[var(--plum)]">delightful everyday.</span>
          </h2>
          <p className="max-w-sm text-sm text-[var(--ink)]/60">
            Two ideas in the spotlight. Six more tucked into my idea jar.
          </p>
        </div>
      </div>

      <div className="mt-16 space-y-24 sm:space-y-40">
        {projects.map((p, i) => (
          <ProjectBlock key={p.n} p={p} index={i} />
        ))}
      </div>
      <IdeaJar />
    </section>
  );
}

function IdeaJar() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIdea, setSelectedIdea] = useState<JarIdea | null>(null);

  useEffect(() => {
    if (!selectedIdea) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedIdea(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [selectedIdea]);

  return (
    <section className="mx-auto mt-28 max-w-7xl px-5 sm:mt-40 sm:px-8" aria-labelledby="idea-jar-title">
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="max-w-xl">
          <SectionLabel n="03" title="A few more thoughts" />
          <h3 id="idea-jar-title" className="mt-7 font-display text-5xl font-black leading-[0.98] sm:text-6xl">
            Little ideas, <span className="italic text-[var(--plum)]">big possibilities.</span>
          </h3>
          <p className="mt-5 max-w-md text-base leading-relaxed text-[var(--ink)]/70">
            I like asking “what if?” — then finding a thoughtful, playful way to make an everyday moment feel new.
          </p>
          <p className="mt-4 text-sm text-[var(--ink)]/55">
            {isOpen ? "A few of those what-ifs are out for a closer look." : "There are a few more ideas in here."}
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <motion.button
            type="button"
            aria-expanded={isOpen}
            aria-controls="idea-chits"
            aria-label={isOpen ? "Tuck the ideas back into the jar" : "Open the jar to reveal six more design ideas"}
            onClick={() => setIsOpen((open) => !open)}
            whileHover={{ y: -4, rotate: -1.5 }}
            whileTap={{ scale: 0.97 }}
            className="group relative mt-8 flex h-[21rem] w-64 max-w-full items-center justify-center rounded-[42%_42%_29%_29%/28%_28%_16%_16%] border-2 border-[var(--plum)]/25 bg-cream/35 shadow-xl shadow-[var(--plum)]/10 backdrop-blur-sm transition-colors hover:bg-cream/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--plum)] focus-visible:ring-offset-4"
          >
            <span aria-hidden="true" className="absolute -top-7 left-1/2 h-10 w-32 -translate-x-1/2 rounded-t-xl border-2 border-b-0 border-[var(--plum)]/25 bg-cream/45" />
            <span aria-hidden="true" className="absolute -top-10 left-1/2 h-4 w-36 -translate-x-1/2 rounded-md border-2 border-[var(--plum)]/25 bg-lavender/55 shadow-sm" />
            <span aria-hidden="true" className="absolute bottom-4 left-4 top-7 w-5 rotate-2 rounded-full bg-cream/45 blur-[2px]" />
            <span aria-hidden="true" className="absolute -bottom-2 left-1/2 h-5 w-44 -translate-x-1/2 rounded-[50%] border border-[var(--plum)]/15 bg-[var(--plum)]/10" />

            <span aria-hidden="true" className="absolute inset-x-5 bottom-7 top-10 overflow-hidden rounded-[44%_44%_26%_26%/26%_26%_14%_14%]">
              {[
                { x: "left-[17%]", y: "top-[24%]", rotate: "-12deg", color: "bg-orange-accent" },
                { x: "left-[51%]", y: "top-[19%]", rotate: "9deg", color: "bg-lavender" },
                { x: "left-[68%]", y: "top-[36%]", rotate: "-8deg", color: "bg-olive" },
                { x: "left-[26%]", y: "top-[46%]", rotate: "8deg", color: "bg-cream" },
                { x: "left-[58%]", y: "top-[55%]", rotate: "-11deg", color: "bg-orange-accent" },
              ].map((chit, index) => (
                <motion.span
                  key={index}
                  aria-hidden="true"
                  className={`absolute h-14 w-11 rounded-sm border border-[var(--plum)]/10 shadow-sm ${chit.x} ${chit.y} ${chit.color}`}
                  style={{ rotate: chit.rotate }}
                  animate={isOpen ? { y: [0, -16, -5], rotate: [0, index % 2 ? 12 : -12] } : { y: 0 }}
                  transition={{ duration: 0.55, delay: index * 0.06 }}
                />
              ))}
            </span>

            <span className="relative z-10 mx-5 mt-8 rounded-full border border-cream/80 bg-cream/65 px-5 py-4 text-center shadow-sm backdrop-blur-sm">
              <span className="block font-hand text-2xl leading-tight text-[var(--plum)]">
                I collect little “what ifs”
                <br />
                and turn them into things
                <br />
                people can feel, use & remember.
              </span>
              <span className="mt-2 block text-[10px] uppercase tracking-[0.2em] text-[var(--ink)]/55">Prakruti’s creative thoughts</span>
            </span>
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="idea-chits"
            initial={{ opacity: 0, height: 0, y: 16 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: 16 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 overflow-hidden"
          >
            <div className="mb-7 flex flex-wrap items-end justify-between gap-3 border-b border-[var(--ink)]/10 pb-4">
              <h4 className="font-display text-3xl font-bold">Fresh from the jar</h4>
              <span className="text-xs uppercase tracking-[0.2em] text-[var(--ink)]/55">Six little what-ifs</span>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6">
              {jarIdeas.map((idea, index) => (
                <motion.button
                  key={idea.name}
                  type="button"
                  initial={{ opacity: 0, y: 20, rotate: index % 2 ? 2 : -2 }}
                  animate={{ opacity: 1, y: 0, rotate: index % 2 ? 1 : -1 }}
                  transition={{ delay: index * 0.07, duration: 0.4 }}
                  onClick={() => setSelectedIdea(idea)}
                  aria-label={`Open ${idea.name}: ${idea.subtitle}`}
                  className="group relative -rotate-1 overflow-hidden border border-[var(--ink)]/10 bg-cream p-2 text-left shadow-md shadow-[var(--ink)]/10 transition hover:-translate-y-1 hover:rotate-0 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--plum)]"
                >
                  <span className="block overflow-hidden bg-[var(--ink)]/5">
                    <img
                      src={idea.image}
                      alt={idea.name}
                      width={1024}
                      height={1536}
                      loading="lazy"
                      className="aspect-[3/4] w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  </span>
                  <span className="block px-1 pb-1 pt-3">
                    <span className="block font-display text-base font-bold leading-tight sm:text-xl">{idea.name}</span>
                    <span className="mt-1 block text-xs leading-snug text-[var(--ink)]/55">{idea.subtitle}</span>
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedIdea && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="idea-preview-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(event) => {
              if (event.target === event.currentTarget) setSelectedIdea(null);
            }}
            className="fixed inset-0 z-[110] flex items-center justify-center overflow-y-auto bg-[var(--ink)]/75 p-4 backdrop-blur-sm sm:p-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.98 }}
              className="relative grid w-full max-w-4xl overflow-hidden border border-cream/25 bg-cream shadow-2xl sm:grid-cols-[1fr_0.8fr]"
            >
              <img src={selectedIdea.image} alt={selectedIdea.name} className="max-h-[72vh] min-h-0 w-full object-contain sm:max-h-[80vh]" />
              <div className="flex flex-col justify-center p-6 sm:p-10">
                <button
                  type="button"
                  aria-label="Close idea details"
                  onClick={() => setSelectedIdea(null)}
                  className="absolute right-3 top-3 grid size-10 place-items-center rounded-full border border-[var(--ink)]/15 bg-cream text-2xl leading-none text-[var(--ink)] transition hover:bg-lavender focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--plum)]"
                >
                  <span aria-hidden="true">×</span>
                </button>
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--plum)]">One more what-if</p>
                <h4 id="idea-preview-title" className="mt-3 font-display text-3xl font-black sm:text-4xl">{selectedIdea.name}</h4>
                <p className="mt-2 text-sm text-[var(--ink)]/55">{selectedIdea.subtitle}</p>
                <p className="mt-6 text-base leading-relaxed text-[var(--ink)]/75">{selectedIdea.description}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function ProjectBlock({ p, index }: { p: (typeof projects)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const rot = useTransform(scrollYProgress, [0, 1], [index % 2 ? -3 : 3, index % 2 ? 3 : -3]);

  const reverse = index % 2 === 1;

  return (
    <article ref={ref} className="relative">
      <div
        className="relative overflow-hidden py-16 sm:py-24"
        style={{ backgroundColor: p.bg, color: p.fg }}
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
          <div className={`lg:col-span-6 ${reverse ? "lg:order-2" : ""}`}>
            <motion.div style={{ y: yImg, rotate: rot }} className="relative">
              <div className="overflow-hidden rounded-lg shadow-2xl">
                <img
                  src={p.img}
                  alt={`${p.name} — ${p.subtitle}`}
                  width={1400}
                  height={1600}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div
                className="absolute -bottom-4 left-4 rounded-full px-4 py-1.5 font-hand text-xl shadow-md"
                style={{ background: p.accent, color: p.bg }}
              >
                {p.tagline}
              </div>
            </motion.div>
          </div>

          <div className={`flex flex-col justify-center lg:col-span-6 ${reverse ? "lg:order-1" : ""}`}>
            <div className="flex items-baseline gap-4 opacity-70">
              <span className="font-display text-6xl font-black leading-none sm:text-8xl">{p.n}</span>
              <span className="text-xs uppercase tracking-[0.3em]">{p.subtitle}</span>
            </div>
            <RevealText
              as="h3"
              className="mt-4 font-display text-5xl font-black leading-[0.95] tracking-[-0.02em] sm:text-7xl"
            >
              {p.name}
            </RevealText>
            <p className="mt-6 max-w-lg text-base leading-relaxed opacity-85">{p.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {p.keywords.map((k) => (
                <span
                  key={k}
                  className="rounded-full border px-3 py-1 text-xs"
                  style={{ borderColor: `${p.fg}55`, color: p.fg }}
                >
                  {k}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

/* --------------------- Philosophy --------------------- */
function Philosophy() {
  return (
    <section className="relative py-32 sm:py-48">
      <div className="mx-auto max-w-6xl px-5 text-center sm:px-8">
        <RevealText
          as="p"
          className="font-display text-4xl font-black leading-[1.05] tracking-[-0.02em] sm:text-6xl md:text-7xl"
        >
          Good packaging <span className="italic text-[var(--olive)]">protects</span> a product. <br />
          Great packaging <span className="italic text-[var(--plum)]">creates an experience.</span>
        </RevealText>
        <p className="mx-auto mt-8 max-w-xl text-[var(--ink)]/65">
          My goal is to create designs that people do not simply see — but explore, interact with, remember,
          and reuse.
        </p>
      </div>
    </section>
  );
}

/* --------------------- Process --------------------- */
function Process() {
  const steps = [
    ["01", "Discover", "Understanding the product, audience, brand, and purpose."],
    ["02", "Imagine", "Exploring creative ideas and meaningful design possibilities."],
    ["03", "Sketch", "Turning concepts into visual structures and packaging forms."],
    ["04", "Design", "Building the identity through colour, typography, and storytelling."],
    ["05", "Experience", "Packaging that is engaging, functional, memorable, and meaningful."],
  ];
  return (
    <section id="process" className="relative py-28 sm:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionLabel n="03" title="My Creative Process" />
        <h2 className="mt-8 font-display text-5xl font-black leading-none tracking-[-0.02em] sm:text-7xl">
          From <span className="italic text-[var(--plum)]">idea</span> to <span className="italic text-[var(--orange-accent)]">experience.</span>
        </h2>
      </div>

      <div className="mt-16 overflow-x-auto">
        <div className="mx-auto flex min-w-[860px] max-w-7xl gap-6 px-5 sm:px-8">
          {steps.map(([n, t, d], i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="group relative flex-1 rounded-2xl border border-[var(--ink)]/10 bg-[var(--cream)] p-6 transition hover:-translate-y-2 hover:border-[var(--plum)] hover:bg-[var(--plum)] hover:text-[var(--cream)]"
            >
              <div className="text-xs uppercase tracking-[0.3em] opacity-60">{n}</div>
              <h3 className="mt-4 font-display text-3xl font-black">{t}</h3>
              <p className="mt-3 text-sm opacity-80">{d}</p>
              <div className="mt-8 h-px w-full bg-current opacity-20" />
              <div className="mt-3 text-2xl">→</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------- Contact --------------------- */
function Contact() {
  return (
    <section id="contact" className="relative bg-[var(--plum)] py-28 text-[var(--cream)] sm:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionLabel n="04" title="Contact" invert />
        <div className="mt-10 grid grid-cols-1 gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <RevealText
              as="h2"
              className="font-display text-5xl font-black leading-[0.95] tracking-[-0.02em] sm:text-7xl"
            >
              Have an idea? <br />
              Let's <span className="italic text-[var(--orange-accent)]">package it</span> beautifully.
            </RevealText>
            <p className="mt-8 max-w-lg text-[var(--cream)]/75">
              I'm open to freelance packaging projects, branding collaborations, and creative opportunities.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/prakruti-pethani-452007368"
                target="_blank"
                rel="noreferrer"
                data-magnetic
                className="inline-flex items-center gap-2 rounded-full bg-[var(--cream)] px-6 py-3 text-sm font-medium text-[var(--plum)] transition hover:bg-[var(--orange-accent)] hover:text-[var(--ink)]"
              >
                Connect on LinkedIn ↗
              </a>
              <a
                href="#form"
                data-magnetic
                className="inline-flex items-center gap-2 rounded-full border border-[var(--cream)]/40 px-6 py-3 text-sm font-medium transition hover:bg-[var(--cream)] hover:text-[var(--plum)]"
              >
                Start a Project
              </a>
            </div>
          </div>

          <form
            id="form"
            onSubmit={(e) => e.preventDefault()}
            className="rounded-3xl border border-[var(--cream)]/15 bg-[var(--cream)]/5 p-6 backdrop-blur lg:col-span-5"
          >
            {[
              ["Name", "text", "Your name"],
              ["Email", "email", "you@studio.com"],
              ["Project Type", "text", "Packaging, branding, poster…"],
            ].map(([l, t, p]) => (
              <label key={l} className="mb-4 block">
                <span className="mb-1 block text-xs uppercase tracking-[0.25em] text-[var(--cream)]/70">
                  {l}
                </span>
                <input
                  type={t}
                  placeholder={p}
                  className="w-full rounded-lg border border-[var(--cream)]/20 bg-transparent px-4 py-3 text-sm text-[var(--cream)] placeholder:text-[var(--cream)]/40 outline-none transition focus:border-[var(--orange-accent)]"
                />
              </label>
            ))}
            <label className="mb-4 block">
              <span className="mb-1 block text-xs uppercase tracking-[0.25em] text-[var(--cream)]/70">
                Tell Me About Your Idea
              </span>
              <textarea
                rows={4}
                placeholder="A short description of the product, brand, or feeling…"
                className="w-full rounded-lg border border-[var(--cream)]/20 bg-transparent px-4 py-3 text-sm text-[var(--cream)] placeholder:text-[var(--cream)]/40 outline-none transition focus:border-[var(--orange-accent)]"
              />
            </label>
            <button
              type="submit"
              data-magnetic
              className="relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-lg bg-[var(--orange-accent)] px-6 py-4 text-sm font-semibold text-[var(--ink)] transition hover:bg-[var(--cream)]"
              style={{
                clipPath:
                  "polygon(4% 0, 96% 0, 100% 30%, 100% 100%, 96% 100%, 4% 100%, 0 100%, 0 30%)",
              }}
            >
              📦 Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* --------------------- Footer --------------------- */
function Footer() {
  return (
    <footer className="border-t border-[var(--ink)]/10 bg-[var(--cream)] py-14">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 sm:flex-row sm:items-center sm:px-8">
        <div>
          <p className="font-display text-2xl font-black">
            Designed with <span className="italic text-[var(--plum)]">imagination</span> by Prakruti Pethani.
          </p>
          <p className="mt-1 text-sm text-[var(--ink)]/60">
            Freelance Packaging Designer • B.Tech Computer Engineering Student
          </p>
        </div>
        <div className="flex gap-3">
          <a
            href="https://www.linkedin.com/in/prakruti-pethani-452007368"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[var(--ink)]/20 px-4 py-2 text-sm transition hover:bg-[var(--ink)] hover:text-[var(--cream)]"
          >
            LinkedIn ↗
          </a>
          <a
            href="#top"
            className="rounded-full bg-[var(--ink)] px-4 py-2 text-sm text-[var(--cream)] transition hover:bg-[var(--plum)]"
          >
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}

/* --------------------- Shared bits --------------------- */
function SectionLabel({ n, title, invert = false }: { n: string; title: string; invert?: boolean }) {
  return (
    <div
      className={`flex items-center gap-3 text-xs uppercase tracking-[0.35em] ${
        invert ? "text-[var(--cream)]/70" : "text-[var(--plum)]"
      }`}
    >
      <span className={`h-px w-10 ${invert ? "bg-[var(--cream)]/50" : "bg-[var(--plum)]"}`} />
      {n} — {title}
    </div>
  );
}

function RevealText({
  as: Tag = "p",
  className = "",
  children,
}: {
  as?: any;
  className?: string;
  children: React.ReactNode;
}) {
  const MTag = motion(Tag);
  return (
    <MTag
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </MTag>
  );
}
