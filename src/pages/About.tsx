import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site";
import {
  ArrowRight,
  BookOpen,
  Code2,
  GraduationCap,
  Handshake,
  Lightbulb,
  Mail,
  MapPin,
  ShieldCheck,
  Target,
} from "lucide-react";

const sectionMotion = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, delay },
});

const About = () => {
  const facts = [
    { label: "Location", value: site.location },
    { label: "Education", value: "B.Sc. Data Science (2021–2024)" },
    { label: "Focus", value: "Analytics · ML · BI" },
    { label: "Core stack", value: "SQL, Python, Power BI, Tableau" },
    { label: "Currently", value: "Open to opportunities" },
    { label: "Interests", value: "Visualisation, open source, writing" },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Continuous learning",
      text: "Tools and methods keep evolving — I make structured learning a weekly habit, not an afterthought.",
    },
    {
      icon: ShieldCheck,
      title: "Responsible data use",
      text: "Good analysis is honest analysis. I care about data quality, privacy and communicating uncertainty.",
    },
    {
      icon: Handshake,
      title: "Collaboration first",
      text: "The best solutions come from working closely with the people who own the problem.",
    },
    {
      icon: Target,
      title: "Impact over output",
      text: "A model or chart only matters if it changes a decision. I start from the decision and work backwards.",
    },
  ];

  const timeline = [
    {
      year: "2024",
      title: "B.Sc. Data Science — Graduate",
      description:
        "Completed my degree with a focus on machine learning, statistics and data visualisation, graduating with hands-on project experience across the full analytics workflow.",
      icon: GraduationCap,
    },
    {
      year: "2023",
      title: "Advanced analytics skills",
      description:
        "Deepened my toolkit: SQL optimisation, Python for data analysis (pandas, scikit-learn), and dashboard design in Power BI and Tableau through real projects.",
      icon: Code2,
    },
    {
      year: "2022",
      title: "First end-to-end projects",
      description:
        "Built my first predictive models and interactive dashboards, learning how to move from messy CSVs to insights a stakeholder can act on.",
      icon: Target,
    },
    {
      year: "2021",
      title: "Started the journey",
      description:
        "Began studying data science — mathematics, statistics and programming fundamentals, and discovered how much I enjoy working with data.",
      icon: BookOpen,
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <PageHeader
        eyebrow="About me"
        title="The person behind the data"
        description="A data science graduate who cares about clear thinking, honest analysis and useful outcomes."
      />

      {/* Bio + facts */}
      <div className="mt-16 grid gap-10 lg:grid-cols-5">
        <motion.div {...sectionMotion()} className="space-y-5 lg:col-span-3">
          <h2 className="text-2xl font-bold tracking-tight">My story</h2>
          <div className="space-y-4 leading-relaxed text-muted-foreground">
            <p>
              I'm{" "}
              <span className="font-semibold text-foreground">Logesh S</span>, a
              data science graduate from Hosur, Tamil Nadu. My interest in data
              started during my B.Sc. programme, when I realised that almost
              every good decision — in business, sport or public policy — is
              downstream of well-understood data.
            </p>
            <p>
              What keeps me hooked is the intersection of mathematics,
              statistics and technology. Every dataset tells a story, and I
              enjoy being the person who helps a team understand what their data
              is actually saying — and just as importantly, what it isn't.
            </p>
            <p>
              When I'm not analysing datasets or building models, you'll find me
              exploring new visualisation techniques, contributing to
              open-source projects, or writing about practical data science for
              people just entering the field.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link to="/skills">
              <Button variant="outline" className="gap-2">
                See my skill set
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="gap-2">
                <Mail className="h-4 w-4" />
                Contact me
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.aside {...sectionMotion(0.1)} className="lg:col-span-2">
          <div className="portrait-frame mb-6 overflow-hidden rounded-sm border border-white/15">
            <img
              src="/profile.jpg"
              alt="Logesh S"
              className="block h-auto w-full"
            />
          </div>
          <div className="card-surface space-y-5 p-6">
            <div className="flex items-center gap-3 border-b border-border/70 pb-4">
              <div className="icon-tile">
                <MapPin className="h-5 w-5" />
              </div>
              <h3 className="font-semibold tracking-tight">At a glance</h3>
            </div>
            <dl className="space-y-4">
              {facts.map((fact) => (
                <div key={fact.label} className="flex flex-col gap-0.5">
                  <dt className="font-code text-[11px] uppercase tracking-wider text-muted-foreground">
                    {fact.label}
                  </dt>
                  <dd className="text-sm font-medium text-foreground">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </motion.aside>
      </div>

      {/* Values */}
      <motion.section {...sectionMotion()} className="mt-24">
        <div className="mb-10 max-w-2xl space-y-3">
          <p className="eyebrow">How I work</p>
          <h2 className="text-3xl font-bold tracking-tight">
            Principles I work by
          </h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              {...sectionMotion(i * 0.08)}
              className="card-interactive p-6"
            >
              <div className="icon-tile mb-4">
                <value.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 font-semibold tracking-tight">{value.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {value.text}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Timeline */}
      <motion.section {...sectionMotion()} className="mt-24">
        <div className="mb-10 max-w-2xl space-y-3">
          <p className="eyebrow">Timeline</p>
          <h2 className="text-3xl font-bold tracking-tight">My journey so far</h2>
        </div>

        <div className="relative mx-auto max-w-3xl space-y-10 before:absolute before:bottom-3 before:left-[7px] before:top-2 before:w-px before:bg-border md:before:left-[9px]">
          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative flex gap-6 pl-1 md:pl-2"
            >
              <span className="relative z-10 mt-1 flex h-4 w-4 shrink-0 items-center justify-center">
                <span className="h-3 w-3 rounded-full border-2 border-primary bg-background" />
              </span>
              <div className="card-surface flex-1 p-6">
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <span className="font-code text-xs font-semibold text-primary">
                    {item.year}
                  </span>
                  <h3 className="font-semibold tracking-tight">{item.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default About;
