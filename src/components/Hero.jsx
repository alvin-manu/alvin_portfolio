import React from "react";
import cvfile from "../assets/alvin_manu_wilson_CV.pdf"

function Hero() {
  return (
    <>
      <div className="flex flex-col justify-center items-center px-3 py-5" style={{minHeight:"95vh"}}>
        <h4 className="text-lg">Hi,</h4>
        <h2 className="text-2xl md:text-6xl">I'm Alvin, a</h2>
        <h1 className="text-4xl md:text-8xl bg-linear-to-r/hsl from-indigo-500 to-teal-400 bg-clip-text text-transparent">Web Developer</h1>
        <h4 className="text-neutral-400 text-center text-lg pt-3">Creating <span className="text-xl md:text-2xl"> high-quality Web Applications</span> for modern tools and best practices for Exceptional User Experience</h4>
        <div className="btn-container py-3 px-3">
          <a href={cvfile} download className="py-2 px-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow">
            View My Resume
          </a>
            <a href="#projects" className="ms-3 py-2 px-3 text-white border border-indigo-600 hover:bg-indigo-700 rounded-md shadow inline-block">
    View Projects
  </a>
        </div>
        <div className="socials-container flex py-3 px-3">
            <a href="https://www.linkedin.com/in/alvin-manu-wilson-0735292b2"><i class="fa-brands fa-linkedin"></i></a>
            <a href="https://github.com/alvin-manu" className="ms-4"><i class="fa-brands fa-github"></i></a>
            <a href="mailto:alvinmanuwilson@gmail.com" className="ms-4"><i class="fa-solid fa-envelope"></i></a>
        </div>
      </div>
    </>
  );
}

export default Hero;
