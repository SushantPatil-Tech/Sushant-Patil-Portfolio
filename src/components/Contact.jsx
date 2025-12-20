import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    const mailtoLink = `mailto:er.sushantspatil27@gmail.com?subject=Contact from ${formData.name}&body=Name: ${formData.name}%0AEmail: ${formData.email}%0A%0AMessage:%0A${formData.message}`;

    setTimeout(() => {
      window.location.href = mailtoLink;
    }, 800);
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-4 bg-gradient-to-b from-black via-zinc-900 to-black"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Get in Touch
          </h2>
          <p className="mt-3 text-zinc-400 max-w-md mx-auto">
            Have a question, idea, or opportunity? I’d love to hear from you.
          </p>
        </div>

        {/* Card */}
        <div className="flex justify-center">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md space-y-6 rounded-2xl
                       border border-white/10 bg-white/5
                       backdrop-blur-xl p-8 shadow-lg"
          >
            {!submitted ? (
              <>
                {/* Name */}
                <div>
                  <label className="block text-sm text-zinc-400 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full rounded-lg border border-zinc-700
                               bg-zinc-900 px-4 py-2.5 text-sm text-white"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm text-zinc-400 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full rounded-lg border border-zinc-700
                               bg-zinc-900 px-4 py-2.5 text-sm text-white"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm text-zinc-400 mb-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your idea..."
                    className="w-full resize-none rounded-lg border border-zinc-700
                               bg-zinc-900 px-4 py-2.5 text-sm text-white"
                  />
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="w-full rounded-lg bg-white px-4 py-2.5
                             text-sm font-medium text-black transition-all
                             hover:bg-zinc-200"
                >
                  Send Message →
                </button>
              </>
            ) : (
              <div className="text-center py-10">
                <p className="text-white text-lg font-medium mb-2">
                  Thanks for reaching out! 🙌
                </p>
                <p className="text-zinc-400 text-sm">
                  I’ll get back to you as soon as possible.
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
