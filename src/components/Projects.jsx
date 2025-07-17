import React from "react";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";

function Projects() {
  return (
    <>
      <section className="text-white" id="projects">
        <h2 className="text-center text-2xl md:text-4xl mt-10" id="skills">
          Projects
        </h2>

        <h4 className="text-neutral-400 text-center text-lg pt-3 mb-5">
          Checkout some of my recent works.
      </h4>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto p-4">
          
          {/* Blog App */}
          <div
            className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img
              src={img4}
              alt="Blog App"
              className="rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-400 transition-colors duration-300">
              Blog Application
            </h3>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              A full-featured blog application that allows users to create,
              edit, and delete blog posts with a clean and intuitive UI. Users
              can browse posts by category, view detailed content, and interact
              through comments or likes. Built with a focus on user experience,
              content management, and responsive design.
            </p>
            <a
              href="https://github.com/alvin-manu/mern_blog_app"
              target="_blank"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-white transition-colors duration-200 font-medium"
            >
              <i className="fa-brands fa-github"></i>
              GitHub
            </a>
          </div>

          {/* Portfolio Showcase */}
          <div
            className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img
              src={img5}
              alt="Portfolio Showcase"
              className="rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-400 transition-colors duration-300">
              Portfolio Showcase App
            </h3>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              A MERN-based project showcase app that lets users upload and
              display their projects with image previews and external links.
              Includes a home dashboard for managing entries and an explore
              section to browse others' work.
            </p>
            <a
              href="https://github.com/alvin-manu/Project-hive"
              target="_blank"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-white transition-colors duration-200 font-medium"
            >
              <i className="fa-brands fa-github"></i>
              GitHub
            </a>
          </div>

          {/* Media Player */}
          <div
            className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img
              src={img2}
              alt="Media Player"
              className="rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-400 transition-colors duration-300">
              Media Player
            </h3>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              A media player that allows users to easily add their media
              collections (films, songs, etc.) and organize them into
              categories. You can also add image and video links, view them, and
              track your watch history.
            </p>
            <a
              href="https://github.com/alvin-manu/mediaPlayerFE"
              target="_blank"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-white transition-colors duration-200 font-medium"
            >
              <i className="fa-brands fa-github"></i>
              GitHub
            </a>
          </div>

          {/* Movie Website */}
          <div
            className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img
              src={img1}
              alt="Movie Website"
              className="rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-400 transition-colors duration-300">
              Movie Website
            </h3>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              A movie website where users can browse a wide selection of films
              and TV shows. The homepage features a large banner for Netflix
              Originals and sections like Trending, Top Rated, Action, Comedy,
              and more.
            </p>
            <a
              href="https://github.com/alvin-manu/movie_website"
              target="_blank"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-white transition-colors duration-200 font-medium"
            >
              <i className="fa-brands fa-github"></i>
              GitHub
            </a>
          </div>

          {/* Restaurant Website */}
          <div
            className="bg-gray-900 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img
              src={img3}
              alt="Restaurant Website"
              className="rounded-lg mb-4 group-hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-2xl font-semibold mb-2 group-hover:text-blue-400 transition-colors duration-300">
              Restaurant Website
            </h3>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              A restaurant website built using React and Vite. It features a
              clean, responsive layout with modular components to showcase a
              restaurant’s brand, menu, and offerings. Includes ESLint for code
              quality.
            </p>
            <a
              href="https://github.com/alvin-manu/restaurant_website"
              target="_blank"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-white transition-colors duration-200 font-medium"
            >
              <i className="fa-brands fa-github"></i>
              GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
