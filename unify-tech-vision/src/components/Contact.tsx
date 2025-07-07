import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "OBAKENGBUCKSWABABTWANA",
      link: "https://github.com/OBAKENGBUCKSWABABTWANA",
      color: "hover:text-purple-400"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "obakeng-mdonyelwa",
      link: "https://www.linkedin.com/in/obakeng-mdonyelwa-0bb96a235",
      color: "hover:text-blue-400"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "obakeng@ctmunify.dev",
      link: "mailto:obakeng@ctmunify.dev",
      color: "hover:text-green-400"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-t from-secondary/20 to-transparent">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
          <span className="gradient-text">Let's Connect</span>
        </h2>
        
        {/* Main contact card */}
        <div className="glass rounded-3xl p-12 text-center mb-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-4">Ready to Collaborate?</h3>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                I'm always excited to work on innovative projects, discuss new opportunities, 
                or connect with fellow developers and visionaries. Let's build something amazing together!
              </p>
            </div>
            
            {/* Contact methods */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactMethods.map((method, index) => (
                <a
                  key={method.label}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                  style={{ 
                    animationDelay: `${index * 0.2}s`,
                    animation: 'fade-in-up 0.8s ease-out forwards'
                  }}
                >
                  <div className="glass rounded-xl p-6 hover:shadow-glow transition-all duration-300 group-hover:scale-105">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-primary mb-4 group-hover:shadow-glow transition-all duration-300`}>
                      <div className="text-primary-foreground">{method.icon}</div>
                    </div>
                    <h4 className="font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {method.label}
                    </h4>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300 break-all">
                      {method.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
            
            {/* Call to action */}
            <div className="pt-8">
              <Button 
                size="lg"
                className="glass glow animate-pulse-glow font-semibold text-lg px-12 py-6"
                onClick={() => window.open("mailto:obakeng@ctmunify.dev", "_blank")}
              >
                Start a Conversation
              </Button>
            </div>
          </div>
        </div>
        
        {/* Vision statement */}
        <div className="glass rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 gradient-text">My Mission</h3>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            "To build solutions beyond ego, war, and fear—technology that spiritually and intellectually uplifts people, 
            unifying technology with consciousness for a better tomorrow."
          </p>
          <div className="mt-6 flex justify-center">
            <div className="px-4 py-2 bg-gradient-primary rounded-full">
              <span className="text-primary-foreground font-medium">CTMUnify Founder</span>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-border/30">
          <p className="text-muted-foreground">
            Built with ❤️ and cutting-edge technology • Limpopo, South Africa
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;