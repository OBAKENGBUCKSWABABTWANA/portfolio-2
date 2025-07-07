const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "JavaScript", "HTML/CSS", "SQL"],
      icon: "💻"
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Django", "React Native", "Node.js", "Dash (Plotly)", "TailwindCSS"],
      icon: "⚡"
    },
    {
      title: "Tools & Platforms",
      skills: ["GitHub", "Cisco Packet Tracer", "VSCode", "Figma"],
      icon: "🛠️"
    },
    {
      title: "Concepts & Specialties",
      skills: ["Machine Learning", "Computer Vision", "Natural Language Processing", "Network Security", "Data Visualization"],
      icon: "🧠"
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-b from-transparent to-secondary/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
          <span className="gradient-text">Skills & Technologies</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title} 
              className="glass rounded-2xl p-8 hover:shadow-glow transition-all duration-300"
              style={{ 
                animationDelay: `${categoryIndex * 0.2}s`,
                animation: 'fade-in-up 0.8s ease-out forwards'
              }}
            >
              <div className="flex items-center mb-6">
                <div className="text-4xl mr-4">{category.icon}</div>
                <h3 className="text-2xl font-bold gradient-text">{category.title}</h3>
              </div>
              
              <div className="grid grid-cols-1 gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skill}
                    className="group relative"
                  >
                    <div className="glass rounded-lg p-4 hover:border-primary/50 transition-all duration-300 group-hover:shadow-soft">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{skill}</span>
                        <div className="w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      
                      {/* Animated progress bar on hover */}
                      <div className="mt-2 h-1 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-primary rounded-full w-0 group-hover:w-full transition-all duration-1000 ease-out"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional focus areas */}
        <div className="mt-16 text-center">
          <div className="glass rounded-2xl p-8 mx-auto max-w-4xl">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Areas of Focus</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <div className="text-4xl mb-2">🤖</div>
                <h4 className="font-semibold">AI Development</h4>
                <p className="text-sm text-muted-foreground">Building intelligent systems for real-world impact</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl mb-2">📱</div>
                <h4 className="font-semibold">Mobile Apps</h4>
                <p className="text-sm text-muted-foreground">Cross-platform solutions with React Native</p>
              </div>
              <div className="space-y-2">
                <div className="text-4xl mb-2">🌐</div>
                <h4 className="font-semibold">Web Development</h4>
                <p className="text-sm text-muted-foreground">Modern, responsive web applications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;