import { useState } from "react";
import BlurText from "./BlurText";
import {
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiSpringboot,
  SiPostgresql,
  SiGithub,
  SiDocker,
} from "react-icons/si";
import { FaJava, FaRobot } from "react-icons/fa";

const skillsData = {
  frontend: [
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "React.js", icon: <SiReact className="text-cyan-400" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  ],
  backend: [
    { name: "Java", icon: <FaJava className="text-orange-400" /> },
    { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
    { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-400" /> },
  ],
  other: [
    { name: "GitHub", icon: <SiGithub className="text-white" /> },
    { name: "DevOps (Learning)", icon: <SiDocker className="text-blue-400" /> },
    { name: "GenAI (Learning)", icon: <FaRobot className="text-purple-400" /> },
  ],
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <section id="skills" className="py-20 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-zinc-950 to-zinc-900" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <BlurText
              text="Technical Skills"
              className="gradient-text"
              animateBy="words"
              delay={100}
            />
          </h2>

          <BlurText
            text="Technologies I use and currently explore"
            className="text-xl text-zinc-400 max-w-2xl mx-auto"
            animateBy="words"
            delay={150}
          />
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="rounded-2xl p-2 bg-zinc-900/50 backdrop-blur-md">
            {["frontend", "backend", "other"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 sm:px-8 py-3 rounded-xl font-medium text-sm transition-all ${
                  activeTab === tab
                    ? "bg-linear-to-r from-indigo-600 to-purple-600 text-white"
                    : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData[activeTab].map((skill) => (
            <div
              key={skill.name}
              className="bg-zinc-900/50 border border-zinc-800/50 rounded-2xl p-6
                         transition-all hover:border-indigo-500/50"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl
                                bg-zinc-800 text-2xl">
                  {skill.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16">
          <BlurText
            text="Continuously learning and improving through hands-on projects."
            className="text-zinc-500 text-lg"
            animateBy="words"
            delay={200}
          />
        </div>

      </div>
    </section>
  );
}
