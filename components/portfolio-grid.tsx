'use client';

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

const projectsData = [
  {
    id: 1,
    category: "IA & SaaS",
    color: "from-purple-500 to-pink-500",
    link: "https://baco.cat",
  },
  {
    id: 2,
    category: "Web Development",
    color: "from-blue-500 to-cyan-500",
    link: "https://ineditrestaurant.com",
  },
  {
    id: 3,
    category: "Web Development",
    color: "from-green-500 to-emerald-500",
    link: "https://tempspervi.com",
  },
  {
    id: 4,
    category: "Full Stack & DevOps",
    color: "from-orange-500 to-red-500",
  },
  {
    id: 5,
    category: "IoT & R+D",
    color: "from-indigo-500 to-purple-500",
  },
  {
    id: 6,
    category: "Data Analytics",
    color: "from-teal-500 to-blue-500",
  },
];

export function PortfolioGrid() {
  const { t } = useLanguage();
  
  const projects = projectsData.map((project, index) => ({
    ...project,
    title: t.portfolio.projects[index].title,
    description: t.portfolio.projects[index].description,
  }));
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {t.portfolio.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.portfolio.subtitle}
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-xl"
            >
              {/* Card Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              {/* Card Content */}
              <div className="relative p-6 border border-border rounded-xl hover:border-primary/50 transition-colors duration-300 h-full flex flex-col glass">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-medium rounded-full">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Hover Button */}
                {project.link ? (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    {t.portfolio.viewProject}
                    <ExternalLink size={16} />
                  </motion.a>
                ) : (
                  <motion.div
                    className="flex items-center gap-2 text-muted-foreground text-sm"
                  >
                    {t.portfolio.confidential}
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
