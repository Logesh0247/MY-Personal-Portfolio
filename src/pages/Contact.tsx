import { motion } from "framer-motion";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import Navigation from "@/components/Navigation";
import ParticleBackground from "@/components/ParticleBackground";
import { Mail, Phone, MapPin, Send, MessageCircle, Linkedin, Github, Instagram, Youtube, Twitter } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent! 🚀",
      description: "Thank you for reaching out! I'll get back to you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "8870989882",
      href: "tel:+918870989882",
      color: "text-green-500"
    },
    {
      icon: Mail,
      label: "Email",
      value: "logeshds247@gmail.com",
      href: "mailto:logeshds247@gmail.com",
      color: "text-blue-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hosur,Tamil Nadu",
      href: "#",
      color: "text-red-500"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "#",
      color: "#0077B5",
      username: "logesh-s-data"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "#",
      color: "#333",
      username: "logesh-s"
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "#",
      color: "#E4405F",
      username: "logesh_data"
    },
    {
      icon: Youtube,
      label: "YouTube",
      href: "#",
      color: "#FF0000",
      username: "LogeshDataScience"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "#",
      color: "#1DA1F2",
      username: "logesh_ds"
    }
  ];

  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <Navigation />
      
      <div className="pt-24 px-4 pb-20">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4"
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to discuss data science opportunities, collaborations, or just want to say hello? 
              I'd love to hear from you!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <Card className="glass-card p-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 text-primary" />
                  Contact Information
                </h2>
                
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.href}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-card-hover transition-colors group"
                    >
                      <div className={`w-10 h-10 bg-card rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <info.icon className={`w-5 h-5 ${info.color}`} />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{info.label}</div>
                        <div className="font-medium">{info.value}</div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </Card>

              {/* Social Media */}
              <Card className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-4">Connect on Social Media</h3>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-card-hover transition-colors group"
                    >
                      <social.icon 
                        className="w-5 h-5 group-hover:scale-110 transition-transform" 
                        style={{ color: social.color }}
                      />
                      <div>
                        <span className="font-medium">{social.label}</span>
                        <span className="text-muted-foreground text-sm ml-2">@{social.username}</span>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </Card>

              {/* Availability */}
              <Card className="glass-card p-6">
                <h3 className="text-xl font-semibold mb-4">Availability</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Response Time:</span>
                    <span className="text-primary font-medium">Within 24 hours</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Best Time to Reach:</span>
                    <span>9 AM - 6 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Preferred Contact:</span>
                    <span>Email or LinkedIn</span>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2"
            >
              <Card className="glass-card p-8">
                <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="glass-card border-primary/30 focus:border-primary"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="glass-card border-primary/30 focus:border-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="glass-card border-primary/30 focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project, idea, or just say hello..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="glass-card border-primary/30 focus:border-primary resize-none"
                    />
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button type="submit" className="w-full btn-glow py-3 text-lg">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </Card>
            </motion.div>
          </div>

          {/* Quick Contact Options */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-8 text-center">Quick Contact Options</h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-6 rounded-lg border border-primary/20 hover:border-primary/40 transition-colors cursor-pointer"
                  onClick={() => window.open("mailto:logeshds247@gmail.com")}
                >
                  <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Email Me</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    For detailed discussions and formal inquiries
                  </p>
                  <Button className="btn-glow w-full">
                    Send Email
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-6 rounded-lg border border-primary/20 hover:border-primary/40 transition-colors cursor-pointer"
                  onClick={() => window.open("tel:+918870989882")}
                >
                  <Phone className="w-12 h-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Call Me</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    For urgent matters and direct communication
                  </p>
                  <Button variant="outline" className="w-full glass-card border-green-500/30">
                    Call Now
                  </Button>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-6 rounded-lg border border-primary/20 hover:border-primary/40 transition-colors cursor-pointer"
                  onClick={() => window.open("#")}
                >
                  <Linkedin className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Professional networking and opportunities
                  </p>
                  <Button variant="outline" className="w-full glass-card border-blue-500/30">
                    Connect
                  </Button>
                </motion.div>
              </div>
            </Card>
          </motion.section>

          {/* FAQ */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    question: "What types of projects do you work on?",
                    answer: "I work on data science projects including predictive modeling, data visualization dashboards, ETL pipelines, and full-stack web applications."
                  },
                  {
                    question: "Are you available for freelance work?",
                    answer: "Yes! I'm open to freelance data science projects, consulting, and short-term contracts. Feel free to discuss your requirements."
                  },
                  {
                    question: "What's your preferred tech stack?",
                    answer: "Python, SQL, Power BI, Tableau for data science. React, Node.js for web development. Always open to learning new technologies."
                  },
                  {
                    question: "Do you provide mentoring or tutoring?",
                    answer: "Absolutely! I enjoy helping aspiring data scientists with learning paths, project guidance, and career advice."
                  }
                ].map((faq, index) => (
                  <div key={index} className="space-y-3">
                    <h3 className="font-semibold text-primary">{faq.question}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.section>
        </div>
      </div>
    </div>
  );
};

export default Contact;