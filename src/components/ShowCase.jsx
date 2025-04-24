import React from "react";

function ShowCase() {
  return (
    <>
      <h2 className="text-center text-2xl md:text-4xl" id="showcase">What's in my Toolkit</h2>
      <h4 className="text-neutral-400 text-center text-lg pt-3 mb-5">
        Everything needed to build great products on the web
      </h4>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6  w-full items-center p-4 justify-center">
        <div class="bg-gray-900 text-white rounded-xl p-6 shadow-md">
          <div class="bg-indigo-600 w-10 h-10 flex items-center justify-center rounded-full mb-4">
          <i className="fa-solid fa-code"></i>

          </div>
          <h3 class="text-lg font-semibold mb-2">Modern UI Design</h3>
          <p class="text-gray-300">
            Creating beautiful, responsive interfaces that look great on any
            device using the latest design trends.
          </p>
        </div>

        <div class="bg-gray-900 text-white rounded-xl p-6 shadow-md">
          <div class="bg-indigo-600 w-10 h-10 flex items-center justify-center rounded-full mb-4">
          <i className="fa-solid fa-paintbrush"></i>

          </div>
          <h3 class="text-lg font-semibold mb-2">Clean Code</h3>
          <p class="text-gray-300">
            Writing maintainable, efficient code following best practices and
            modern development standards.
          </p>
        </div>

        <div class="bg-gray-900 text-white rounded-xl p-6 shadow-md">
          <div class="bg-indigo-600 w-10 h-10 flex items-center justify-center rounded-full mb-4">
          <i class="fa-solid fa-mobile-screen-button"></i>
          </div>
          <h3 class="text-lg font-semibold mb-2">Responsive Development</h3>
          <p class="text-gray-300">
          Building websites that work flawlessly across all screen sizes, from phones to large displays.
          </p>
        </div>

        <div class="bg-gray-900 text-white rounded-xl p-6 shadow-md">
          <div class="bg-indigo-600 w-10 h-10 flex items-center justify-center rounded-full mb-4">
          <i className="fa-solid fa-chart-simple"></i>

          </div>
          <h3 class="text-lg font-semibold mb-2">Performance Optimisation</h3>
          <p class="text-gray-300">
            Ensuring fast load times and smooth experiences through efficient
            code and asset optimization.
          </p>
        </div>
      </div>

      
    </>
  );
}

export default ShowCase;
