import React, { useEffect, useState } from "react";
import axios from "axios";
import { services as services2 } from "../components/mock/mock";
import { projects as projects2 } from "../components/mock/mock";
import { testimonials as testimonials2 } from "../components/mock/mock";
import { contactInfo } from "../components/mock/mock";
export default function Home() {
  const [services, setServices] = useState([]);
  const [projects, setProjects] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [contact, setContact] = useState({});

  useEffect(() => {
    axios.get("/api/services").then((res) => setServices(res.data));
    axios.get("/api/projects").then((res) => setProjects(res.data.slice(0, 3)));
    axios
      .get("/api/testimonials")
      .then((res) => setTestimonials(res.data.slice(0, 3)));
    axios.get("/api/contact").then((res) => setContact(res.data));
  }, []);

  return (
    <div>
      <section
        className="relative h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        id="home"
      >
        {/* Top Contact Bar */}
        <div className="absolute top-0 left-0 right-0 z-20 bg-blue-800 bg-opacity-90 text-white text-xs md:text-sm px-4 py-2 flex flex-col md:flex-row justify-center items-center gap-2">
          <p>📞 +251 911 123 456</p>
          <p>📧 info@megaldrilling.com</p>
          <p>📍 Bole, Addis Ababa, Ethiopia</p>
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70 flex items-center justify-center text-white text-center px-4 pt-20 z-10">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
              Welcome to Megal Water Drilling
            </h1>
            <p className="text-lg md:text-2xl max-w-2xl mx-auto">
              Reliable, sustainable, and affordable water solutions across
              Ethiopia.
            </p>
            <a
              href="#services"
              className="mt-6 inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded shadow hover:bg-blue-100 transition"
            >
              Explore Our Services
            </a>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white text-blue-900" id="about">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <img
            src="/images/about-us.jpg" // replace with your image
            alt="Megal Team"
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />

          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold mb-4">
              About Megal Water Drilling
            </h2>
            <p className="text-gray-700 mb-4">
              Megal Water Drilling is a leading company in Ethiopia, delivering
              high-quality water well drilling and sustainable groundwater
              solutions. With decades of experience, we have earned a reputation
              for reliability, efficiency, and community impact.
            </p>
            <p className="text-gray-700 mb-4">
              Our mission is to provide access to clean and safe water by using
              modern equipment, skilled professionals, and environmentally
              responsible practices. Whether it's rural community water supply,
              institutional boreholes, or agricultural irrigation — we deliver
              results that last.
            </p>
            <p className="text-sm text-gray-500">
              💧 “Drilling water, building futures.”
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50" id="services">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
            Our Services
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services2.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 p-6 border-t-4 border-blue-600"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-blue-700 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50" id="projects">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
            Recent Projects
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects2.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-2">{project.description}</p>
                  <p className="text-sm text-gray-500">📍 {project.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white" id="testimonials">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
            Client Testimonials
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials2.map((t) => (
              <div
                key={t.id}
                className="bg-gray-50 rounded-lg shadow hover:shadow-md transition p-6 flex flex-col"
              >
                <div className="text-gray-600 italic mb-4 text-sm">
                  “{t.comment}”
                </div>

                <div className="mt-auto">
                  <div className="font-semibold text-blue-700">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50 text-blue-900" id="contact">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Contact Details */}
            <div>
              <p className="mb-3">
                <strong>📞 Phone:</strong> {contactInfo.phone}
              </p>
              <p className="mb-3">
                <strong>📧 Email:</strong> {contactInfo.email}
              </p>
              <p className="mb-3">
                <strong>📍 Address:</strong> {contactInfo.address}
              </p>
            </div>

            {/* Map */}
            {contactInfo.mapLink && (
              <iframe
                src={contactInfo.mapLink}
                className="w-full h-64 rounded border shadow-sm"
                allowFullScreen
                loading="lazy"
                title="Google Map"
              />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
