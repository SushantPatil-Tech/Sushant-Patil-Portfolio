import { useState } from "react";
import BlurText from "./BlurText";
import {
  FaBriefcase,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaCalendarAlt,
} from "react-icons/fa";

/* =======================
   WORK EXPERIENCE
======================= */
const workExperiences = [
  {
    id: 1,
    company: "Starsoftech",
    location: "Remote (Work From Home)",
    role: "Junior Software Developer Intern (Full Stack)",
    date: "Sep 2025 – Present",
    duration: "Ongoing Internship",
    type: "work",
    points: [
      "Currently working as a Full Stack Developer intern on real-world web applications.",
      "Contributing to frontend and backend development using modern technologies.",
      "Collaborating remotely with team members to implement features and resolve issues.",
      "Learning industry workflows, version control practices, and clean coding standards."
    ],
  },
];

/* =======================
   EDUCATION
======================= */
const educationData = [
  {
    id: 1,
    company: "Bachelor of Technology",
    location: "D Y Patil Agriculture & Technical University Talsande Kolhapur",
    role: "Computer Science and Engineering Student",
    date: "2022 – 2026",
    duration: "4 Years",
    type: "education",
    points: [
      "Studying core computer science subjects including Data Structures, DBMS, OOPs, and Operating Systems.",
      "Learning full stack development through academic coursework and personal projects.",
      "Building a strong foundation in programming, problem-solving, and software engineering concepts.",
      "Exploring modern technologies such as backend systems, cloud basics, and web development."
    ],
  },
];

export default function Experience() {
  const [activeTab, setActiveTab] = useState("work");
  const data = activeTab === "work" ? workExperiences : educationData;

  return (
    <section id="experience" className="py-20 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-b from-zinc-950 to-zinc-900" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <BlurText
              text="Experience & Education"
              className="gradient-text"
              animateBy="words"
              delay={100}
            />
          </h2>
          <BlurText
            text="Ongoing internship experience and academic background"
            className="text-xl text-zinc-400 max-w-2xl mx-auto"
            animateBy="words"
            delay={150}
          />
        </div>

        {/* Tabs */}
        <div className="mb-12 flex justify-center">
          <div className="flex bg-zinc-900 rounded-xl p-1 border border-zinc-800">
            <button
              onClick={() => setActiveTab("work")}
              className={`flex items-center gap-3 px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === "work"
                  ? "bg-indigo-600 text-white"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800"
              }`}
            >
              <FaBriefcase className="w-4 h-4" />
              <span>Experience</span>
            </button>

            <button
              onClick={() => setActiveTab("education")}
              className={`flex items-center gap-3 px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === "education"
                  ? "bg-indigo-600 text-white"
                  : "text-zinc-400 hover:text-white hover:bg-zinc-800"
              }`}
            >
              <FaGraduationCap className="w-4 h-4" />
              <span>Education</span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="space-y-8">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-6 transition-all hover:border-indigo-500/50"
            >
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    {item.company}
                  </h3>
                  <p className="text-indigo-400 font-medium">
                    {item.role}
                  </p>
                </div>

                <div className="mt-2 sm:mt-0 text-sm text-zinc-400">
                  <div className="flex items-center gap-2 mb-1">
                    <FaCalendarAlt className="w-4 h-4" />
                    <span>{item.date}</span>
                  </div>
                  <span className="inline-block px-3 py-1 bg-indigo-600/20 text-indigo-300 rounded-full text-xs">
                    {item.duration}
                  </span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-zinc-400 text-sm mb-4">
                <FaMapMarkerAlt className="w-4 h-4" />
                <span>{item.location}</span>
              </div>

              {/* Points */}
              <ul className="space-y-2">
                {item.points.map((point, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-zinc-300 text-sm"
                  >
                    <span className="text-indigo-400">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <BlurText
            text="Open to entry-level opportunities, internships, and learning experiences."
            className="text-zinc-400 text-lg"
            animateBy="words"
            delay={200}
          />
        </div>

      </div>
    </section>
  );
}
