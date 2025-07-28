import React, { useRef, useState } from "react";
import { motion } from 'framer-motion';

function Contact() {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");
  const [showStatus, setShowStatus] = useState(false);

  const YOUR_EMAIL = "shreyanshisinghal210@gmail.com";

  // Formspree handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    setShowStatus(true);
    const formData = new FormData(formRef.current);

    const response = await fetch("https://formspree.io/f/xzzgkpkr", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("Thank you! Your message has been sent.");
      formRef.current.reset();
    } else {
      setStatus("Oops! There was a problem. Please try again.");
    }

    // Hide the status message after 3 seconds
    setTimeout(() => setShowStatus(false), 3000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      className="h-screen w-full px-4 md:px-8 lg:px-16 xl:px-24 py-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto h-full">
        <div className="flex flex-col lg:flex-row bg-black/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl h-full">
          {/* Contact Form Section */}
          <div className="w-full lg:w-3/5 p-4 lg:p-6 xl:p-8 flex flex-col justify-center bg-[#18191f] overflow-hidden">
            <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold mb-6 text-white text-center lg:text-left">Contact Me</h1>
            <form
              ref={formRef}
              className="flex flex-col gap-4 overflow-y-auto flex-1"
              onSubmit={handleSubmit}
            >
              <label className="flex flex-col gap-1 text-white">
                <span className="text-base lg:text-lg font-medium">Name</span>
                <input
                  type="text"
                  name="name"
                  required
                  className="p-3 rounded-lg bg-[#23242a] text-white border border-gray-600 focus:border-[#fde047] focus:outline-none transition-colors text-sm lg:text-base"
                  placeholder="Your full name"
                />
              </label>
              <label className="flex flex-col gap-1 text-white">
                <span className="text-base lg:text-lg font-medium">Email</span>
                <input
                  type="email"
                  name="email"
                  required
                  className="p-3 rounded-lg bg-[#23242a] text-white border border-gray-600 focus:border-[#fde047] focus:outline-none transition-colors text-sm lg:text-base"
                  placeholder="your.email@example.com"
                />
              </label>
              <label className="flex flex-col gap-1 text-white">
                <span className="text-base lg:text-lg font-medium">Message</span>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="p-3 rounded-lg bg-[#23242a] text-white border border-gray-600 focus:border-[#fde047] focus:outline-none transition-colors resize-none text-sm lg:text-base"
                  placeholder="Tell me about your project!"
                />
              </label>
              
              {/* Status message above the button */}
              {showStatus && (
                <p
                  className={`text-center text-base font-medium ${
                    status.startsWith("Thank") ? "text-green-400" : status === "Sending..." ? "text-yellow-400" : "text-red-400"
                  }`}
                >
                  {status}
                </p>
              )}
              
              <button
                type="submit"
                className="bg-[#fde047] text-black font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 transition-all duration-300 text-base lg:text-lg transform hover:scale-105 shadow-lg"
              >
                Send Message
              </button>
            </form>
            
            <p className="text-gray-400 mt-4 text-sm text-center lg:text-left">
              Your message will be sent to:{" "}
              <span className="text-[#fde047] break-all font-medium">{YOUR_EMAIL}</span>
            </p>
          </div>

          {/* Social Links Section */}
          <div className="w-full lg:w-2/5 flex flex-col items-center justify-center p-4 lg:p-6 xl:p-8 bg-gradient-to-br from-[#134c55] to-[#031012]">
            <div className="bg-[#23242a]/80 rounded-xl p-6 flex flex-col items-center gap-6 w-full max-w-sm">
              <h2 className="text-xl lg:text-2xl font-bold text-white mb-2 text-center">Let's Connect</h2>
              
              <div className="flex flex-col gap-4 w-full">
                <a
                  href={`mailto:${YOUR_EMAIL}`}
                  className="text-[#fde047] hover:text-yellow-300 text-sm lg:text-base text-center py-2 px-4 rounded-lg bg-[#2a2b32] hover:bg-[#3a3b42] transition-all duration-300 break-all transform hover:scale-105 shadow-md"
                >
                  📧 Email
                </a>
                
                <a
                  href="https://github.com/Shreya2026"
                  className="text-white hover:text-[#fde047] text-sm lg:text-base text-center py-2 px-4 rounded-lg bg-[#2a2b32] hover:bg-[#3a3b42] transition-all duration-300 transform hover:scale-105 shadow-md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🐙 GitHub
                </a>
                
                <a
                  href="https://www.linkedin.com/in/shreyanshi-singhal-462718256/"
                  className="text-white hover:text-[#fde047] text-sm lg:text-base text-center py-2 px-4 rounded-lg bg-[#2a2b32] hover:bg-[#3a3b42] transition-all duration-300 transform hover:scale-105 shadow-md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💼 LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
