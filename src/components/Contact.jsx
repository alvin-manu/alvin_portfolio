import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jbalkb8",
        "template_dlh0uf4",
        form.current,
        "WLcsU09N-giK1vc3g"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset(); // Optional: reset form
        },
        (error) => {
          alert("Failed to send message. Try again later.");
          console.error(error);
        }
      );
  };

  return (
    <section className="bg-black text-white p-4 md:p-5 py-10" id="contact">
      <div className="max-w-3xl mx-auto">
             <h2 className="text-center text-2xl md:text-4xl mt-10" id="skills">Contact Me</h2>

        <p className="text-neutral-400 text-center mb-10  pt-3">
          Have a question or want to work together? Send me a message!
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="block text-sm mb-1 text-neutral-300" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-neutral-300" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-neutral-300" htmlFor="message">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2 rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-indigo-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md shadow transition duration-200"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
