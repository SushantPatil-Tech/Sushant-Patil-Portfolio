import BlurText from "./BlurText";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "AI Customer Support Chatbot",
      description:
        "A full-stack chatbot application designed to handle common customer queries using Generative AI.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
      tags: [
        "React",
        "Spring Boot",
        "PostgreSQL",
        "Generative AI",
        "REST APIs",
      ],
      github: "https://github.com/SushantPatil-Tech",
    },
    {
      id: 2,
      title: "AI Resume Analyzer & Job Matcher",
      description:
        "A full-stack application that analyzes resumes and matches them with job descriptions using AI.",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=500&h=300&fit=crop",
      tags: [
        "React",
        "Spring Boot",
        "PostgreSQL",
        "Generative AI",
        "Resume Analysis",
      ],
      github: "https://github.com/SushantPatil-Tech",
    },
  ];

  return (
    <section id="projects" className="py-20 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-zinc-950 to-zinc-900" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <BlurText
              text="Projects"
              className="gradient-text"
              animateBy="words"
              delay={100}
            />
          </h2>

          <BlurText
            text="Projects built using Java, Spring Boot, React, and Generative AI"
            className="text-xl text-zinc-400 max-w-2xl mx-auto"
            animateBy="words"
            delay={150}
          />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-zinc-900 border border-zinc-800
                         rounded-2xl overflow-hidden
                         transition-colors duration-300
                         hover:border-indigo-500/40"
            >
              {/* IMAGE */}
              <div className="relative h-48 sm:h-52 md:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover
                             transition-transform duration-500
                             md:group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>

              {/* CONTENT */}
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>

                <p className="text-sm text-zinc-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* TAGS */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 rounded-full
                                 bg-zinc-800 text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* ACTION */}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2
                             text-sm font-medium text-indigo-400
                             hover:text-indigo-300 transition-colors"
                >
                  View on GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16">
          <BlurText
            text="Focused on building practical full-stack applications and learning through real projects."
            className="text-zinc-500 text-lg"
            animateBy="words"
            delay={200}
          />
        </div>

      </div>
    </section>
  );
}