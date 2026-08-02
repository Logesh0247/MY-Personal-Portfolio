import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import ParticleBackground from "@/components/ParticleBackground";
import { Download, Mail, Phone, MapPin, Calendar, Award, Briefcase } from "lucide-react";

const Resume = () => {
  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <Navigation />
      
      <div className="pt-24 px-4 pb-20">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Resume
            </h1>
            <p className="text-xl text-muted-foreground">
              Download my complete professional profile
            </p>
            <Button className="btn-glow px-8 py-3">
              <Download className="w-5 h-5 mr-2" />
              Download PDF
            </Button>
          </motion.div>

          {/* Resume Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="glass-card p-8 md:p-12">
              {/* Personal Info */}
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold mb-2">LOGESH S</h1>
                <h2 className="text-xl text-primary mb-6">BSc Data Science Graduate | Aspiring Data Scientist</h2>
                
                <div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    <span>8870989882</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    <span>logeshds247@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Hosur,Tamil Nadu</span>
                  </div>
                </div>
              </div>

              {/* Professional Summary */}
              <section className="mb-12">
                <h3 className="text-2xl font-bold text-primary mb-4 flex items-center gap-2">
                  <Briefcase className="w-6 h-6" />
                  Professional Summary
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Passionate Data Science graduate with strong analytical skills and hands-on experience in 
                  machine learning, data visualization, and statistical analysis. Proficient in Python, SQL, 
                  Power BI, and Tableau. Seeking to leverage technical expertise and problem-solving abilities 
                  to drive data-driven decision making and create meaningful business impact as a Data Scientist.
                </p>
              </section>

              {/* Education */}
              <section className="mb-12">
                <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
                  <Award className="w-6 h-6" />
                  Education
                </h3>
                
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-semibold">Bachelor of Science in Data Science</h4>
                      <div className="flex items-center gap-1 text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>2021 - 2024</span>
                      </div>
                    </div>
                    <p className="text-primary font-medium mb-2">[University Name] - Tamil Nadu, India</p>
                    <ul className="text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Coursework: Machine Learning, Statistics, Data Mining, Database Systems</li>
                      <li>Relevant Projects: Customer Churn Prediction, Sales Analytics Dashboard</li>
                      <li>Strong foundation in mathematics, statistics, and programming</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Technical Skills */}
              <section className="mb-12">
                <h3 className="text-2xl font-bold text-primary mb-6">Technical Skills</h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4 text-lg">Programming & Analysis</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• <strong>Python:</strong> Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn</li>
                      <li>• <strong>SQL:</strong> MySQL, PostgreSQL, Query Optimization</li>
                      <li>• <strong>R:</strong> Statistical Analysis, ggplot2</li>
                      <li>• <strong>Statistics:</strong> Hypothesis Testing, Regression Analysis</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-4 text-lg">Data Visualization & Tools</h4>
                    <ul className="space-y-2 text-muted-foreground">
                      <li>• <strong>Power BI:</strong> DAX, Interactive Dashboards</li>
                      <li>• <strong>Tableau:</strong> Advanced Visualizations, Storytelling</li>
                      <li>• <strong>Excel:</strong> Pivot Tables, Advanced Formulas</li>
                      <li>• <strong>Web Dev:</strong> React, Node.js, HTML/CSS, JavaScript</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Key Projects */}
              <section className="mb-12">
                <h3 className="text-2xl font-bold text-primary mb-6">Key Projects</h3>
                
                <div className="space-y-6">
                  {[
                    {
                      title: "Customer Churn Prediction Model",
                      description: "Developed machine learning model using Python and scikit-learn to predict customer churn with 94% accuracy. Implemented feature engineering and ensemble methods.",
                      technologies: "Python, Scikit-learn, Pandas, Power BI"
                    },
                    {
                      title: "Sales Analytics Dashboard",
                      description: "Created comprehensive Power BI dashboard with real-time data connections, KPI tracking, and predictive forecasting for business decision-making.",
                      technologies: "Power BI, SQL Server, DAX, Excel"
                    },
                    {
                      title: "E-commerce Data Pipeline",
                      description: "Built automated ETL pipeline for e-commerce analytics using Python and MySQL, with Tableau visualizations for actionable insights.",
                      technologies: "Python, MySQL, Tableau, Apache Airflow"
                    }
                  ].map((project, index) => (
                    <div key={index} className="border-l-4 border-primary pl-6">
                      <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                      <p className="text-muted-foreground mb-2">{project.description}</p>
                      <p className="text-primary font-medium text-sm">
                        <strong>Technologies:</strong> {project.technologies}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Certifications */}
              <section className="mb-12">
                <h3 className="text-2xl font-bold text-primary mb-6">Certifications & Learning</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    "Data Science Specialization - Coursera",
                    "Machine Learning A-Z - Udemy", 
                    "Advanced SQL - HackerRank",
                    "Python for Data Science - Kaggle",
                    "Power BI Data Analytics - Microsoft",
                    "Statistical Analysis with R - DataCamp"
                  ].map((cert, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{cert}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Career Objective */}
              <section>
                <h3 className="text-2xl font-bold text-primary mb-4">Career Objective</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To secure a challenging position as a Data Scientist where I can utilize my analytical skills, 
                  technical expertise, and passion for data-driven insights to solve complex business problems 
                  and contribute to organizational growth. I am eager to apply machine learning techniques, 
                  statistical analysis, and data visualization skills in a collaborative environment that 
                  values innovation and continuous learning.
                </p>
              </section>
            </Card>
          </motion.div>

          {/* Download CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Card className="glass-card p-8">
              <h3 className="text-xl font-semibold mb-4">Ready to Connect?</h3>
              <p className="text-muted-foreground mb-6">
                Download my complete resume or get in touch to discuss opportunities
              </p>
              <div className="flex gap-4 justify-center">
                <Button className="btn-glow">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume (PDF)
                </Button>
                <Button variant="outline" className="glass-card border-primary/30">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Me
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Resume;