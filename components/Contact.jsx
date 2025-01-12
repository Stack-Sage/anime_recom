import React, { useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    // EmailJS configuration
    emailjs
      .send(
        "service_c6a9tzi", // Replace with your EmailJS service ID
        "template_tu91qap", // Replace with your EmailJS template ID
        formData,
        "Yt7duJ8PkQlj2j1w7" // Replace with your EmailJS public key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Reset form
        },
        (error) => {
          console.error("FAILED...", error);
          setStatus("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <div className="bg-gradient-to-br from-teal-950 via-black to-cyan-950 min-h-screen flex pt-20  justify-center text-gray-200">
      <div className="lg:w-1/3 w-3/5 h-1/3 bg-gradient-to-br from-black via-teal-900 shadow-lg shadow-teal-800  to-slate-900 p-8 rounded-lg hover:shadow-xl hover:shadow-teal-400 hover:scale-105 trasistion duration-300 ease-linear">
        <h1 className="text-xl lg:text-4xl md:text-2xl font-bold text-teal-300 mb-6 text-center">
          Contact Me
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name..."
              className="w-full p-3 bg-black  border border-teal-600  focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gradient-to-br from-black via-black shadow-md shadow-teal-900   to-teal-950 rounded-lg hover:shadow-lg hover:shadow-teal-500 trasistion duration-200 ease-linear placeholder:text-teal-600 placeholder:italic text-teal-400 "
              required
            />
          </div>
          <div>
         
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email..."
              className="w-full p-3 bg-black placeholder:text-teal-600 placeholder:italic text-teal-400 border border-teal-600  focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gradient-to-br from-black via-black shadow-md shadow-teal-900   to-teal-950 rounded-lg hover:shadow-lg hover:shadow-teal-500 trasistion duration-200 ease-linear"
              required
            />
          </div>
          <div>
            
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message / Feedback ..."
              className="w-full p-3 bg-black placeholder:text-teal-600 placeholder:italic text-teal-400 border border-teal-600  focus:outline-none focus:ring-2 focus:ring-teal-500 bg-gradient-to-br from-black via-black shadow-md shadow-teal-900   to-teal-950 rounded-lg hover:shadow-lg hover:shadow-teal-500 trasistion duration-200 ease-linear"
              rows="5"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-br from-teal-950 via-black shadow-md shadow-teal-900   to-teal-950 p-4 rounded-lg hover:shadow-lg hover:shadow-teal-500 trasistion duration-200 ease-linear font-bold text-teal-400"
          >
            Send Message
          </button>
        </form>
        {status && (
          <p className="text-center mt-4 text-teal-400 font-medium">{status}</p>
        )}
      </div>
    </div>
  );
};

export default Contact;
