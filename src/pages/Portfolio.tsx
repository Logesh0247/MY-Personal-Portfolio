import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

import { site, stats } from "@/lib/site";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Brain,
  Code2,
  Database,
  FolderKanban,
  GraduationCap,
  Mail,
  MapPin,
} from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

const Portfolio = () => {
  const highlights = [
    {
      icon: BarChart3,
      title: "Analytics & BI",
      description:
        "Interactive Power BI and Tableau dashboards with clean data models, DAX measures and KPI reporting.",
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description:
        "End-to-end predictive modelling in Python — feature engineering, training, evaluation and clear reporting.",
    },
    {
      icon: Database,
      title: "Data Engineering",
      description:
        "Reliable SQL pipelines that extract, transform and load data from multiple sources on a schedule.",
    },
  ];

  const featuredProjects = [
    {
      icon: Brain,
      title: "Customer Churn Prediction",
      summary:
        "Ensemble ML model achieving 94% accuracy, shipped with a Power BI monitoring dashboard.",
      tags: ["Python", "Scikit-learn", "Power BI"],
    },
    {
      icon: BarChart3,
      title: "Sales Analytics Dashboard",
      summary:
        "Executive KPI dashboard with real-time refresh, drill-downs and automated forecasting.",
      tags: ["Power BI", "SQL", "DAX"],
    },
    {
      icon: Database,
      title: "E-commerce Data Pipeline",
      summary:
        "Automated ETL moving daily order data into a star-schema warehouse for analytics.",
      tags: ["Python", "MySQL", "Tableau"],
    },
  ];

  return (
    <div>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 md:pt-24">
        <div className="max-w-3xl">
          <div className="space-y-8">
            <motion.div {...fadeUp(0)} className="space-y-5">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-4 py-1.5 text-xs text-muted-foreground">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-foreground" />
                </span>
                Open to data science opportunities
              </div>

              <h1 className="text-balance font-heading text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
                Hi, I'm Logesh.
                <span className="mt-3 block italic text-muted-foreground">
                  I turn raw data into{" "}
                  <span className="not-italic text-primary">decisions</span>.
                </span>
              </h1>

              <p className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
                B.Sc. Data Science graduate based in Hosur, India. I build
                analytics dashboards, predictive models and data pipelines using{" "}
                <span className="font-medium text-foreground">SQL</span>,{" "}
                <span className="font-medium text-foreground">Python</span>,{" "}
                <span className="font-medium text-foreground">Power BI</span> and{" "}
                <span className="font-medium text-foreground">Tableau</span>.
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.15)} className="flex flex-wrap items-center gap-3">
              <Link to="/projects">
                <Button size="lg" className="gap-2 px-6 font-medium">
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/resume">
                <Button size="lg" variant="outline" className="gap-2 px-6 font-medium">
                  Resume
                </Button>
              </Link>
              <Link
                to="/contact"
                className="group flex items-center gap-1.5 px-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                Get in touch
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>

            <motion.div
              {...fadeUp(0.25)}
              className="flex flex-wrap gap-x-6 gap-y-2 border-t border-border/70 pt-6 text-sm text-muted-foreground"
            >
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2 transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4 text-primary" />
                {site.email}
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                {site.location}
              </span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────── */}
      <section className="border-y border-border/70 bg-card/40">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-border/70 px-4 sm:px-6 md:grid-cols-4 md:divide-x">
          {[
            { icon: FolderKanban, value: stats.projects, label: "Projects Completed" },
            { icon: Code2, value: stats.technologies, label: "Technologies & Tools" },
            { icon: GraduationCap, value: stats.yearsLearning, label: "Years of Study" },
            { icon: Brain, value: stats.problemsSolved, label: "Problems Solved" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col items-center gap-1 px-4 py-8 text-center"
            >
              <stat.icon className="mb-2 h-5 w-5 text-primary" />
              <span className="text-3xl font-bold tracking-tight">{stat.value}</span>
              <span className="text-xs text-muted-foreground">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── What I do ────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-2xl space-y-3"
        >
          <p className="eyebrow">What I do</p>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Data work, end to end
          </h2>
          <p className="text-muted-foreground">
            From raw tables to a dashboard your team can actually use — I handle
            the full journey of a dataset.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-interactive p-6"
            >
              <div className="icon-tile mb-5">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 text-lg font-semibold tracking-tight">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Featured work ────────────────────────────────── */}
      <section className="border-t border-border/70 bg-card/40">
        <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 flex flex-wrap items-end justify-between gap-6"
          >
            <div className="max-w-xl space-y-3">
              <p className="eyebrow">Selected work</p>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                Featured projects
              </h2>
            </div>
            <Link
              to="/projects"
              className="group flex items-center gap-1.5 text-sm font-medium text-primary"
            >
              View all projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link to="/projects" className="card-interactive group flex h-full flex-col p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="icon-tile">
                      <project.icon className="h-5 w-5" />
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
                  </div>
                  <h3 className="mb-2 font-semibold tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {project.summary}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-border bg-secondary px-2 py-0.5 text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="card-surface relative overflow-hidden p-10 text-center md:p-16"
        >
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 80% at 50% 120%, hsl(0 0% 100% / 0.08), transparent 70%)",
            }}
          />
          <div className="relative space-y-6">
            <p className="eyebrow">Next step</p>
            <h2 className="mx-auto max-w-xl text-balance text-3xl font-bold tracking-tight md:text-4xl">
              Looking for a data scientist who cares about the details?
            </h2>
            <p className="mx-auto max-w-xl text-muted-foreground">
              I'm open to full-time roles, internships and freelance analytics
              projects. Tell me about your data and what you're trying to learn
              from it.
            </p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <Link to="/contact">
                <Button size="lg" className="gap-2 px-6 font-medium">
                  Start a Conversation
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <a href={`mailto:${site.email}`}>
                <Button size="lg" variant="outline" className="gap-2 px-6 font-medium">
                  <Mail className="h-4 w-4" />
                  {site.email}
                </Button>
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Portfolio;
