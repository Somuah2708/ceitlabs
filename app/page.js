"use client";

import { useEffect, useMemo, useState } from "react";

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
    icon: "🌐",
    title: "Web Applications",
    description:
      "Custom web platforms, dashboards, portals and SaaS products built for performance, scalability and real business outcomes.",
  },
  {
    icon: "📱",
    title: "Mobile Applications",
    description:
      "iOS and Android apps that users love, from consumer-facing products to internal business tools and enterprise systems.",
  },
  {
    icon: "🤖",
    title: "AI & Automation",
    description:
      "Intelligent systems that automate repetitive processes, surface insights from data, and bring AI to where it actually creates value.",
  },
  {
    icon: "🛒",
    title: "E-Commerce Platforms",
    description:
      "End-to-end online commerce solutions, storefronts, payment integration, inventory management and custom shopping experiences.",
  },
  {
    icon: "📊",
    title: "Data & Analytics",
    description:
      "Dashboards and reporting systems that turn raw data into clear decisions. Real-time insights built for teams that move fast.",
  },
  {
    icon: "🔌",
    title: "API & Integrations",
    description:
      "Connecting your tools, systems and data pipelines with robust APIs and third-party integrations that just work.",
  },
];

const industries = [
  {
    icon: "🏥",
    title: "Healthcare",
    description:
      "Patient management, telemedicine, clinical workflows and health data platforms.",
  },
  {
    icon: "💳",
    title: "Finance & Fintech",
    description:
      "Payment systems, budgeting tools, investment platforms and financial automation.",
  },
  {
    icon: "🎓",
    title: "Education",
    description:
      "LMS platforms, student portals, remote learning tools and assessment systems.",
  },
  {
    icon: "🛍️",
    title: "Retail & Commerce",
    description:
      "Inventory systems, POS integration, customer loyalty and online storefronts.",
  },
  {
    icon: "🚚",
    title: "Logistics",
    description:
      "Fleet tracking, route optimization, delivery management and supply chain tools.",
  },
  {
    icon: "🏗️",
    title: "Real Estate",
    description:
      "Property listing platforms, lease management, inspection tools and agent portals.",
  },
  {
    icon: "🍽️",
    title: "Hospitality & Food",
    description:
      "Reservation systems, food ordering platforms, kitchen management tools.",
  },
  {
    icon: "⚡",
    title: "Energy & Utilities",
    description:
      "Smart metering, usage dashboards, maintenance scheduling and reporting systems.",
  },
  {
    icon: "🎯",
    title: "Marketing & Media",
    description:
      "Campaign management, analytics dashboards, CRM integrations and content tools.",
  },
  {
    icon: "⚖️",
    title: "Legal & Compliance",
    description:
      "Document management, case tracking, compliance reporting and client portals.",
  },
  {
    icon: "🏭",
    title: "Manufacturing",
    description:
      "Production tracking, quality control, ERP integrations and factory floor dashboards.",
  },
  {
    icon: "🌱",
    title: "Agriculture",
    description:
      "Crop monitoring, farm management, market access tools and yield analytics.",
  },
];

const processSteps = [
  {
    num: "01 - DISCOVER",
    title: "Problem Exploration",
    description:
      "We start where it matters: understanding the actual problem. Deep discovery, user research, and market context before a single line of code.",
  },
  {
    num: "02 - DESIGN",
    title: "Architecture & Design",
    description:
      "We map out the right solution architecture, design intuitive interfaces and plan a delivery roadmap aligned with your goals.",
  },
  {
    num: "03 - BUILD",
    title: "Rapid Development",
    description:
      "We build in focused sprints, shipping working software fast, gathering feedback and iterating until it is exactly right.",
  },
  {
    num: "04 - LAUNCH",
    title: "Deploy & Support",
    description:
      "We handle deployment, testing and handover and stay available post-launch to ensure everything runs as it should.",
  },
];

const whyPoints = [
  {
    icon: "🔍",
    title: "We find problems others miss",
    description:
      "Our model is built around niche exploration. We dig into industries, find friction, and build software that directly solves it.",
  },
  {
    icon: "⚡",
    title: "Speed without compromise",
    description:
      "We move fast. From contract to working product, our delivery model is optimized for speed and quality, not bureaucracy.",
  },
  {
    icon: "🌍",
    title: "Broad expertise, focused execution",
    description:
      "We work across industries and tech stacks, meaning we bring cross-domain thinking to every problem we take on.",
  },
  {
    icon: "🤝",
    title: "Partnership, not just delivery",
    description:
      "We are invested in your outcome, not just the deliverable. We build for the long term and stay close to the work.",
  },
];

const techStack = [
  "React",
  "Next.js",
  "Vue.js",
  "React Native",
  "Flutter",
  "Node.js",
  "Python",
  "Django",
  "FastAPI",
  "PostgreSQL",
  "MongoDB",
  "Firebase",
  "Supabase",
  "AWS",
  "Vercel",
  "Docker",
  "Stripe",
  "OpenAI API",
  "GraphQL",
  "REST APIs",
  "Figma",
  "Tailwind CSS",
  "TypeScript",
  "WordPress",
  "Shopify",
];

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
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

  const marqueeLoop = useMemo(() => [...marqueeItems, ...marqueeItems], []);

  useEffect(() => {
    const fadeEls = Array.from(document.querySelectorAll(".fade-in"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            window.setTimeout(() => entry.target.classList.add("visible"), i * 80);
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
        a.style.color = a.getAttribute("href") === `#${current}` ? "var(--text)" : "";
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
      <nav>
        <div className="nav-logo">
          CE<span>IT</span>
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

      <div className={`mobile-nav${isMenuOpen ? " open" : ""}`}>
        <a href="#services" onClick={closeMenu}>
          What We Build
        </a>
        <a href="#industries" onClick={closeMenu}>
          Industries
        </a>
        <a href="#process" onClick={closeMenu}>
          Process
        </a>
        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
      </div>

      <section className="hero">
        <div className="hero-grid"></div>
        <div className="hero-glow"></div>
        <div className="hero-glow2"></div>
        <div className="hero-content">
          <div className="hero-badge">Software Innovation Studio</div>
          <h1>
            We find problems.
            <br />
            <em>We ship solutions.</em>
          </h1>
          <p className="hero-sub">
            Central Innovative Technologies explores problems across industries and
            builds software that solves them, fast, clean, and built to last.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">
              Start a Project
              <ArrowIcon />
            </a>
            <a href="#services" className="btn-ghost">
              See what we build
              <ArrowIcon />
            </a>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-num">
                10<span>+</span>
              </div>
              <div className="stat-label">Industries Explored</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">
                Full<span>-</span>Stack
              </div>
              <div className="stat-label">Web & Mobile Delivery</div>
            </div>
            <div className="stat-item">
              <div className="stat-num">
                Fast<span>.</span>
              </div>
              <div className="stat-label">Rapid Deployment</div>
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
          <div className="section-label">
            <span className="line-accent"></span>What We Build
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
        <div className="services-grid fade-in" style={{ "--fade-delay": "80ms" }}>
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="industries" className="industries">
        <div className="fade-in industries-header" style={{ "--fade-delay": "0ms" }}>
          <div>
            <div className="section-label">
              <span className="line-accent"></span>Industries
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
          {industries.map((industry) => (
            <article className="industry-card" key={industry.title}>
              <div className="industry-icon">{industry.icon}</div>
              <h4>{industry.title}</h4>
              <p>{industry.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="process">
        <div className="fade-in" style={{ "--fade-delay": "0ms" }}>
          <div className="section-label">
            <span className="line-accent"></span>Our Process
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
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="why">
        <div className="why-inner">
          <div className="fade-in">
            <div className="why-visual">
              <div className="why-orb">
                <div className="why-orb-inner">
                  <span>CEIT</span>
                  <span>Central Innovative Technologies</span>
                </div>
              </div>
            </div>
          </div>
          <div className="fade-in" style={{ "--fade-delay": "80ms" }}>
            <div className="section-label">
              <span className="line-accent"></span>Why CEIT
            </div>
            <h2 className="section-title">
              Built different,
              <br />
              by design.
            </h2>
            <div className="why-points">
              {whyPoints.map((point) => (
                <article className="why-point" key={point.title}>
                  <div className="why-point-icon">{point.icon}</div>
                  <div>
                    <h4>{point.title}</h4>
                    <p>{point.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="tech">
        <div className="fade-in" style={{ "--fade-delay": "0ms" }}>
          <div className="section-label">
            <span className="line-accent"></span>Tech Stack
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
        <div className="tech-grid fade-in" style={{ "--fade-delay": "80ms" }}>
          {techStack.map((tech) => (
            <span className="tech-pill" key={tech}>
              {tech}
            </span>
          ))}
        </div>
      </section>

      <section id="contact" className="cta-section">
        <div className="cta-glow"></div>
        <div className="cta-inner">
          <div className="section-label section-label-center">
            <span className="line-accent"></span>Let&apos;s Work Together
          </div>
          <h2 className="section-title fade-in">
            Have a problem
            <br />
            that needs solving?
          </h2>
          <p className="section-sub fade-in cta-sub">
            Whether you have a fully-formed idea or just a problem worth solving, we
            want to hear about it. Let&apos;s build something great.
          </p>
          <form className="contact-form fade-in" style={{ "--fade-delay": "140ms" }} onSubmit={onSubmit}>
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

          <p className={`form-feedback${formStatus === "success" ? " success" : ""}${formStatus === "error" ? " error" : ""}`} aria-live="polite">
            {formFeedback}
          </p>

          <div className="cta-action fade-in" style={{ "--fade-delay": "180ms" }}>
            <a href="mailto:centralinnovativetech@gmail.com" className="btn-secondary">
              Prefer email? centralinnovativetech@gmail.com
            </a>
          </div>
          <p className="cta-email">
            Or reach us directly at{" "}
            <a href="mailto:centralinnovativetech@gmail.com">
              centralinnovativetech@gmail.com
            </a>
          </p>
        </div>
      </section>

      <footer>
        <div className="footer-logo">
          CE<span>IT</span>
        </div>
        <div className="footer-links">
          <a href="#services">Services</a>
          <a href="#industries">Industries</a>
          <a href="#process">Process</a>
          <a href="#contact">Contact</a>
        </div>
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Central Innovative Technologies. All rights
          reserved.
        </p>
      </footer>
    </>
  );
}
