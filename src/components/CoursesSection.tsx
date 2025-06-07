
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Users, Star } from "lucide-react";

const CoursesSection = () => {
  const courses = [
    {
      title: "CCNA + MCSE",
      description: "Networking & Systems Admin with real-time practice.",
      nextBatch: "3rd June 2025",
      duration: "3-4 months",
      students: "25+ enrolled",
      rating: 4.8,
      features: ["Hands-on Labs", "Live Projects", "Industry Certification", "Job Assistance"]
    },
    {
      title: "Microsoft Azure",
      description: "Deploy & manage Azure resources securely.",
      nextBatch: "9th June 2025",
      duration: "2-3 months",
      students: "30+ enrolled",
      rating: 4.9,
      features: ["Azure Portal", "PowerShell", "Real Deployments", "Exam Prep"]
    },
    {
      title: "AWS DevOps",
      description: "CI/CD pipelines and automation on AWS.",
      nextBatch: "TBA",
      duration: "3 months",
      students: "20+ enrolled",
      rating: 4.7,
      features: ["Jenkins", "Docker", "Kubernetes", "AWS Services"]
    },
    {
      title: "Digital Marketing (AI-Powered)",
      description: "SEO, PPC, SMM, with ChatGPT & Gemini tools.",
      nextBatch: "3rd June 2025",
      duration: "2 months",
      students: "40+ enrolled",
      rating: 4.8,
      features: ["AI Tools", "SEO Mastery", "Social Media", "Analytics"]
    },
    {
      title: "Video Editing + AI Marketing",
      description: "Video content creation + AI tools for promotions.",
      nextBatch: "TBA",
      duration: "1.5 months",
      students: "15+ enrolled",
      rating: 4.6,
      features: ["Adobe Suite", "AI Enhancement", "Content Strategy", "Portfolio"]
    }
  ];

  return (
    <section id="courses" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Popular Courses</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Industry-focused training programs designed to make you job-ready with hands-on experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="bg-card rounded-xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 overflow-hidden group">
              {/* Course Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium text-foreground">{course.rating}</span>
                  </div>
                  <div className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                    Popular
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {course.description}
                </p>
              </div>

              {/* Course Details */}
              <div className="px-6 pb-4 space-y-3">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-2 text-primary" />
                  Next Batch: <span className="font-medium ml-1">{course.nextBatch}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-2 text-primary" />
                  Duration: <span className="font-medium ml-1">{course.duration}</span>
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="h-4 w-4 mr-2 text-primary" />
                  <span className="font-medium">{course.students}</span>
                </div>
              </div>

              {/* Course Features */}
              <div className="px-6 pb-6">
                <div className="space-y-2 mb-6">
                  {course.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  disabled={course.nextBatch === "TBA"}
                >
                  {course.nextBatch === "TBA" ? "Coming Soon" : "Enroll Now"}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Can't find the right course? We offer customized training programs.
          </p>
          <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            Contact for Custom Training
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
