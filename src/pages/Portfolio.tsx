import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import ParticleBackground from "@/components/ParticleBackground";
import ThreeScene from "@/components/ThreeScene";
import { ArrowRight, Download, Mail, Phone, MapPin, Linkedin, Github, Instagram, Youtube, Twitter } from "lucide-react";

const Portfolio = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <ParticleBackground />
      <Navigation />
      
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-primary font-semibold text-lg tracking-wide"
              >
                Hi, I'm
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-5xl md:text-7xl font-bold font-heading bg-gradient-primary bg-clip-text text-transparent"
              >
                LOGESH S
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="space-y-2"
              >
                <p className="text-xl md:text-2xl text-muted-foreground">
                  BSc Data Science Graduate
                </p>
                <p className="text-lg text-primary-dim typing">
                  Aspiring Data Scientist
                </p>
              </motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
                className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
              >
                Passionate about transforming raw data into meaningful insights. 
                Skilled in SQL, Python, Power BI, and Tableau. Ready to drive 
                data-driven decision making in dynamic organizations.
              </motion.p>
            </div>
            
            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact">
                <Button className="btn-glow px-8 py-3 text-lg">
                  Hire Me
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              
              <Link to="/projects">
                <Button variant="outline" className="px-8 py-3 text-lg glass-card border-primary/30 hover:border-primary">
                  View Projects
                </Button>
              </Link>
              
              <Link to="/resume">
                <Button variant="secondary" className="px-6 py-3">
                  <Download className="mr-2 w-4 h-4" />
                  Resume
                </Button>
              </Link>
            </motion.div>
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              className="flex flex-wrap gap-6 text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>8870989882</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm">logeshds247@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Hosur,Tamil Nadu</span>
              </div>
            </motion.div>
          </motion.div>
          
          {/* 3D Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-[600px] relative"
          >
            <ThreeScene className="w-full h-full" />
            <div className="absolute inset-0 bg-gradient-glow opacity-50 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </section>
      
      {/* Quick Stats */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="py-20 px-4"
      >
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: "Skills Mastered", value: "5+", icon: "🎯" },
              { label: "Projects Built", value: "10+", icon: "🚀" },
              { label: "Years Learning", value: "3+", icon: "📚" },
              { label: "Ready to Code", value: "24/7", icon: "💻" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="glass-card p-6 text-center hover:shadow-glow transition-all duration-300">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {stat.label}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* Social Links */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-12 px-4"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-8 text-primary">Connect With Me</h3>
          <div className="flex justify-center gap-4 flex-wrap">
            {[
              { icon: Linkedin, label: "LinkedIn", href: "#", color: "#0077B5" },
              { icon: Github, label: "GitHub", href: "#", color: "#333" },
              { icon: Instagram, label: "Instagram", href: "#", color: "#E4405F" },
              { icon: Youtube, label: "YouTube", href: "#", color: "#FF0000" },
              { icon: Twitter, label: "Twitter", href: "#", color: "#1DA1F2" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="glass-card p-4 rounded-full hover:shadow-glow transition-all duration-300"
                style={{ "--tw-shadow-color": social.color } as any}
              >
                <social.icon className="w-6 h-6" style={{ color: social.color }} />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Portfolio;