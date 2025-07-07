import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "LifeLens App",
      description: "AI-powered mobile assistant for the visually impaired using computer vision and natural language processing to help users navigate their environment.",
      technologies: ["React Native", "Computer Vision", "NLP", "AI"],
      category: "AI/Mobile",
      icon: "👁️",
      color: "from-purple-500 to-blue-500"
    },
    {
      title: "Varsity Plug",
      description: "E-commerce platform specifically designed for students at University of Limpopo, connecting student sellers and buyers in a trusted marketplace.",
      technologies: ["Django", "Python", "JavaScript", "SQL"],
      category: "E-commerce",
      icon: "🛒",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Electricity Monitor App",
      description: "Smart home switch monitoring system that tracks electricity usage and provides insights for energy efficiency and cost savings.",
      technologies: ["Python", "IoT", "Data Visualization", "Dashboard"],
      category: "IoT/Smart Home",
      icon: "⚡",
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "AdventureWorks Dashboard",
      description: "Business intelligence dashboard built with Plotly Dash, providing comprehensive data visualization and analytics for business insights.",
      technologies: ["Python", "Plotly Dash", "Data Analysis", "BI"],
      category: "Data Visualization",
      icon: "📊",
      color: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
          <span className="gradient-text">Featured Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="group glass rounded-2xl p-8 hover:shadow-glow transition-all duration-500 overflow-hidden relative"
              style={{ 
                animationDelay: `${index * 0.2}s`,
                animation: 'fade-in-up 0.8s ease-out forwards'
              }}
            >
              {/* Background gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                {/* Project header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-4xl">{project.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <span className="text-sm text-muted-foreground font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Project description */}
                <p className="text-muted-foreground leading-relaxed mb-6 group-hover:text-foreground/80 transition-colors duration-300">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="mb-8">
                  <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 bg-secondary/50 rounded-full text-sm font-medium border border-border/50 group-hover:border-primary/30 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Action buttons */}
                <div className="flex space-x-4">
                  <Button 
                    variant="default" 
                    className="glass glow opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                  >
                    View Details
                  </Button>
                  <Button 
                    variant="outline" 
                    className="glass border-primary/30 hover:border-primary/60 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0"
                    style={{ transitionDelay: '50ms' }}
                  >
                    Live Demo
                  </Button>
                </div>
              </div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-2xl transition-all duration-500"></div>
            </div>
          ))}
        </div>
        
        {/* Experience highlight */}
        <div className="mt-20">
          <div className="glass rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Project Experience</h3>
            <p className="text-lg text-muted-foreground mb-6 max-w-3xl mx-auto">
              I've worked on numerous successful project teams in various roles including Engineer and Project Manager. 
              Each project represents a commitment to usability, innovation, and real-world impact.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="space-y-2">
                <div className="text-3xl font-bold gradient-text">10+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold gradient-text">5+</div>
                <div className="text-muted-foreground">Technologies Mastered</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold gradient-text">3</div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;