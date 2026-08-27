import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/PageHeader";
import {
  ArrowUpRight,
  BookMarked,
  Calendar,
  Clock,
  Compass,
  LineChart,
  PenLine,
  Rss,
  Wrench,
} from "lucide-react";

const articleIcons = [LineChart, BookMarked, PenLine, Compass, Wrench, Rss];

const articles = [
  {
    title: "10 Python Libraries Every Data Scientist Should Know",
    excerpt:
      "A practical guide to the most useful Python libraries for data work — from pandas to scikit-learn — with short, real examples for each.",
    readTime: "8 min read",
    date: "2024-01-15",
    tags: ["Python", "Data Science", "Tutorial"],
    platform: "Medium",
  },
  {
    title: "Building Your First Machine Learning Pipeline",
    excerpt:
      "A step-by-step walk through an end-to-end ML pipeline: data prep, training, evaluation and packaging a model for reuse.",
    readTime: "12 min read",
    date: "2023-12-20",
    tags: ["Machine Learning", "Pipeline", "Beginner"],
    platform: "Dev.to",
  },
  {
    title: "Data Visualisation Best Practices: Make Charts Tell a Story",
    excerpt:
      "How to choose the right chart, remove clutter and annotate with intent — with examples in Power BI and Python.",
    readTime: "10 min read",
    date: "2023-11-30",
    tags: ["Visualisation", "Power BI", "Python"],
    platform: "LinkedIn",
  },
  {
    title: "SQL for Data Scientists: Beyond SELECT *",
    excerpt:
      "Window functions, CTEs and query optimisation techniques that make analytical SQL faster and easier to maintain.",
    readTime: "15 min read",
    date: "2023-10-25",
    tags: ["SQL", "Databases", "Advanced"],
    platform: "Medium",
  },
  {
    title: "Where Data Science Is Heading Next",
    excerpt:
      "AutoML, explainable AI and the growing overlap with analytics engineering — what it means for early-career data professionals.",
    readTime: "7 min read",
    date: "2023-09-15",
    tags: ["Trends", "AI", "Careers"],
    platform: "Towards Data Science",
  },
  {
    title: "Debugging Machine Learning Models: Common Pitfalls",
    excerpt:
      "From data leakage to silent class imbalance — how to find and fix the issues that make models fail in production.",
    readTime: "11 min read",
    date: "2023-08-10",
    tags: ["Machine Learning", "Best Practices"],
    platform: "Analytics Vidhya",
  },
];

const platforms = ["All", ...Array.from(new Set(articles.map((a) => a.platform)))];

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

const Articles = () => {
  const [activePlatform, setActivePlatform] = useState("All");

  const visible =
    activePlatform === "All"
      ? articles
      : articles.filter((a) => a.platform === activePlatform);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <PageHeader
        eyebrow="Writing"
        title="Notes from the field"
        description="I write practical, example-driven articles about data science, machine learning and analytics — the things I wish I'd read earlier."
      />

      {/* Filter */}
      <div className="mt-12 flex flex-wrap justify-center gap-2">
        {platforms.map((platform) => {
          const active = platform === activePlatform;
          return (
            <button
              key={platform}
              onClick={() => setActivePlatform(platform)}
              className={`rounded-full border px-4 py-1.5 text-sm transition-all ${
                active
                  ? "border-primary bg-primary/10 font-medium text-primary"
                  : "border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
              }`}
            >
              {platform}
            </button>
          );
        })}
      </div>

      {/* Grid */}
      <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((article, i) => {
            const Icon = articleIcons[i % articleIcons.length];
            return (
              <motion.article
                layout
                key={article.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="card-interactive group flex cursor-pointer flex-col p-6"
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="icon-tile">
                    <Icon className="h-5 w-5" />
                  </div>
                  <Badge variant="secondary" className="font-normal">
                    {article.platform}
                  </Badge>
                </div>

                <h3 className="mb-2 font-semibold leading-snug tracking-tight transition-colors group-hover:text-primary">
                  {article.title}
                </h3>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {article.excerpt}
                </p>

                <div className="mb-4 flex flex-wrap gap-1.5">
                  {article.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="font-normal text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between border-t border-border/60 pt-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-3.5 w-3.5" />
                      {formatDate(article.date)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {article.readTime}
                    </span>
                  </div>
                  <ArrowUpRight className="h-4 w-4 transition-colors group-hover:text-primary" />
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </motion.div>

      {/* Topics */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20"
      >
        <div className="mb-8 max-w-2xl space-y-3">
          <p className="eyebrow">Coverage</p>
          <h2 className="text-3xl font-bold tracking-tight">Topics I write about</h2>
        </div>

        <div className="flex flex-wrap gap-2">
          {[
            "Supervised & unsupervised learning",
            "Model deployment",
            "Power BI",
            "Dashboard design",
            "Statistical analysis",
            "A/B testing",
            "Career development",
            "Portfolio building",
            "Python",
            "SQL",
            "R",
            "Data ethics",
            "Analytics engineering",
          ].map((topic) => (
            <span
              key={topic}
              className="rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
            >
              {topic}
            </span>
          ))}
        </div>
      </motion.section>

      {/* Follow CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20 text-center"
      >
        <div className="card-surface mx-auto max-w-2xl p-10">
          <div className="icon-tile mx-auto mb-5">
            <Rss className="h-5 w-5" />
          </div>
          <h2 className="mb-3 text-2xl font-bold tracking-tight">Follow along</h2>
          <p className="mb-8 text-muted-foreground">
            New articles publish on Medium and LinkedIn first. Follow me there
            to get them as they land.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button className="gap-2">
              <ArrowUpRight className="h-4 w-4" />
              Follow on Medium
            </Button>
            <a
              href="https://www.linkedin.com/in/logesh-ds/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">Connect on LinkedIn</Button>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Articles;
