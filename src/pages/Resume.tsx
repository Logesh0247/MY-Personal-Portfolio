import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/PageHeader";
import { site, certifications } from "@/lib/site";
import {
  Award,
  Briefcase,
  Calendar,
  Download,
  FolderGit2,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Printer,
} from "lucide-react";

const Resume = () => {
  const handleDownload = () => {
    window.print();
  };

  const keyProjects = [
    {
      title: "Customer Churn Prediction Model",
      description:
        "Built an ensemble classifier (94% accuracy) to predict customer churn; engineered features from behavioural data and delivered a monitoring dashboard for the business team.",
      technologies: "Python, scikit-learn, pandas, Power BI",
    },
    {
      title: "Sales Analytics Dashboard",
      description:
        "Designed a Power BI dashboard with scheduled refresh, KPI tracking and forecasting; automated weekly reporting for leadership.",
      technologies: "Power BI, SQL, DAX, Excel",
    },
    {
      title: "E-commerce Data Pipeline",
      description:
        "Implemented an automated ETL pipeline loading daily order data into a star-schema MySQL warehouse, with Tableau visualisations on top.",
      technologies: "Python, MySQL, Tableau",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <PageHeader
        eyebrow="Resume"
        title="My professional profile"
        description="A structured summary of my education, skills and project experience."
      >
        <div className="print-hidden flex justify-center pt-4">
          <Button onClick={handleDownload} className="gap-2">
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
        </div>
      </PageHeader>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="resume-document card-surface mx-auto mt-14 max-w-4xl p-8 md:p-12"
      >
        {/* Head */}
        <div className="border-b border-border/70 pb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            {site.name}
          </h2>
          <p className="print-accent mt-2 font-medium text-primary">
            B.Sc. Data Science Graduate · Aspiring Data Scientist
          </p>

          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <a
              href={site.phoneHref}
              className="flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <Phone className="h-3.5 w-3.5 text-primary" />
              {site.phone}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <Mail className="h-3.5 w-3.5 text-primary" />
              {site.email}
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5 text-primary" />
              {site.location}
            </span>
          </div>
        </div>

        {/* Summary */}
        <section className="mt-10">
          <h3 className="print-accent mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
            <Briefcase className="h-4 w-4" />
            Professional Summary
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Data Science graduate with strong analytical skills and hands-on
            project experience in machine learning, data visualisation and
            statistical analysis. Proficient in Python, SQL, Power BI and
            Tableau. Looking to apply technical expertise and problem-solving
            ability to drive data-informed decisions as a Data Scientist.
          </p>
        </section>

        {/* Education */}
        <section className="mt-10">
          <h3 className="print-accent mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
            <GraduationCap className="h-4 w-4" />
            Education
          </h3>
          <div className="border-l-2 border-primary/50 pl-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h4 className="font-semibold">
                Bachelor of Science in Data Science
              </h4>
              <span className="flex items-center gap-1.5 font-code text-xs text-muted-foreground">
                <Calendar className="h-3.5 w-3.5" />
                2021 – 2024
              </span>
            </div>
            <p className="print-accent mt-1 text-sm font-medium text-primary-dim">
              Tamil Nadu, India
            </p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              <li>Coursework: Machine Learning, Statistics, Data Mining, Database Systems</li>
              <li>Key projects: Customer Churn Prediction, Sales Analytics Dashboard</li>
              <li>Strong foundation in mathematics, statistics and programming</li>
            </ul>
          </div>
        </section>

        {/* Skills */}
        <section className="mt-10">
          <h3 className="print-accent mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
            <Award className="h-4 w-4" />
            Technical Skills
          </h3>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <h4 className="mb-2 text-sm font-semibold">Programming & Analysis</h4>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>
                  <span className="font-medium text-foreground">Python:</span>{" "}
                  pandas, NumPy, scikit-learn, Matplotlib, Seaborn
                </li>
                <li>
                  <span className="font-medium text-foreground">SQL:</span>{" "}
                  MySQL, PostgreSQL, query optimisation
                </li>
                <li>
                  <span className="font-medium text-foreground">R:</span>{" "}
                  statistical analysis, ggplot2
                </li>
                <li>
                  <span className="font-medium text-foreground">Statistics:</span>{" "}
                  hypothesis testing, regression
                </li>
              </ul>
            </div>
            <div>
              <h4 className="mb-2 text-sm font-semibold">Visualisation & Tools</h4>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                <li>
                  <span className="font-medium text-foreground">Power BI:</span>{" "}
                  DAX, data modelling, interactive dashboards
                </li>
                <li>
                  <span className="font-medium text-foreground">Tableau:</span>{" "}
                  advanced visualisation, storytelling
                </li>
                <li>
                  <span className="font-medium text-foreground">Excel:</span>{" "}
                  pivot tables, advanced formulas
                </li>
                <li>
                  <span className="font-medium text-foreground">Web:</span>{" "}
                  React, Node.js, HTML/CSS
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mt-10">
          <h3 className="print-accent mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
            <FolderGit2 className="h-4 w-4" />
            Key Projects
          </h3>
          <div className="space-y-5">
            {keyProjects.map((project) => (
              <div
                key={project.title}
                className="border-l-2 border-primary/50 pl-5"
              >
                <h4 className="font-semibold">{project.title}</h4>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <p className="mt-1.5 font-code text-xs text-muted-foreground">
                  {project.technologies}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="mt-10">
          <h3 className="print-accent mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
            <Award className="h-4 w-4" />
            Certifications
          </h3>
          <ul className="grid gap-2 sm:grid-cols-2">
            {certifications.map((cert) => (
              <li
                key={cert}
                className="flex items-start gap-2 text-sm text-muted-foreground"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {cert}
              </li>
            ))}
          </ul>
        </section>

        {/* Objective */}
        <section className="mt-10">
          <h3 className="print-accent mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary">
            <Briefcase className="h-4 w-4" />
            Career Objective
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            To join a team where I can apply my analytical skills and passion
            for data to solve real business problems — while continuing to grow
            as a data scientist in an environment that values rigour,
            collaboration and continuous learning.
          </p>
        </section>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="print-hidden mt-14 text-center"
      >
        <div className="card-surface mx-auto max-w-2xl p-8">
          <h3 className="mb-3 text-xl font-semibold tracking-tight">
            Like what you see?
          </h3>
          <p className="mb-6 text-sm text-muted-foreground">
            Save this page as a PDF, or reach out directly — I usually respond
            within one working day.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button onClick={handleDownload} className="gap-2">
              <Printer className="h-4 w-4" />
              Print / Save as PDF
            </Button>
            <Link to="/contact">
              <Button variant="outline" className="gap-2">
                <Mail className="h-4 w-4" />
                Contact me
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Resume;
