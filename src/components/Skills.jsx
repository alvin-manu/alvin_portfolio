import React from "react";

function Skills() {
  return (
    <>
      <h2 className="text-center text-2xl md:text-4xl mt-10" id="skills">Skills</h2>
      <h4 className="text-neutral-400 text-center text-lg pt-3 mb-5">
        Technologies and tools I use
      </h4>

      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 p-4  mx-auto  max-w-7xl">
        
        <div class="flex flex-col items-center gap-2 p-4 bg-gray-800 rounded-xl shadow-md hover:scale-105 transition-transform">
          <img
            src="https://www.svgrepo.com/show/303205/html-5-logo.svg"
            alt=""
            className="w-10 h-10"
          />
          <p class="text-sm">HTML</p>
        </div>

        <div class="flex flex-col items-center gap-2 p-4 bg-gray-800 rounded-xl shadow-md hover:scale-105 transition-transform">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
            alt=""
            className="w-10 h-10"
          />
          <p class="text-sm">CSS</p>
        </div>

        <div class="flex flex-col items-center gap-2 p-4 bg-gray-800 rounded-xl shadow-md hover:scale-105 transition-transform">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2sPC6b3oTgzKALC3Kt1LTbxGYB3oN1SrTjA&s"
            alt=""
            className="w-10 h-10"
          />
          <p class="text-sm">Javascript</p>
        </div>

        <div class="flex flex-col items-center gap-2 p-4 bg-gray-800 rounded-xl shadow-md hover:scale-105 transition-transform">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
            alt=""
            className="w-10 h-10"
          />
          <p class="text-sm">GIT</p>
        </div>

        <div class="flex flex-col items-center gap-2 p-4 bg-gray-800 rounded-xl shadow-md hover:scale-105 transition-transform">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt=""
            className="w-10 h-10"
          />
          <p class="text-sm">Github</p>
        </div>

        <div class="flex flex-col items-center gap-2 p-4 bg-gray-800 rounded-xl shadow-md hover:scale-105 transition-transform">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/archive/a/a7/20220125121206%21React-icon.svg/120px-React-icon.svg.png"
            alt=""
            className="w-15 h-10"
          />
          <p class="text-sm">React</p>
        </div>

        <div class="flex flex-col items-center gap-2 p-4 bg-gray-800 rounded-xl shadow-md hover:scale-105 transition-transform">
          <img
            src="https://www.svgrepo.com/show/331488/mongodb.svg"
            alt=""
            className="w-10 h-10"
          />
          <p class="text-sm">Mongodb</p>
        </div>

        <div class="flex flex-col items-center gap-2 p-4 bg-gray-800 rounded-xl shadow-md hover:scale-105 transition-transform">
          <img
            src="https://www.manektech.com/storage/developer/1646733543.webp"
            alt=""
            className="w-10 h-10"
          />
          <p class="text-sm">Express</p>
        </div>
        <div class="flex flex-col items-center gap-2 p-4 bg-gray-800 rounded-xl shadow-md hover:scale-105 transition-transform">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png"
            alt=""
            className="w-15 h-10"
          />
          <p class="text-sm">Node JS</p>
        </div>
        <div class="flex flex-col items-center gap-2 p-4 bg-gray-800 rounded-xl shadow-md hover:scale-105 transition-transform">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
            alt=""
            className="w-12 h-10"
          />
          <p class="text-sm">Bootstrap</p>
        </div>
        <div class="flex flex-col items-center gap-2 p-4 bg-gray-800 rounded-xl shadow-md hover:scale-105 transition-transform">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/1200px-Tailwind_CSS_Logo.svg.png"
            alt=""
            className="w-12 h-10"
          />
          <p class="text-sm">Tailwind</p>
        </div>

        <div class="flex flex-col items-center gap-2 p-4 bg-gray-800 rounded-xl shadow-md hover:scale-105 transition-transform">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
            alt=""
            className="w-10 h-10"
          />
          <p class="text-sm">VS Code</p>
        </div>

        <div class="flex flex-col items-center gap-2 p-4 bg-gray-800 rounded-xl shadow-md hover:scale-105 transition-transform">
          <img
            src="https://www.svgrepo.com/show/354202/postman-icon.svg"
            alt=""
            className="w-10 h-10"
          />
          <p class="text-sm">Postman</p>
        </div>

        <div class="flex flex-col items-center gap-2 p-4 bg-gray-800 rounded-xl shadow-md hover:scale-105 transition-transform">
          <img
            src="https://www.svgrepo.com/show/376339/netlify.svg"
            alt=""
            className="w-12 h-10"
          />
          <p class="text-sm">Netlify</p>
        </div>
      </div>
    </>
  );
}

export default Skills;
