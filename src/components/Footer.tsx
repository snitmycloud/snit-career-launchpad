
import { Facebook, Twitter, Linkedin, Instagram, Youtube, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/669f2c1a-ecb0-4989-a608-75bba9ae3e5b.png" 
                alt="SNIT Solutions Logo" 
                className="h-12 w-12"
              />
              <span className="text-xl font-bold">SNIT Solutions</span>
            </div>
            <p className="text-white/80 leading-relaxed">
              Premier IT training institute specializing in Networking, Cloud Computing, and Digital Marketing 
              with 100% placement support since 2015.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-white/80 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#courses" className="text-white/80 hover:text-white transition-colors">Courses</a></li>
              <li><a href="#testimonials" className="text-white/80 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Placement Support</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Career Guidance</a></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Courses</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">CCNA + MCSE</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Microsoft Azure</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">AWS DevOps</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Video Editing + AI</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">View All Courses</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-white/60 mt-0.5" />
                <div className="text-white/80 text-sm">
                  <div className="font-medium">Dilsukh Nagar</div>
                  <div>Near Kothapet Road, Hyderabad</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-white/60 mt-0.5" />
                <div className="text-white/80 text-sm">
                  <div className="font-medium">Ameerpet</div>
                  <div>SAP Street, Hyderabad</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-white/60" />
                <a href="tel:+919640005999" className="text-white/80 hover:text-white transition-colors">
                  +91 96400 05999
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-white/60" />
                <a href="mailto:info@snitsolutions.in" className="text-white/80 hover:text-white transition-colors">
                  info@snitsolutions.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © 2025 SNIT Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/60 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
