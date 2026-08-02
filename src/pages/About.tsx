import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import ParticleBackground from "@/components/ParticleBackground";
import { GraduationCap, Target, Heart, Code2 } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <Navigation />
      
      <div className="pt-24 px-4 pb-20">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Get to know the person behind the data
            </p>
          </motion.div>
          
          {/* Bio Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="glass-card p-8 md:p-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-semibold">My Story</h2>
                </div>
                
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    I'm <span className="text-primary font-semibold">LOGESH S</span>, 
                    a passionate data science graduate from Hosur,Tamil Nadu. 
                    My journey into the world of data began during my BSc Data Science program, 
                    where I discovered the incredible power of turning raw information into actionable insights.
                  </p>
                  
                  <p>
                    What drives me is the fascinating intersection of mathematics, statistics, 
                    and technology. Every dataset tells a story, and I love being the translator 
                    who helps businesses understand what their data is trying to say.
                  </p>
                  
                  <p>
                    When I'm not analyzing datasets or building predictive models, 
                    you'll find me exploring new visualization techniques, contributing to open-source projects, 
                    or writing about the latest trends in data science and machine learning.
                  </p>
                </div>
              </div>
            </Card>
          </motion.section>
          
          {/* Goals & Values */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="glass-card p-6 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-secondary rounded-full flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">Career Goals</h3>
                </div>
                
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    My primary goal is to become a <span className="text-primary font-semibold">Data Scientist</span> 
                    where I can make meaningful impact through data-driven solutions.
                  </p>
                  
                  <ul className="space-y-2 list-none">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Build predictive models that solve real-world problems
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Lead data science teams in innovative projects
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Contribute to the data science community
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      Mentor the next generation of data scientists
                    </li>
                  </ul>
                </div>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="glass-card p-6 h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
                    <Code2 className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">What I Value</h3>
                </div>
                
                <div className="space-y-4 text-muted-foreground">
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-primary font-medium mb-1">Continuous Learning</h4>
                      <p className="text-sm">Technology evolves rapidly, and so should we.</p>
                    </div>
                    
                    <div>
                      <h4 className="text-primary font-medium mb-1">Ethical Data Use</h4>
                      <p className="text-sm">Data science should benefit humanity responsibly.</p>
                    </div>
                    
                    <div>
                      <h4 className="text-primary font-medium mb-1">Collaboration</h4>
                      <p className="text-sm">Best solutions come from diverse perspectives.</p>
                    </div>
                    
                    <div>
                      <h4 className="text-primary font-medium mb-1">Impact Focus</h4>
                      <p className="text-sm">Every analysis should drive meaningful action.</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
          
          {/* Timeline */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">My Journey</h2>
              <p className="text-muted-foreground">From student to aspiring data scientist</p>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  year: "2024",
                  title: "BSc Data Science Graduate",
                  description: "Completed my degree with focus on machine learning, statistics, and data visualization.",
                  icon: GraduationCap
                },
                {
                  year: "2023",
                  title: "Advanced Skills Development",
                  description: "Mastered SQL, Python, Power BI, and Tableau through hands-on projects.",
                  icon: Code2
                },
                {
                  year: "2022",
                  title: "First Data Projects",
                  description: "Built my first predictive models and data visualization dashboards.",
                  icon: Target
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="flex items-center gap-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  <Card className="glass-card p-6 flex-1">
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-primary font-bold text-lg">{item.year}</span>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default About;