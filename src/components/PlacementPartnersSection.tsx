
const PlacementPartnersSection = () => {
  const partners = [
    {
      name: "Space Inventive",
      logo: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Technology Solutions"
    },
    {
      name: "TechWave",
      logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Software Development"
    },
    {
      name: "Yellow Block",
      logo: "https://images.unsplash.com/photo-1573164713619-24c711fe7878?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Digital Marketing"
    },
    {
      name: "CloudTech Solutions",
      logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Cloud Services"
    },
    {
      name: "DataFlow Systems",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Data Analytics"
    },
    {
      name: "Network Dynamics",
      logo: "https://images.unsplash.com/photo-1560472355-536de3962603?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Networking"
    },
    {
      name: "AI Innovations",
      logo: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Artificial Intelligence"
    },
    {
      name: "SecureNet Corp",
      logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      category: "Cybersecurity"
    }
  ];

  return (
    <section className="py-20 bg-foreground text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Our <span className="text-secondary">Hiring Partners</span>
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            We've partnered with leading companies to ensure our students get placed in top organizations
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {partners.map((partner, index) => (
            <div key={index} className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
                <div className="aspect-square bg-white rounded-lg p-4 mb-4 overflow-hidden">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="w-full h-full object-cover rounded-md group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold text-white mb-1 text-center">{partner.name}</h3>
                <p className="text-xs text-white/60 text-center">{partner.category}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <h3 className="text-2xl font-bold text-center mb-8">Partnership Benefits</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h4 className="font-semibold mb-2">Direct Recruitment</h4>
              <p className="text-white/80 text-sm">Companies recruit directly from our training programs</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h4 className="font-semibold mb-2">Industry Projects</h4>
              <p className="text-white/80 text-sm">Work on real projects from our partner companies</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h4 className="font-semibold mb-2">Career Guidance</h4>
              <p className="text-white/80 text-sm">Get mentored by industry professionals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementPartnersSection;
