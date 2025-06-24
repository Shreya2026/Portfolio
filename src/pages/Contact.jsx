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
          style={{
            display: 'flex',
           
            background: 'rgba(0,0,0,0.1)',
            borderRadius: '16px',
            overflow: 'hidden',
            boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
          }}
        >
    <div className="flex items-center justify-center min-h-screen w-full" style={{ background: "transparent" }}>
      <div className="flex w-full max-w-4xl rounded-lg shadow-lg" style={{ background: "transparent" }}>
        {/* Left Side: Contact Form (60%) */}
        <div className="flex-1 p-8 flex flex-col justify-center" style={{ flexBasis: "60%", background: "#18191f" }}>
          <h1 className="text-3xl font-bold mb-6 text-white">Contact Me</h1>
          <form
            ref={formRef}
            className="p-0 bg-transparent flex flex-col gap-4"
            onSubmit={handleSubmit}
            style={{ background: "transparent" }}
          >
            <label className="flex flex-col gap-1 text-white">
              Name
              <input
                type="text"
                name="name"
                required
                className="p-2 rounded bg-[#23242a] text-white border border-gray-700"
              />
            </label>
            <label className="flex flex-col gap-1 text-white">
              Email
              <input
                type="email"
                name="email"
                required
                className="p-2 rounded bg-[#23242a] text-white border border-gray-700"
              />
            </label>
            <label className="flex flex-col gap-1 text-white">
              Message
              <textarea
                name="message"
                required
                rows={5}
                className="p-2 rounded bg-[#23242a] text-white border border-gray-700"
              />
            </label>
            {/* Status message above the button */}
            {showStatus && (
              <p
                className={`mt-2 ${
                  status.startsWith("Thank") ? "text-green-400" : status === "Sending..." ? "text-yellow-400" : "text-red-400"
                }`}
              >
                {status}
              </p>
            )}
            <button
              type="submit"
              className="bg-[#fde047] text-black font-semibold py-2 px-4 rounded hover:bg-yellow-400 transition"
            >
              Send
            </button>
          </form>
          <p className="text-gray-400 mt-4 text-sm">
            Your message will be sent to:{" "}
            <span className="text-[#fde047]">{YOUR_EMAIL}</span>
          </p>
        </div>
        {/* Right Side: Social Handles (40%) */}
        <div className="flex-1 flex flex-col items-center justify-center p-8" style={{ flexBasis: "40%" }}>
          <div className="bg-[#23242a]/80 rounded-lg p-6 flex flex-col items-center gap-4 w-full">
            <h2 className="text-xl font-semibold text-white mb-4">Connect with me</h2>
            <a
             
             
              className="text-[#fde047] hover:underline text-lg"
            >
              shreyanshisinghal210@gmail.com
            </a>
            <a
              href="https://github.com/Shreya2026"
              className="text-white hover:text-[#fde047] text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/shreyanshi-singhal-462718256/"
              className="text-white hover:text-[#fde047] text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            {/* Add more social handles as needed */}
          </div>
        </div>
      </div>
    </div>
    </motion.div>
  );
}

export default Contact;
