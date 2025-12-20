import { FaCode, FaRocket, FaUsers } from "react-icons/fa";
import BlurText from "./BlurText";

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-zinc-950 to-zinc-900" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <BlurText
              text="About Me"
              className="gradient-text"
              animateBy="words"
              delay={100}
            />
          </h2>

          <BlurText
            text="Full Stack Developer focused on learning and building practical web applications"
            className="text-xl text-zinc-400 max-w-2xl mx-auto"
            animateBy="words"
            delay={150}
          />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column */}
          <div>
            <div className="space-y-6">
              <BlurText
                text="I’m a Full Stack Developer who enjoys building clean, simple, and user-friendly web applications using modern technologies."
                className="text-lg text-zinc-300 leading-relaxed"
                animateBy="words"
                delay={200}
              />

              <BlurText
                text="I work on both front-end and backend development, focusing on responsive interfaces, reliable backend logic, and clean code."
                className="text-lg text-zinc-300 leading-relaxed"
                animateBy="words"
                delay={250}
              />

              <BlurText
                text="Currently, I’m exploring Generative AI, DevOps, and AWS while building projects and improving my development skills."
                className="text-lg text-zinc-300 leading-relaxed"
                animateBy="words"
                delay={300}
              />

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mt-8 text-center">
                <div>
                  <div className="text-3xl font-bold gradient-text mb-1">1+</div>
                  <div className="text-sm text-zinc-400">Year Learning</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text mb-1">2+</div>
                  <div className="text-sm text-zinc-400">Projects Built</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text mb-1">5+</div>
                  <div className="text-sm text-zinc-400">Technologies</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Value Cards */}
          <div>
            <div className="space-y-6">

              {/* Clean Code */}
              <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-5 sm:p-6">
                <div className="flex items-center sm:items-start gap-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-linear-to-br from-indigo-600 to-purple-600 text-white text-lg sm:text-xl shrink-0">
                    <FaCode />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">
                      Clean Code
                    </h3>
                    <p className="text-sm sm:text-base text-zinc-400">
                      Writing simple and maintainable code.
                    </p>
                  </div>
                </div>
              </div>

              {/* Learning */}
              <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-5 sm:p-6">
                <div className="flex items-center sm:items-start gap-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-linear-to-br from-indigo-600 to-purple-600 text-white text-lg sm:text-xl shrink-0">
                    <FaRocket />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">
                      Continuous Learning
                    </h3>
                    <p className="text-sm sm:text-base text-zinc-400">
                      Learning new tools and technologies.
                    </p>
                  </div>
                </div>
              </div>

              {/* Collaboration */}
              <div className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-5 sm:p-6">
                <div className="flex items-center sm:items-start gap-4">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl bg-linear-to-br from-indigo-600 to-purple-600 text-white text-lg sm:text-xl shrink-0">
                    <FaUsers />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">
                      Team Collaboration
                    </h3>
                    <p className="text-sm sm:text-base text-zinc-400">
                      Working well with teams and sharing ideas.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <p className="text-zinc-400 text-lg mb-6">
            Always open to learning, collaboration, and new opportunities.
          </p>

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4
                       rounded-2xl font-semibold text-white
                       bg-linear-to-r from-indigo-600 to-purple-600
                       hover:opacity-90 transition"
          >
            Get in Touch
          </a>
        </div>

      </div>
    </section>
  );
}
