
import { GithubIcon, LinkedinIcon, Mail, Code, Instagram } from "lucide-react";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

const Index = () => {
  const [isHovered, setIsHovered] = useState<number | null>(null);

  const skills = [
    { name: "Frontend Development", icon: <Code className="w-6 h-6" />, description: "React, TypeScript, Tailwind CSS" },
    { name: "Backend Development", icon: <Code className="w-6 h-6" />, description: "Node.js, Express, PostgreSQL" },
    { name: "UI/UX Design", icon: <Code className="w-6 h-6" />, description: "Figma, Adobe XD" },
  ];

  const certifications = [
    {
      title: "Power BI Job Simulation",
      organization: "PWC",
      description: "Completed practical tasks in Call Centre Trends, Customer Retention, and Diversity & Inclusion",
      date: "October 2024",
      image: "/lovable-uploads/e5308916-8d99-40ef-b9c1-37209b245d46.png"
    },
    {
      title: "Grow Offline Sales Certification",
      organization: "Google",
      description: "Successfully completed and certified in Grow offline sales certification",
      date: "March 23, 2024 - March 23, 2025",
      image: "/lovable-uploads/2d75222b-b275-4c5a-ad80-fcccdbf052f4.png"
    },
    {
      title: "Excel Skills Job Simulation",
      organization: "JP Morgan Chase & Co.",
      description: "Completed practical tasks in Excel including Keyboard Shortcuts, Conditional Formatting, VBA Macros, Data Visualization, and Data-Driven Storytelling",
      date: "September 30th, 2024",
      image: "/lovable-uploads/73c40240-6aa6-4cad-bbcf-4a088b0cca79.png"
    },
    {
      title: "Agile Project Management",
      organization: "HP LIFE",
      description: "Learned skills in defining MVP, understanding iterative and incremental product development, analyzing Agile project management tools like Scrum and Kanban",
      date: "October 13, 2024",
      image: "/lovable-uploads/e2ad3a16-89bc-4657-a4f5-1d92fa50f2e6.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E5DEFF] to-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 animate-fade-in">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] text-transparent bg-clip-text mb-6">
            ROHAN
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Full Stack Developer & Designer
          </p>
          <div className="flex gap-4 justify-center">
            <a href="https://github.com/RoHaNdeve" className="text-[#8B5CF6] hover:text-[#D946EF] transition-colors" target="_blank" rel="noopener noreferrer">
              <GithubIcon className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/rohanmahendran" className="text-[#8B5CF6] hover:text-[#D946EF] transition-colors" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon className="w-6 h-6" />
            </a>
            <a href="https://instagram.com/_rx_hxn_" className="text-[#8B5CF6] hover:text-[#D946EF] transition-colors" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="mailto:rohanmahendranr@gmail.com" className="text-[#8B5CF6] hover:text-[#D946EF] transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#FEC6A1] to-[#FFDEE2]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#8B5CF6] text-center mb-12">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-6 glass-card rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-[#D946EF] mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-[#8B5CF6]">{skill.name}</h3>
                <p className="text-gray-700">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-white to-[#E5DEFF]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#8B5CF6] text-center mb-12">
            Certifications
          </h2>
          <ScrollArea className="h-[800px] rounded-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="p-6 glass-card rounded-xl hover:shadow-xl transition-all duration-300"
                >
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-48 object-contain mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-[#8B5CF6]">{cert.title}</h3>
                  <p className="text-gray-600 mb-2">{cert.organization}</p>
                  <p className="text-gray-700 mb-2">{cert.description}</p>
                  <p className="text-gray-600">{cert.date}</p>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-[#8B5CF6] to-[#D946EF] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-xl mb-8">I'm always interested in hearing about new projects and opportunities.</p>
          <a
            href="mailto:rohanmahendranr@gmail.com"
            className="inline-flex items-center gap-2 bg-white text-[#8B5CF6] px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
          >
            <Mail className="w-5 h-5" />
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default Index;
