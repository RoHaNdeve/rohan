
import { GithubIcon, LinkedinIcon, Mail, Code, Briefcase } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [isHovered, setIsHovered] = useState<number | null>(null);

  const skills = [
    { name: "Frontend Development", icon: <Code className="w-6 h-6" />, description: "React, TypeScript, Tailwind CSS" },
    { name: "Backend Development", icon: <Code className="w-6 h-6" />, description: "Node.js, Express, PostgreSQL" },
    { name: "UI/UX Design", icon: <Code className="w-6 h-6" />, description: "Figma, Adobe XD" },
  ];

  const projects = [
    {
      title: "Project 1",
      description: "A beautiful web application",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&auto=format&fit=crop&q=60",
      link: "#"
    },
    {
      title: "Project 2",
      description: "Mobile-first responsive design",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&auto=format&fit=crop&q=60",
      link: "#"
    },
    {
      title: "Project 3",
      description: "Full-stack application",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60",
      link: "#"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 animate-fade-in">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6">
            John Doe
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Full Stack Developer & Designer
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#" className="text-gray-600 hover:text-accent transition-colors">
              <GithubIcon className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-accent transition-colors">
              <LinkedinIcon className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-600 hover:text-accent transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
              >
                <div className="text-accent mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <a
                href={project.link}
                key={index}
                className="group relative overflow-hidden rounded-xl"
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${isHovered === index ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="text-white text-center p-4">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Let's Work Together</h2>
          <p className="text-xl mb-8">I'm always interested in hearing about new projects and opportunities.</p>
          <a
            href="mailto:contact@johndoe.com"
            className="inline-flex items-center gap-2 bg-accent px-6 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
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
