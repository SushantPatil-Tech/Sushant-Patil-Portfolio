import { FaGithub, FaLinkedin, FaEnvelope} from "react-icons/fa";
import BlurText from "./BlurText";


export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-linear-to-br from-zinc-950 via-zinc-900 to-zinc-950">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-32 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="animate-fade-in-up text-center lg:text-left">
            {/* Greeting */}
            <div className="inline-block px-4 py-2 bg-zinc-800/50 backdrop-blur-sm rounded-full text-sm text-zinc-300 mb-6 border border-zinc-700/50">
              <BlurText text="👋 Hello, I'm" animateBy="words" delay={50} />
            </div>

            {/* Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight w-full">
              <BlurText text="Sushant Patil ✌️" animateBy="words" delay={100} />
            </h1>

            {/* Role */}
            <h2 className="text-lg sm:text-xl lg:text-3xl text-zinc-300 mb-4 font-light">
              <BlurText
                text="Full Stack Developer & Software Engineer"
                animateBy="words"
                delay={150}
              />
            </h2>

            {/* Location */}
            <div className="text-zinc-400 mb-8">
              <BlurText text="📍 Maharashtra, India" animateBy="words" delay={200} />
            </div>

            {/* Description */}
            <div className="max-w-2xl mx-auto lg:mx-0 text-zinc-300 mb-10">
              <BlurText
                text="I enjoy building full-stack applications, focusing on clean user interfaces and reliable, scalable backend systems. Passionate about creating digital experiences that make a difference."
                animateBy="words"
                delay={250}
              />
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start mb-10 w-full">
              <a
                href="#projects"
                className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white transition-all hover:scale-105"
              >
                View My Work
              </a>

              <a
                href="https://drive.google.com/file/d/1LtJv6sglUJ1ziKxPMLC0XIO0bbWP5hdf/view"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-semibold text-white border border-zinc-600 hover:border-zinc-500 transition-all hover:scale-105"
              >
                Resume
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 16v-8m0 8l-3-3m3 3l3-3M4 20h16"
                  />
                </svg>
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 justify-center lg:justify-start text-zinc-400">
              <a
                href="https://github.com/SushantPatil-Tech"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="w-6 h-6 hover:text-white transition" />
              </a>
              <a
                href="https://linkedin.com/in/sushant-patil-08b1ba282"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-6 h-6 hover:text-white transition" />
              </a>
              <a
               href="mailto:er.sushantspatil27@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                
              <FaEnvelope className="w-6 h-6 hover:text-white transition" />
              </a>
              
            </div>
          </div>

          {/* Visual */}
          <div className="order-1 lg:order-2">
            <div className="w-64 h-64 mx-auto bg-linear-to-br from-indigo-600 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-7xl">👨‍💻</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
