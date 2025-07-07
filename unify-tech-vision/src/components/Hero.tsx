import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main content */}
        <div className="space-y-8 animate-fade-in-up">
          {/* Greeting */}
          <div className="glass rounded-2xl p-8 mx-auto max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-bold mb-6">
              <span className="gradient-text">Obakeng</span>
              <br />
              <span className="text-foreground">Mdonyelwa</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Computer Science Student • Software Developer • Founder of CTMUnify
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <Button 
                variant="default" 
                size="lg"
                className="glass glow animate-pulse-glow font-semibold text-lg px-8 py-6"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="glass border-primary/30 hover:border-primary/60 font-semibold text-lg px-8 py-6"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </Button>
            </div>
          </div>
          
          {/* Floating cards with key info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <div className="glass rounded-xl p-6 animate-float" style={{ animationDelay: '0s' }}>
              <div className="text-3xl font-bold gradient-text mb-2">3rd Year</div>
              <div className="text-muted-foreground">Computer Science</div>
              <div className="text-sm text-muted-foreground">University of Limpopo</div>
            </div>
            
            <div className="glass rounded-xl p-6 animate-float" style={{ animationDelay: '2s' }}>
              <div className="text-3xl font-bold gradient-text mb-2">AI Focus</div>
              <div className="text-muted-foreground">Machine Learning</div>
              <div className="text-sm text-muted-foreground">Computer Vision & NLP</div>
            </div>
            
            <div className="glass rounded-xl p-6 animate-float" style={{ animationDelay: '4s' }}>
              <div className="text-3xl font-bold gradient-text mb-2">Founder</div>
              <div className="text-muted-foreground">CTMUnify</div>
              <div className="text-sm text-muted-foreground">Tech for Consciousness</div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;