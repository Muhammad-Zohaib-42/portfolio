"use client";

import emailjs from "emailjs-com";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs
      .send(
        "service_wcpc11i", // 👉 Replace with your actual Service ID
        "template_brz8mc5", // 👉 Replace with your actual Template ID
        formData,
        "4IZfkFxUHZpj4Uvwt" // 👉 Get this from EmailJS dashboard (Account → API Keys → Public Key)
      )
      .then(
        (result) => {
          setStatus("Message sent successfully ✅");
          setFormData({ name: "", email: "", subject: "", message: "" });
          setTimeout(() => setStatus(""), 2000);
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send message ❌");
          setTimeout(() => setStatus(""), 2000);
        }
      );
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-black border border-[rgba(255,255,255,0.5)] rounded-lg text-white p-3 md:p-8 space-y-5"
    >
      <div>
        <label className="block text-sm font-medium mb-2">Name</label>
        <input
          value={formData.name}
          onChange={handleChange}
          name="name"
          required
          type="text"
          placeholder="Enter your name"
          className="w-full px-4 py-2 rounded-md border border-[rgba(255,255,255,0.5)] bg-transparent focus:outline-[#31F900]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Email</label>
        <input
          value={formData.email}
          onChange={handleChange}
          name="email"
          required
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-2 rounded-md border border-[rgba(255,255,255,0.5)] bg-transparent focus:outline-[#31F900]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Subject</label>
        <input
          value={formData.subject}
          onChange={handleChange}
          name="subject"
          required
          type="text"
          placeholder="Enter subject"
          className="w-full px-4 py-2 rounded-md border border-[rgba(255,255,255,0.5)] bg-transparent focus:outline-[#31F900]"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Message</label>
        <textarea
          value={formData.message}
          onChange={handleChange}
          name="message"
          required
          rows="5"
          placeholder="Write your message..."
          className="w-full px-4 py-2 rounded-md border border-[rgba(255,255,255,0.5)] bg-transparent focus:outline-[#31F900] resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={status === "Sending..."}
        className={`w-full py-3 rounded-md font-semibold cursor-pointer transition flex items-center justify-center gap-2
    ${
      status === "Message sent successfully ✅"
        ? "bg-green-500 text-white"
        : status === "Failed to send message ❌"
        ? "bg-red-500 text-white"
        : "bg-[#31F900] text-black"
    }`}
      >
        {status === "Sending..." ? (
          <>
            <span className="animate-spin border-2 border-t-transparent border-black rounded-full w-5 h-5"></span>
            Sending...
          </>
        ) : status === "Message sent successfully ✅" ? (
          <>
            <span className="text-lg">✅</span> Sent
          </>
        ) : status === "Failed to send message ❌" ? (
          <>
            <span className="text-lg">❌</span> Failed
          </>
        ) : (
          "Send Message"
        )}
      </button>
    </form>
  );
}
