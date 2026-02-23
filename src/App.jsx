import "./styles.css";

const LINKS = {
  email: "sol@jjai.dev",
  github: "https://github.com/SOL7JJ",        // <- change
  linkedin: "https://www.linkedin.com/in/james-jonathan-elie-303219366/", // <- change
  resume: "#contact", // <- add later
};

const projects = [
  {
    title: "CodeQuest AI",
    description: "AI-powered chatbot helping KS3 students learn coding interactively.",
    tags: ["Education", "AI", "Chatbot"],
    link: "https://www.tutor-code-quest.com",
  },
  {
    title: "Computer Vision Posture Classifier",
    description: "Fine-tuned VGG16 model to classify correct/incorrect hand postures.",
    tags: ["Computer Vision", "Deep Learning"],
    link: "#",
  },
  {
    title: "Freelance Web Builds",
    description: "Fast, responsive sites with clean UI and production-ready code.",
    tags: ["React", "Frontend", "UX"],
    link: "#",
  },
];

function Badge({ children }) {
  return <span className="badge">{children}</span>;
}

function Button({ href, children, variant = "primary" }) {
  const cls = variant === "ghost" ? "btn btn-ghost" : "btn";
  return (
    <a
      className={cls}
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
    >
      {children}
    </a>
  );
}

export default function App() {
  return (
    <div className="page">
      <header className="nav">
        <div className="brand">JJAI<span className="dot">.</span>dev</div>
        <nav className="navlinks">
          <a href="#projects">Projects</a>
          <a href="#how-i-build">How I Build</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main className="container">
        <section className="hero">
          <div className="hero-left">
            <p className="kicker">AI Engineer • Software Developer</p>
            <h1>I build intelligent, clean software that solves real problems.</h1>
            <p className="sub">
              London-based. Machine Learning, Computer Vision, and modern web builds — with a focus on clarity, speed, and quality.
            </p>

            <div className="cta">
              <Button href="#projects">View Projects</Button>
              <Button href={`mailto:${LINKS.email}`} variant="ghost">Email Me</Button>
            </div>

            <div className="quicklinks">
              <a href={LINKS.github} target="_blank" rel="noreferrer">GitHub</a>
              <span className="sep">•</span>
              <a href={LINKS.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <span className="sep">•</span>
              <a href={LINKS.resume} target="_blank" rel="noreferrer">Resume</a>
            </div>
          </div>

          <div className="hero-card">
            <div className="card">
              <p className="card-title">What I do</p>
              <ul className="bullets">
                <li>Machine Learning & Computer Vision</li>
                <li>React/Node builds & automation</li>
                <li>Education-focused AI products</li>
              </ul>
              <div className="card-row">
                <Badge>ML</Badge>
                <Badge>CV</Badge>
                <Badge>React</Badge>
                <Badge>Node</Badge>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <p className="section-sub">A few things I’m building and improving.</p>

          <div className="grid">
            {projects.map((p) => (
              <a key={p.title} className="project" href={p.link} target="_blank" rel="noreferrer">
                <div className="project-head">
                  <h3>{p.title}</h3>
                  <span className="arrow">↗</span>
                </div>
                <p className="project-desc">{p.description}</p>
                {p.link.startsWith("http") && <span className="project-link">{p.link}</span>}
                <div className="tagrow">
                  {p.tags.map((t) => <Badge key={t}>{t}</Badge>)}
                </div>
              </a>
            ))}
          </div>
        </section>
<section id="how-i-build" className="section">
  <h2>How I Build</h2>
  <p className="section-sub">
    My approach to shipping reliable AI + web products.
  </p>

  <div className="grid">
    <div className="project" style={{ cursor: "default" }}>
      <div className="project-head">
        <h3>1) Problem → Requirements</h3>
      </div>
      <p className="project-desc">
        I clarify the goal, users, constraints, and what “success” means.
      </p>
      <div className="tagrow">
        <Badge>Scope</Badge>
        <Badge>Constraints</Badge>
        <Badge>Success metrics</Badge>
      </div>
    </div>

    <div className="project" style={{ cursor: "default" }}>
      <div className="project-head">
        <h3>2) Design → Architecture</h3>
      </div>
      <p className="project-desc">
        I choose the simplest architecture that scales: data flow, model/API, and UI.
      </p>
      <div className="tagrow">
        <Badge>System design</Badge>
        <Badge>Trade-offs</Badge>
        <Badge>Clean UX</Badge>
      </div>
    </div>

    <div className="project" style={{ cursor: "default" }}>
      <div className="project-head">
        <h3>3) Data → Training → Evaluation</h3>
      </div>
      <p className="project-desc">
        I build the dataset, train/iterate, and track metrics (Accuracy/F1, precision/recall).
      </p>
      <div className="tagrow">
        <Badge>Dataset</Badge>
        <Badge>Accuracy / F1</Badge>
        <Badge>Error analysis</Badge>
      </div>
    </div>

    <div className="project" style={{ cursor: "default" }}>
      <div className="project-head">
        <h3>4) Deploy → Improve</h3>
      </div>
      <p className="project-desc">
        CI/CD, monitoring, and fast iteration based on feedback and real usage.
      </p>
      <div className="tagrow">
        <Badge>GitHub</Badge>
        <Badge>Vercel</Badge>
        <Badge>Iteration</Badge>
      </div>
    </div>
  </div>
</section>

<section id="about" className="section">
          <h2>About</h2>
          <div className="about">
            <p>
              I’m Jonathan James (JJ). I build AI-powered systems and modern web apps.
              I care about clean UX, solid engineering, and shipping.
            </p>
            <p>
              If you need help with an AI feature, an MVP, or a polished frontend — I’m available for freelance work.
            </p>
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <div className="contact">
            <div className="contact-card">
              <p className="contact-title">Let’s talk</p>
              <p className="contact-sub">Best way to reach me:</p>
              <a className="email" href={`mailto:${LINKS.email}`}>{LINKS.email}</a>
              <div className="cta" style={{ marginTop: 16 }}>
                <Button href={`mailto:${LINKS.email}`}>Send Email</Button>
                <Button href={LINKS.linkedin} variant="ghost">LinkedIn</Button>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <span>© {new Date().getFullYear()} jjai.dev</span>
          <span className="sep">•</span>
          <span>Built with React</span>
        </footer>
      </main>
    </div>
  );
}
