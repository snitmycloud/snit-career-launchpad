
import { CheckCircle, Users, Award, Clock, Target } from "lucide-react";

const AboutSection = () => {
  const features = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Hands-on Training with Real-Time Projects",
      description: "Learn by doing with live industry projects"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Lifetime Access to Training Materials",
      description: "Continuous learning with updated content"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Resume Building & Interview Preparation",
      description: "Complete career support package"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Strong Industry Placement Support",
      description: "Direct connections with hiring partners"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-snit-light-teal to-snit-light-orange p-1">
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="SNIT Solutions Training Environment" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 border border-border">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">2015</div>
                <div className="text-sm text-muted-foreground">Established</div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                About <span className="text-primary">SNIT Solutions</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Established in 2015, SNIT Solutions is a premier IT training institute based in Hyderabad.
                We specialize in Networking, Cloud Computing, and Digital Marketing, focusing on industry-ready skills.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our mission is to bridge the gap between academic learning and industry requirements, 
                ensuring every student is job-ready upon completion of their training.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg text-primary">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-1">500+</div>
                <div className="text-sm text-muted-foreground">Successfully Trained</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary mb-1">95%</div>
                <div className="text-sm text-muted-foreground">Placement Success</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
