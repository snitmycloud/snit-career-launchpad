
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, ExternalLink, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Contact & <span className="text-primary">Locations</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visit our training centers in Hyderabad or get in touch with us for any inquiries
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Locations */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Locations</h3>
              
              {/* Dilsukh Nagar Branch */}
              <div className="bg-card rounded-xl p-6 shadow-lg border border-border">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-foreground mb-2">Dilsukh Nagar Branch</h4>
                    <p className="text-muted-foreground mb-3">
                      Near Kothapet Road, Hyderabad<br />
                      Telangana 500074
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      Mon - Sat: 9:00 AM - 8:00 PM
                    </div>
                  </div>
                </div>
              </div>

              {/* Ameerpet Branch */}
              <div className="bg-card rounded-xl p-6 shadow-lg border border-border">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-secondary/10 rounded-lg">
                    <MapPin className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-semibold text-foreground mb-2">Ameerpet Branch</h4>
                    <p className="text-muted-foreground mb-3">
                      SAP Street, Hyderabad<br />
                      Telangana 500056
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2" />
                      Mon - Sat: 9:00 AM - 8:00 PM
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Details */}
            <div className="bg-card rounded-xl p-6 shadow-lg border border-border">
              <h4 className="text-xl font-semibold text-foreground mb-6">Get In Touch</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <a href="tel:+919640005999" className="text-muted-foreground hover:text-primary transition-colors">
                      +91 96400 05999
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <a href="mailto:info@snitsolutions.in" className="text-muted-foreground hover:text-primary transition-colors">
                      info@snitsolutions.in
                    </a>
                  </div>
                </div>

                <div className="pt-4">
                  <Button asChild className="w-full">
                    <a href="https://www.snitsolutions.in/" target="_blank" rel="noopener noreferrer">
                      Visit Our Website
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card rounded-xl p-8 shadow-lg border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Course Interest</label>
                <select className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20">
                  <option value="">Select a course</option>
                  <option value="ccna-mcse">CCNA + MCSE</option>
                  <option value="azure">Microsoft Azure</option>
                  <option value="aws-devops">AWS DevOps</option>
                  <option value="digital-marketing">Digital Marketing (AI-Powered)</option>
                  <option value="video-editing">Video Editing + AI Marketing</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Tell us about your goals and any questions you have"
                ></textarea>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
