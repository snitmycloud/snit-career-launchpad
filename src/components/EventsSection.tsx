
import { Calendar, Clock, Users, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const EventsSection = () => {
  const events = [
    {
      title: "Azure PowerShell Tutorial",
      description: "Learn scripting in Azure - Master automation and cloud management",
      date: "June 20, 2025",
      time: "2:00 PM - 4:00 PM IST",
      type: "Workshop",
      attendees: "25+ registered",
      status: "upcoming",
      highlights: ["Hands-on scripting", "Real-world scenarios", "Q&A session", "Certificate of participation"]
    },
    {
      title: "Free PowerShell Demo Session",
      description: "Join live demonstration of PowerShell basics and advanced features",
      date: "May 24, 2025",
      time: "11:00 AM - 12:00 PM IST",
      type: "Demo",
      attendees: "50+ registered",
      status: "upcoming",
      highlights: ["Interactive demo", "Live coding", "Career guidance", "Free resources"]
    },
    {
      title: "AWS Career Opportunities Webinar",
      description: "Explore career paths in AWS and cloud computing",
      date: "June 15, 2025",
      time: "3:00 PM - 4:30 PM IST",
      type: "Webinar",
      attendees: "100+ expected",
      status: "upcoming",
      highlights: ["Industry insights", "Salary trends", "Certification roadmap", "Job market analysis"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Upcoming <span className="text-primary">Events & Webinars</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our free workshops, demos, and webinars to enhance your skills and stay updated with industry trends
          </p>
        </div>

        <div className="space-y-8">
          {events.map((event, index) => (
            <div key={index} className="bg-card rounded-xl shadow-lg border border-border overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="p-6 md:p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  {/* Event Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {event.type}
                      </span>
                      <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium">
                        {event.status === 'upcoming' ? 'Upcoming' : 'Past'}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-2">{event.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{event.description}</p>
                    
                    {/* Event Details */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2 text-primary" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-2 text-primary" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="h-4 w-4 mr-2 text-primary" />
                        {event.attendees}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {event.highlights.map((highlight, highlightIndex) => (
                        <span key={highlightIndex} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col gap-3 lg:flex-shrink-0">
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      Register Now
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground">
                      Add to Calendar
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-xl p-8 text-center border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-4">Stay Updated</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Subscribe to our newsletter to get notified about upcoming events and exclusive content
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
