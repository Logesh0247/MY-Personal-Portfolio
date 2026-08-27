import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/PageHeader";
import { stats } from "@/lib/site";
import {
  AppWindow,
  ArrowRight,
  BarChart3,
  Brain,
  Check,
  Code2,
  Database,
  ExternalLink,
  FolderKanban,
  Github,
  HeartPulse,
  MessageSquareText,
} from "lucide-react";

const categoryIcons: Record<string, typeof Brain> = {
  "Machine Learning": Brain,
  "Business Intelligence": BarChart3,
  "Data Engineering": Database,
  "NLP": MessageSquareText,
  "Healthcare Analytics": HeartPulse,
  "Full Stack": AppWindow,
};

const projects = [
  {
    title: "Customer Churn Prediction Model",
    description:
      "Machine learning model that predicts customer churn using advanced feature engineering and ensemble methods, shipped with an executive monitoring dashboard.",
    category: "Machine Learning",
    date: "2024",
    featured: true,
    technologies: ["Python", "scikit-learn", "pandas", "Power BI"],
    highlights: [
      "94% prediction accuracy with gradient boosting",
      "Identified drivers behind 23% churn reduction",
      "Interactive Power BI dashboard for stakeholders",
    ],
  },
  {
    title: "Sales Analytics Dashboard",
    description:
      "Comprehensive sales analytics dashboard in Power BI with scheduled refresh, KPI tracking and time-series forecasting for the leadership team.",
    category: "Business Intelligence",
    date: "2024",
    featured: true,
    technologies: ["Power BI", "SQL", "DAX", "Excel"],
    highlights: [
      "Real-time refresh across 3 data sources",
      "15+ interactive visuals with drill-through",
      "Automated weekly reporting, saving hours",
    ],
  },
  {
    title: "E-commerce Data Pipeline",
    description:
      "Automated ETL pipeline that moves daily order data into a clean star-schema warehouse, with Power BI dashboards layered on top for insights.",
    category: "Data Engineering",
    date: "2024",
    featured: true,
    technologies: ["Python", "MySQL", "Power BI"],
    highlights: [
      "Fully automated extract–transform–load flow",
      "Star schema for fast analytical queries",
      "Data quality checks with alerting",
    ],
  },
  {
    title: "Stock Market Sentiment Analysis",
    description:
      "NLP tool that scores social-media sentiment and measures its correlation with daily stock price movements, visualised in an interactive notebook report.",
    category: "NLP",
    date: "2023",
    featured: false,
    technologies: ["Python", "NLTK", "Matplotlib", "APIs"],
    highlights: [
      "Real-time sentiment scoring pipeline",
      "0.78 correlation with next-day movement",
      "Clear visualisations for non-technical readers",
    ],
  },
  {
    title: "Healthcare Outcomes Dashboard",
    description:
      "Interactive healthcare dashboard analysing patient outcomes, treatment effectiveness and resource utilisation across departments.",
    category: "Healthcare Analytics",
    date: "2023",
    featured: false,
    technologies: ["Power BI", "SQL", "R", "Statistics"],
    highlights: [
      "10+ clinical and operational metrics",
      "Hypothesis-tested treatment comparisons",
      "Cost-optimisation insights for planners",
    ],
  },
  {
    title: "Personal Finance Tracker",
    description:
      "Full-stack web app for personal finance management with budget alerts, spending categories and monthly trend visualisations.",
    category: "Full Stack",
    date: "2023",
    featured: false,
    technologies: ["React", "Node.js", "MongoDB", "Chart.js"],
    highlights: [
      "Responsive design, mobile-first",
      "Secure authentication & sessions",
      "Budget tracking with smart alerts",
    ],
  },
];

const categories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const visible =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <PageHeader
        eyebrow="Portfolio"
        title="Projects with measurable outcomes"
        description="Machine learning models, analytics dashboards and data pipelines — each project lists the stack and the results it produced."
      />

      {/* Stats */}
      <div className="mt-14 grid gap-4 sm:grid-cols-3">
        {[
          { icon: FolderKanban, value: stats.projects, label: "Projects completed" },
          { icon: Code2, value: stats.technologies, label: "Technologies used" },
          { icon: Github, value: "100%", label: "Version controlled with Git" },
        ].map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="card-surface flex items-center gap-4 p-5"
          >
            <div className="icon-tile">
              <stat.icon className="h-5 w-5" />
            </div>
            <div>
              <div className="text-2xl font-bold tracking-tight">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Filter */}
      <div className="mt-12 flex flex-wrap gap-2">
        {categories.map((category) => {
          const active = category === activeCategory;
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-all ${
                active
                  ? "border-primary bg-primary/10 font-medium text-primary"
                  : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project, i) => {
            const Icon = categoryIcons[project.category] ?? FolderKanban;
            return (
              <motion.article
                layout
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="card-interactive flex flex-col p-6"
              >
                <div className="mb-5 flex items-start justify-between">
                  <div className="icon-tile">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-code text-xs text-muted-foreground">
                      {project.date}
                    </span>
                    <div className="flex gap-1">
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8 text-muted-foreground hover:text-foreground"
                        aria-label="View source code"
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="h-8 w-8 text-muted-foreground hover:text-foreground"
                        aria-label="View live demo"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="mb-2 flex items-center gap-2">
                  <Badge variant="secondary" className="font-normal">
                    {project.category}
                  </Badge>
                  {project.featured && (
                    <Badge className="bg-primary/15 font-normal text-primary hover:bg-primary/15">
                      Featured
                    </Badge>
                  )}
                </div>

                <h3 className="mb-2 text-lg font-semibold tracking-tight">
                  {project.title}
                </h3>
                <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <ul className="mb-5 space-y-2">
                  {project.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-1.5 border-t border-border/60 pt-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="font-normal text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20 text-center"
      >
        <div className="card-surface mx-auto max-w-2xl p-10">
          <h2 className="mb-3 text-2xl font-bold tracking-tight">
            Want the technical details?
          </h2>
          <p className="mb-8 text-muted-foreground">
            Every project includes documented code, data dictionaries and
            reproducible notebooks on GitHub.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://github.com/Logesh0247"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="gap-2">
                <Github className="h-4 w-4" />
                Browse my GitHub
              </Button>
            </a>
            <Link to="/contact">
              <Button variant="outline" className="gap-2">
                Discuss a project
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
