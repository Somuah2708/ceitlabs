"use client";

import dynamic from "next/dynamic";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const CoinScene = dynamic(() => import("./components/CoinScene"), { ssr: false });

const marqueeItems = [
  "Web Applications",
  "Mobile Apps",
  "AI Integration",
  "Automation Systems",
  "SaaS Platforms",
  "E-Commerce Solutions",
  "Healthcare Software",
  "Fintech Platforms",
  "EdTech Systems",
  "Data Dashboards",
  "API Development",
  "Cloud Infrastructure",
];

const services = [
  {
    title: "Web Applications",
    description:
      "Custom web platforms, dashboards, portals and SaaS products built for performance, scalability and real business outcomes.",
  },
  {
    title: "Mobile Applications",
    description:
      "iOS and Android apps that users love, from consumer-facing products to internal business tools and enterprise systems.",
  },
  {
    title: "AI & Automation",
    description:
      "Intelligent systems that automate repetitive work, surface insights from data, and put AI where it actually creates value.",
  },
  {
    title: "E-Commerce Platforms",
    description:
      "End-to-end online commerce, storefronts, payment integration, inventory management and custom shopping experiences.",
  },
  {
    title: "Data & Analytics",
    description:
      "Dashboards and reporting systems that turn raw data into clear decisions, built for teams that move fast.",
  },
  {
    title: "API & Integrations",
    description:
      "Robust APIs and third-party integrations that connect your tools, systems and data pipelines without the duct tape.",
  },
  {
    title: "Product Design",
    description:
      "UX/UI design that translates complex workflows into clean, intuitive experiences users actually enjoy.",
  },
  {
    title: "DevOps & Deployment",
    description:
      "CI/CD pipelines, cloud setup, and reliable release workflows that keep launches smooth and systems stable.",
  },
];

const industries = [
  { title: "Healthcare", description: "Patient management, telemedicine, clinical workflows and health data platforms." },
  { title: "Finance & Fintech", description: "Payment systems, budgeting tools, investment platforms and financial automation." },
  { title: "Education", description: "LMS platforms, student portals, remote learning tools and assessment systems." },
  { title: "Retail & Commerce", description: "Inventory systems, POS integration, customer loyalty and online storefronts." },
  { title: "Logistics", description: "Fleet tracking, route optimization, delivery management and supply chain tools." },
  { title: "Real Estate", description: "Property listing platforms, lease management, inspection tools and agent portals." },
  { title: "Hospitality & Food", description: "Reservation systems, food ordering platforms, kitchen management tools." },
  { title: "Energy & Utilities", description: "Smart metering, usage dashboards, maintenance scheduling and reporting systems." },
  { title: "Marketing & Media", description: "Campaign management, analytics dashboards, CRM integrations and content tools." },
  { title: "Legal & Compliance", description: "Document management, case tracking, compliance reporting and client portals." },
  { title: "Manufacturing", description: "Production tracking, quality control, ERP integrations and factory floor dashboards." },
  { title: "Agriculture", description: "Crop monitoring, farm management, market access tools and yield analytics." },
];

const processSteps = [
  {
    num: "I",
    tag: "Discover",
    title: "Problem Exploration",
    description:
      "We start where it matters: understanding the actual problem. Deep discovery, user research, and market context before a single line of code.",
  },
  {
    num: "II",
    tag: "Design",
    title: "Architecture & Design",
    description:
      "We map out the right solution architecture, design intuitive interfaces and plan a delivery roadmap aligned with your goals.",
  },
  {
    num: "III",
    tag: "Build",
    title: "Rapid Development",
    description:
      "We build in focused sprints, shipping working software fast, gathering feedback and iterating until it is exactly right.",
  },
  {
    num: "IV",
    tag: "Launch",
    title: "Deploy & Support",
    description:
      "We handle deployment and testing, then stay close post-launch to make sure everything runs the way it should.",
  },
];

const whyPoints = [
  {
    title: "We find problems others miss",
    description:
      "Our model is built around niche exploration. We dig into industries, find friction, and build software that directly solves it.",
  },
  {
    title: "Speed without compromise",
    description:
      "We move fast. From contract to working product, our delivery model is optimized for speed and quality, not bureaucracy.",
  },
  {
    title: "Broad expertise, focused execution",
    description:
      "We work across industries and tech stacks, bringing cross-domain thinking to every problem we take on.",
  },
  {
    title: "Partnership, not just delivery",
    description:
      "We are invested in your outcome, not just the deliverable. We build for the long term and stay close to the work.",
  },
];

const techStack = [
  "React", "Next.js", "Vue.js", "React Native", "Flutter", "Node.js", "Python",
  "Django", "FastAPI", "PostgreSQL", "MongoDB", "GraphQL", "Firebase", "Supabase",
  "AWS", "Vercel", "Docker", "Stripe", "OpenAI API", "REST APIs", "Figma",
  "Tailwind CSS", "TypeScript", "WordPress", "Shopify",
];

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CornerMarks() {
  return (
    <>
      <span className="corner tl"></span>
      <span className="corner tr"></span>
      <span className="corner bl"></span>
      <span className="corner br"></span>
    </>
  );
}

function Medallion({ size = 64, fontSize = "0.62rem" }) {
  return (
    <div className="medallion" style={{ width: size, height: size }}>
      <span className="medallion-ring" style={{ inset: 0, border: "1px solid var(--gold)" }}></span>
      <span
        className="medallion-ring"
        style={{ inset: size * 0.1, border: "1px dashed var(--border-gold)" }}
      ></span>
      <span className="medallion-ring" style={{ inset: size * 0.2, border: "1px solid var(--border)" }}></span>
      <div className="medallion-core" style={{ fontSize }}>
        <span>C</span>
        <span className="medallion-dot">·</span>
        <span>I</span>
        <span className="medallion-dot">·</span>
        <span>T</span>
      </div>
    </div>
  );
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState("idle");
  const [formFeedback, setFormFeedback] = useState("");
  const [statCount, setStatCount] = useState(0);

  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  const contactCardRef = useRef(null);
  const statRef = useRef(null);

  const marqueeLoop = useMemo(() => [...marqueeItems, ...marqueeItems], []);
  const techLoop = useMemo(() => [...techStack, ...techStack], []);

  useEffect(() => {
    const fadeEls = Array.from(document.querySelectorAll(".fade-in"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => entry.target.classList.add("visible"), i * 70);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    fadeEls.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("section[id]"));
    const navLinks = Array.from(document.querySelectorAll(".nav-links a, .mobile-nav a"));

    const onScroll = () => {
      let current = "";
      sections.forEach((sec) => {
        if (window.scrollY >= sec.offsetTop - 120) {
          current = sec.getAttribute("id") || "";
        }
      });

      navLinks.forEach((a) => {
        a.style.color = a.getAttribute("href") === `#${current}` ? "var(--ink)" : "";
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const onResize = () => {
      if (window.innerWidth > 700) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [isMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    if (!dot || !ring || window.matchMedia("(hover: none)").matches) {
      return undefined;
    }

    let ringX = window.innerWidth / 2;
    let ringY = window.innerHeight / 2;
    let targetX = ringX;
    let targetY = ringY;
    let raf;

    const onMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      dot.style.transform = `translate(${targetX}px, ${targetY}px) translate(-50%, -50%)`;
      dot.classList.add("active");
      ring.classList.add("active");
    };

    const onOver = (event) => {
      ring.classList.toggle("hovering", Boolean(event.target.closest("a, button, .service-row, .industry-card, .tech-pill")));
    };

    const tick = () => {
      ringX += (targetX - ringX) * 0.18;
      ringY += (targetY - ringY) * 0.18;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  useEffect(() => {
    const el = statRef.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const duration = 1200;
            const start = performance.now();
            const step = (now) => {
              const progress = Math.min(1, (now - start) / duration);
              const eased = 1 - (1 - progress) ** 3;
              setStatCount(Math.round(eased * 10));
              if (progress < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const onCardTilt = useCallback((event) => {
    const card = contactCardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `rotateX(${(-py * 6).toFixed(2)}deg) rotateY(${(px * 6).toFixed(2)}deg)`;
  }, []);

  const onCardTiltReset = useCallback(() => {
    const card = contactCardRef.current;
    if (!card) return;
    card.style.transform = "rotateX(0deg) rotateY(0deg)";
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const onFormChange = (event) => {
    const { name, value } = event.target;
    setFormState((current) => ({ ...current, [name]: value }));
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setFormStatus("loading");
    setFormFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload?.message || "We could not send your request.");
      }

      setFormStatus("success");
      setFormFeedback(payload.message || "Thanks. We will get back to you shortly.");
      setFormState({
        name: "",
        email: "",
        company: "",
        message: "",
      });
    } catch (error) {
      setFormStatus("error");
      setFormFeedback(error.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <div className="cursor-dot" ref={cursorDotRef}></div>
      <div className="cursor-ring" ref={cursorRingRef}></div>

      <header className="site-header">
        <div className="utility-bar">
          <span>Central Innovative Technologies</span>
          <div className="utility-right">
            <a href="mailto:centralinnovativetech@gmail.com">centralinnovativetech@gmail.com</a>
            <span className="dot">·</span>
            <a href="tel:+233557777982">+233 55 777 7982</a>
          </div>
        </div>

        <nav>
          <div className="nav-logo">
            <span className="nav-logo-mark">CI</span>
            <span className="nav-logo-word">CEIT</span>
          </div>

          <div className="nav-links">
            <a href="#services">What We Build</a>
            <a href="#industries">Industries</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </div>

          <a href="#contact" className="nav-cta">
            Get In Touch
          </a>

          <button
            className={`hamburger${isMenuOpen ? " open" : ""}`}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </header>

      <div className={`mobile-nav${isMenuOpen ? " open" : ""}`}>
        <a href="#services" onClick={closeMenu}>What We Build</a>
        <a href="#industries" onClick={closeMenu}>Industries</a>
        <a href="#process" onClick={closeMenu}>Process</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
      </div>

      <section className="hero">
        <div className="hero-rule-grid"></div>
        <div className="hero-coin">
          <CoinScene />
          <span className="hero-coin-caption">Software, Minted With Craft</span>
        </div>
        <div className="hero-inner">
          <div className="hero-content">
            <div className="eyebrow">
              <span className="eyebrow-rule"></span>Software Innovation Studio
            </div>
            <h1>
              We find problems.
              <br />
              <em>We ship solutions.</em>
            </h1>
            <p className="hero-sub">
              Central Innovative Technologies studies problems across industries, then
              builds the software that solves them — fast, clean, and built to last.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn-primary">
                Start a Project
                <ArrowIcon />
              </a>
              <a href="#services" className="btn-ghost">
                See what we build
              </a>
            </div>
            <div className="hero-stats" ref={statRef}>
              <div className="stat-item">
                <div className="stat-num">{statCount}<span>+</span></div>
                <div className="stat-label">Industries Explored</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">Full<span>-</span>Stack</div>
                <div className="stat-label">Web & Mobile Delivery</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">Fast<span>.</span></div>
                <div className="stat-label">Rapid Deployment</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-section">
        <div className="marquee-track">
          {marqueeLoop.map((item, index) => (
            <div className="marquee-item" key={`${item}-${index}`}>
              {item}
            </div>
          ))}
        </div>
      </div>

      <section id="services">
        <div className="fade-in" style={{ "--fade-delay": "0ms" }}>
          <div className="eyebrow">
            <span className="eyebrow-rule"></span>What We Build
          </div>
          <h2 className="section-title">
            Every digital product
            <br />
            your business needs
          </h2>
          <p className="section-sub">
            From first concept to live product, we build the software infrastructure
            that moves industries forward.
          </p>
        </div>
        <div className="services-list fade-in" style={{ "--fade-delay": "80ms" }}>
          {services.map((service, index) => (
            <article className="service-row" key={service.title}>
              <div className="service-index">{String(index + 1).padStart(2, "0")}</div>
              <div className="service-body">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="industries" className="industries">
        <div className="fade-in industries-header" style={{ "--fade-delay": "0ms" }}>
          <div>
            <div className="eyebrow">
              <span className="eyebrow-rule"></span>Industries
            </div>
            <h2 className="section-title">
              We go deep,
              <br />
              across the board
            </h2>
          </div>
          <p className="section-sub">
            We do not stay in one lane. We explore problems across sectors and
            engineer the right software to solve them.
          </p>
        </div>
        <div className="industries-grid fade-in" style={{ "--fade-delay": "80ms" }}>
          {industries.map((industry, index) => (
            <article className="industry-card" key={industry.title}>
              <div className="industry-index">{String(index + 1).padStart(2, "0")}</div>
              <h4>{industry.title}</h4>
              <p>{industry.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="process">
        <div className="fade-in" style={{ "--fade-delay": "0ms" }}>
          <div className="eyebrow">
            <span className="eyebrow-rule"></span>Our Process
          </div>
          <h2 className="section-title">
            From problem to product,
            <br />
            with precision
          </h2>
          <p className="section-sub">
            A clear process that keeps every project moving and every client informed.
          </p>
        </div>
        <div className="process-grid fade-in" style={{ "--fade-delay": "80ms" }}>
          {processSteps.map((step) => (
            <article className="process-step" key={step.num}>
              <div className="step-num">{step.num}</div>
              <span className="step-tag">{step.tag}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="why">
        <div className="why-inner">
          <div className="fade-in why-quote corner-frame">
            <CornerMarks />
            <div className="why-quote-mark">&ldquo;</div>
            <p>
              We do not wait for the obvious brief. We go looking for the problem
              worth solving, then build the software to solve it.
            </p>
            <div className="why-quote-attr">Central Innovative Technologies</div>
          </div>
          <div className="fade-in" style={{ "--fade-delay": "80ms" }}>
            <div className="eyebrow">
              <span className="eyebrow-rule"></span>Why CEIT
            </div>
            <h2 className="section-title">
              Built different,
              <br />
              by design.
            </h2>
            <div className="why-points">
              {whyPoints.map((point) => (
                <article className="why-point" key={point.title}>
                  <h4>{point.title}</h4>
                  <p>{point.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="tech">
        <div className="fade-in" style={{ "--fade-delay": "0ms" }}>
          <div className="eyebrow">
            <span className="eyebrow-rule"></span>Tech Stack
          </div>
          <h2 className="section-title">
            Built on the
            <br />
            best tools available
          </h2>
          <p className="section-sub">
            We select the right technology for each project, not a one-size-fits-all
            stack.
          </p>
        </div>
        <div className="tech-row fade-in" style={{ "--fade-delay": "80ms" }}>
          <div className="tech-row-track">
            {techLoop.map((tech, index) => (
              <span className="tech-pill" key={`${tech}-${index}`}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="cta-section">
        <div className="cta-inner">
          <div className="cta-info fade-in">
            <div className="eyebrow">
              <span className="eyebrow-rule"></span>Let&apos;s Work Together
            </div>
            <h2 className="section-title">
              Have a problem
              <br />
              that needs solving?
            </h2>
            <p className="section-sub cta-sub">
              Whether you have a fully-formed idea or just a problem worth solving, we
              want to hear about it. Let&apos;s build something great.
            </p>
            <div className="cta-direct">
              <div className="cta-direct-row">
                <span>Email</span>
                <a href="mailto:centralinnovativetech@gmail.com">
                  centralinnovativetech@gmail.com
                </a>
              </div>
              <div className="cta-direct-row">
                <span>Phone</span>
                <a href="tel:+233557777982">+233 55 777 7982</a>
              </div>
            </div>
            <div className="cta-availability">Currently accepting new projects</div>
          </div>

          <div className="tilt-wrap fade-in" style={{ "--fade-delay": "120ms" }}>
            <div
              className="contact-card corner-frame"
              ref={contactCardRef}
              onMouseMove={onCardTilt}
              onMouseLeave={onCardTiltReset}
            >
              <CornerMarks />
              <form className="contact-form" onSubmit={onSubmit}>
                <div className="contact-grid">
                  <label className="contact-field">
                    <span>Name</span>
                    <input
                      type="text"
                      name="name"
                      value={formState.name}
                      onChange={onFormChange}
                      placeholder="Your full name"
                      autoComplete="name"
                      required
                    />
                  </label>
                  <label className="contact-field">
                    <span>Work Email</span>
                    <input
                      type="email"
                      name="email"
                      value={formState.email}
                      onChange={onFormChange}
                      placeholder="you@company.com"
                      autoComplete="email"
                      required
                    />
                  </label>
                </div>

                <label className="contact-field">
                  <span>Company (Optional)</span>
                  <input
                    type="text"
                    name="company"
                    value={formState.company}
                    onChange={onFormChange}
                    placeholder="Company name"
                    autoComplete="organization"
                  />
                </label>

                <label className="contact-field">
                  <span>Project Brief</span>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={onFormChange}
                    placeholder="Tell us about the problem, timeline, and goals."
                    rows={5}
                    required
                  ></textarea>
                </label>

                <div className="cta-action">
                  <button type="submit" className="btn-primary" disabled={formStatus === "loading"}>
                    {formStatus === "loading" ? "Sending..." : "Start the Conversation"}
                    <ArrowIcon />
                  </button>
                </div>
              </form>

              <p
                className={`form-feedback${formStatus === "success" ? " success" : ""}${formStatus === "error" ? " error" : ""}`}
                aria-live="polite"
              >
                {formFeedback}
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-top">
          <div className="footer-brand">
            <Medallion size={52} fontSize="0.48rem" />
            <div className="footer-logo">CEIT</div>
            <p className="footer-blurb">
              A software innovation studio exploring problems across industries and
              shipping the solutions that solve them.
            </p>
          </div>

          <div className="footer-cols">
            <div className="footer-col">
              <span className="footer-col-title">Navigate</span>
              <a href="#services">Services</a>
              <a href="#industries">Industries</a>
              <a href="#process">Process</a>
              <a href="#contact">Contact</a>
            </div>
            <div className="footer-col">
              <span className="footer-col-title">Contact</span>
              <a href="mailto:centralinnovativetech@gmail.com">
                centralinnovativetech@gmail.com
              </a>
              <a href="tel:+233557777982">+233 55 777 7982</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-logo">CEIT</div>
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Central Innovative Technologies. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
