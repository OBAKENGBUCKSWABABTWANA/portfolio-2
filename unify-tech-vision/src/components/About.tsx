const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
          <span className="gradient-text">About Me</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-6">
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Who I Am</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I'm a passionate third-year Computer Science student at the University of Limpopo, originally from Klerksdorp, North West, now based in Limpopo, South Africa.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                As the founder of CTMUnify, I'm driven by a vision to unify technology and consciousness, inspired by the Cognitive-Theoretic Model of the Universe (CTMU). I believe in building solutions that go beyond ego, war, and fear—technology that spiritually and intellectually uplifts people.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My love language is words of affirmation, and I'm passionate about empowering young developers through practical coding initiatives and certifications.
              </p>
            </div>
          </div>
          
          {/* Stats and highlights */}
          <div className="space-y-6">
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-text">What Drives Me</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div>
                    <div className="font-semibold">Innovation</div>
                    <div className="text-sm text-muted-foreground">Building AI-powered solutions for real-world problems</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-2xl">🧠</span>
                  </div>
                  <div>
                    <div className="font-semibold">Problem Solving</div>
                    <div className="text-sm text-muted-foreground">Tackling challenges with creative technical solutions</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-2xl">🌟</span>
                  </div>
                  <div>
                    <div className="font-semibold">Empowerment</div>
                    <div className="text-sm text-muted-foreground">Helping others through technology and mentorship</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                    <span className="text-2xl">🔮</span>
                  </div>
                  <div>
                    <div className="font-semibold">Consciousness</div>
                    <div className="text-sm text-muted-foreground">Bridging technology with deeper understanding</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Location info */}
            <div className="glass rounded-xl p-6">
              <h4 className="font-bold mb-3 gradient-text">Based In</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Current:</span>
                  <span>Limpopo, South Africa</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">From:</span>
                  <span>Klerksdorp, North West</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;