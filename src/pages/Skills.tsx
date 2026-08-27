import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import PageHeader from "@/components/PageHeader";
import { stats } from "@/lib/site";
import {
  BarChart3,
  BookOpen,
  Brain,
  CheckCircle2,
  CircleDashed,
  Clock,
  Code,
  Database,
  FolderKanban,
  Layers,
} from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Querying",
      icon: Code,
      description: "The languages I use to explore, transform and model data.",
      skills: [
        { name: "Python", level: 90, note: "pandas, NumPy, scikit-learn" },
        { name: "SQL", level: 95, note: "Complex queries, optimisation" },
        { name: "R", level: 75, note: "Statistical analysis, ggplot2" },
      ],
    },
    {
      title: "Data Visualisation & BI",
      icon: BarChart3,
      description: "Turning analysis into dashboards people actually open.",
      skills: [
        { name: "Power BI", level: 92, note: "DAX, data modelling, KPIs" },
        { name: "Matplotlib / Seaborn", level: 85, note: "Publication-ready plots" },
        { name: "Excel", level: 95, note: "Pivot tables, power query" },
      ],
    },
    {
      title: "Machine Learning",
      icon: Brain,
      description: "Predictive modelling from feature engineering to evaluation.",
      skills: [
        { name: "scikit-learn", level: 88, note: "Classification, regression, clustering" },
        { name: "pandas", level: 95, note: "Wrangling, joins, reshaping" },
        { name: "Feature Engineering", level: 85, note: "Pipelines, encoding, scaling" },
        { name: "Model Evaluation", level: 87, note: "Validation, metrics, tuning" },
      ],
    },
    {
      title: "Databases & Tooling",
      icon: Database,
      description: "Where the data lives, and how I keep work reproducible.",
      skills: [
        { name: "MySQL", level: 90, note: "Schema design, administration" },
        { name: "MongoDB", level: 80, note: "Document modelling, queries" },
        { name: "Git & GitHub", level: 85, note: "Branching, reviews, CI basics" },
        { name: "Jupyter", level: 90, note: "Notebooks, reporting workflows" },
      ],
    },
  ];

  const certifications = [
    { title: "Data Science Specialization", provider: "Coursera", status: "Completed" },
    { title: "Machine Learning A–Z", provider: "Udemy", status: "Completed" },
    { title: "Advanced SQL", provider: "HackerRank", status: "Completed" },
    { title: "Python for Data Science", provider: "Kaggle", status: "Completed" },
    { title: "Power BI Data Analyst", provider: "Microsoft", status: "In progress" },
  ];

  const statusStyle = (status: string) => {
    switch (status) {
      case "Completed":
        return {
          icon: CheckCircle2,
          className: "text-success border-success/30 bg-success/10",
        };
      case "In progress":
        return {
          icon: Clock,
          className: "text-warning border-warning/30 bg-warning/10",
        };
      default:
        return {
          icon: CircleDashed,
          className: "text-muted-foreground border-border bg-muted/50",
        };
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <PageHeader
        eyebrow="Skills & expertise"
        title="A toolkit built for real data work"
        description="Proficiency levels reflect hands-on project experience — not just courses completed."
      />

      {/* Overview stats */}
      <div className="mt-14 grid gap-4 sm:grid-cols-3">
        {[
          { icon: BookOpen, value: stats.yearsLearning, label: "Years of focused study" },
          { icon: Code, value: stats.technologies, label: "Technologies & tools" },
          { icon: FolderKanban, value: stats.projects, label: "Projects completed" },
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

      {/* Category cards */}
      <div className="mt-16 grid gap-6 lg:grid-cols-2">
        {skillCategories.map((category, i) => (
          <motion.section
            key={category.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: (i % 2) * 0.1 }}
            className={`card-surface p-7 ${
              i === skillCategories.length - 1 && skillCategories.length % 2 === 1
                ? "lg:col-span-2"
                : ""
            }`}
          >
            <div className="mb-7 flex items-start gap-4">
              <div className="icon-tile shrink-0">
                <category.icon className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-lg font-semibold tracking-tight">
                  {category.title}
                </h2>
                <p className="mt-1 text-sm text-muted-foreground">
                  {category.description}
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {category.skills.map((skill, j) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-sm font-medium">{skill.name}</h3>
                    <span className="font-code text-xs text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  <Progress value={skill.level} className="h-1.5 bg-muted" />
                  <p className="text-xs text-muted-foreground">{skill.note}</p>
                </div>
              ))}
            </div>
          </motion.section>
        ))}
      </div>

      {/* Certifications */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20"
      >
        <div className="mb-8 max-w-2xl space-y-3">
          <p className="eyebrow">Credentials</p>
          <h2 className="text-3xl font-bold tracking-tight">
            Certifications & learning
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => {
            const style = statusStyle(cert.status);
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="card-interactive flex items-start justify-between gap-4 p-5"
              >
                <div>
                  <h3 className="text-sm font-semibold tracking-tight">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {cert.provider}
                  </p>
                </div>
                <Badge
                  variant="outline"
                  className={`shrink-0 gap-1 border text-[11px] font-normal ${style.className}`}
                >
                  <style.icon className="h-3 w-3" />
                  {cert.status}
                </Badge>
              </motion.div>
            );
          })}
        </div>
      </motion.section>
    </div>
  );
};

export default Skills;
