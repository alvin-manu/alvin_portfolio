import React from "react";
import img1 from "../assets/img1.png"
import img2 from "../assets/img2.png"
import img3 from "../assets/img3.png"

function Projects() {
  return (
    <>
      <section class="text-white px-6" id="projects">
        <h2 className="text-center text-2xl md:text-4xl mt-10">Projects</h2>
        <h4 className="text-neutral-400 text-center text-lg pt-3 mb-5">
          Checkout some of my recent Works.
        </h4>

        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        <div
            class="bg-gray-800 rounded-2xl p-5 shadow-md"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <img src={img2} alt="" class="rounded-lg mb-4"/>
            <h3 class="text-xl font-semibold mb-2">Media Player</h3>
            <p class="text-gray-300 mb-4">
            A media player that allows users to easily add their media collections (films, songs, etc.) and organize them into categories. You can also add image and video links, view them, and track your watch history.
            </p>
            <a
              href="https://github.com/alvin-manu/mediaPlayerFE"
              target="_blank"
              class="inline-flex items-center gap-2 text-blue-400 hover:underline"
            >
             <i class="fa-brands fa-github"></i>
              GitHub
            </a>
          </div>

          
          <div
            class="bg-gray-800 rounded-2xl p-5 shadow-md"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <img src={img1} alt="" class="rounded-lg mb-4"/>
            <h3 class="text-xl font-semibold mb-2">Movie Website</h3>
            <p class="text-gray-300 mb-4">
            This is a movie website where users can browse a wide selection of films and TV shows, just like on Netflix. The homepage features a large banner that highlights a randomly selected "Netflix Original" and have category – like Trending, Top Rated, Action, Comedy and more.
            </p>
            <a
              href="https://github.com/alvin-manu/movie_website"
              class="inline-flex items-center gap-2 text-blue-400 hover:underline"
            >
              <i class="fa-brands fa-github"></i>
              GitHub
            </a>
          </div>

         

          <div
            class="bg-gray-800 rounded-2xl p-5 shadow-md"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <img src={img3} alt="" class="rounded-lg mb-4"/>
            <h3 class="text-xl font-semibold mb-2">Restaurant Website</h3>
            <p class="text-gray-300 mb-4">
            This is a restaurant website built using React and Vite. It features a clean and responsive layout suitable for showcasing a restaurant's brand, menu, and offerings. The site uses modular components, and the setup includes ESLint for code quality.
            </p>
            <a
              href="https://github.com/alvin-manu/restaurant_website"
              class="inline-flex items-center gap-2 text-blue-400 hover:underline"
            >
              <i class="fa-brands fa-github"></i>
              GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
