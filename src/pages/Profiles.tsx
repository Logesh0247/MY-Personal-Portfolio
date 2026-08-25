import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/PageHeader";
import { stats } from "@/lib/site";
import {
  ArrowUpRight,
  Award,
  BarChart3,
  ChefHat,
  Code2,
  Dumbbell,
  ExternalLink,
  Github,
  Globe,
  Medal,
  Trophy,
  Zap,
} from "lucide-react";

const Profiles = () => {
  const codingProfiles = [
    {
      platform: "LeetCode",
      username: "logesh_s",
      icon: Code2,
      stats: {
        "Problems solved": 245,
        Ranking: "Top 15%",
        Rating: 1650,
        "Best streak": "45 days",
      },
      achievements: ["100+ Easy solved", "50+ Medium solved", "Weekly contest regular"],
      description:
        "Consistent algorithm practice and weekly contests to keep problem-solving sharp.",
      link: "#",
    },
    {
      platform: "HackerRank",
      username: "logesh_data",
      icon: Trophy,
      stats: {
        "Problems solved": 180,
        Python: "5-star",
        SQL: "5-star",
        Certificates: 5,
      },
      achievements: ["Python Gold badge", "SQL Gold badge", "Problem Solving 5-star"],
      description:
        "Verified certifications in Python and SQL with 5-star domain badges.",
      link: "#",
    },
    {
      platform: "GitHub",
      username: "Logesh0247",
      icon: Github,
      stats: {
        Repositories: 45,
        Stars: 128,
        Followers: 85,
        Contributions: "500+ / yr",
      },
      achievements: ["Arctic Code Vault", "Pull Shark", "Quickdraw"],
      description:
        "Home of my project code — data science notebooks, dashboards and web apps.",
      link: "https://github.com/Logesh0247",
    },
    {
      platform: "Kaggle",
      username: "logeshdata",
      icon: BarChart3,
      stats: {
        Competitions: 8,
        Datasets: 5,
        Notebooks: 15,
        Status: "Contributor",
      },
      achievements: ["Notebook expert track", "5 bronze medals", "Active competitor"],
      description:
        "Competitions and public notebooks sharing end-to-end analysis with the community.",
      link: "#",
    },
    {
      platform: "Codeforces",
      username: "logesh_cf",
      icon: Zap,
      stats: {
        "Problems solved": 156,
        Rank: "Pupil",
        Rating: 1275,
        Contests: 25,
      },
      achievements: ["Rated contestant", "Div. 2 participant", "200+ rating gain"],
      description:
        "Rated competitive programming — where I learned to think fast under constraints.",
      link: "#",
    },
    {
      platform: "CodeChef",
      username: "logesh_cook",
      icon: ChefHat,
      stats: {
        "Problems solved": 95,
        Rank: "3-star",
        Rating: 1580,
        Contests: 18,
      },
      achievements: ["3-star coder", "Long challenge regular", "50+ problems"],
      description:
        "Long-format contests that built my appetite for careful, correct code.",
      link: "#",
    },
  ];

  const skills = [
    { icon: Dumbbell, title: "Problem solving", text: "Decomposing hard problems into solvable pieces." },
    { icon: Zap, title: "Algorithm design", text: "Choosing efficient structures and complexity bounds." },
    { icon: BarChart3, title: "Data structures", text: "Trees, graphs, heaps — and when each one matters." },
    { icon: Medal, title: "Consistency", text: "Daily practice habits that compound over time." },
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
      <PageHeader
        eyebrow="Coding profiles"
        title="Where I practise my craft"
        description="Competitive programming and data science platforms keep my fundamentals sharp between projects."
      />

      {/* Overview stats */}
      <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4">
        {[
          { icon: Code2, value: "650+", label: "Problems solved" },
          { icon: Globe, value: stats.platforms, label: "Platforms active" },
          { icon: Trophy, value: "40+", label: "Contests entered" },
          { icon: Medal, value: "15+", label: "Badges & certificates" },
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

      {/* Profiles grid */}
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {codingProfiles.map((profile, i) => (
          <motion.article
            key={profile.platform}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="card-interactive flex flex-col p-6"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="icon-tile">
                  <profile.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold tracking-tight">{profile.platform}</h3>
                  <p className="font-code text-xs text-muted-foreground">
                    @{profile.username}
                  </p>
                </div>
              </div>
              <a
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${profile.platform} profile`}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
              {profile.description}
            </p>

            <div className="mb-5 grid grid-cols-2 gap-2">
              {Object.entries(profile.stats).map(([key, value]) => (
                <div
                  key={key}
                  className="rounded-lg border border-border/60 bg-background/50 px-3 py-2.5"
                >
                  <div className="text-sm font-semibold tracking-tight">{value}</div>
                  <div className="text-[11px] text-muted-foreground">{key}</div>
                </div>
              ))}
            </div>

            <div className="mt-auto">
              <div className="mb-2 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                <Award className="h-3.5 w-3.5 text-primary" />
                Highlights
              </div>
              <div className="flex flex-wrap gap-1.5">
                {profile.achievements.map((achievement) => (
                  <Badge key={achievement} variant="outline" className="font-normal text-xs">
                    {achievement}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Skills built */}
      <motion.section
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-24"
      >
        <div className="mb-10 max-w-2xl space-y-3">
          <p className="eyebrow">Why it matters</p>
          <h2 className="text-3xl font-bold tracking-tight">
            What competitive coding taught me
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card-interactive p-6"
            >
              <div className="icon-tile mb-4">
                <skill.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 font-semibold tracking-tight">{skill.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {skill.text}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20 text-center"
      >
        <div className="card-surface mx-auto max-w-2xl p-10">
          <div className="icon-tile mx-auto mb-5">
            <Github className="h-5 w-5" />
          </div>
          <h2 className="mb-3 text-2xl font-bold tracking-tight">
            The code speaks for itself
          </h2>
          <p className="mb-8 text-muted-foreground">
            Most of my project work lives on GitHub — take a look at how I
            structure notebooks, pipelines and apps.
          </p>
          <a
            href="https://github.com/Logesh0247"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="gap-2">
              <ExternalLink className="h-4 w-4" />
              Visit my GitHub
            </Button>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Profiles;
