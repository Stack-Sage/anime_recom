import React from "react";

const About = () => {
  return (
    <div className="bg-gradient-to-tr from-teal-950 via-black to-teal-950 min-h-screen flex flex-col text-gray-200">
      <div className="w-full max-h-screen overflow-y-auto scrollbar-thin scrollbar-thumb-teal-900 scrollbar-track-black">
        <div className="max-w-[90vw] lg:max-w-[70vw] mx-auto pt-8 pb-12 text-center">
          {/* Website Section */}
          <h1 className="text-4xl font-bold text-teal-300 mb-6">
            About <span className="text-teal-400">Anime Recommendations</span>
          </h1>
          <p className="text-lg leading-relaxed mb-8">
            Welcome to <strong>Anime Recommendations</strong>, a platform created for anime enthusiasts by an anime lover. This website helps users discover 
            similar anime to their favorites, using a powerful API to fetch and display highly relevant recommendations. Whether you're a seasoned otaku 
            or a curious newcomer, this website will guide you to your next binge-worthy series.
          </p>

          <div className="bg-gradient-to-br from-black via-teal-950 shadow-teal-600 to-slate-950 p-6 rounded-lg shadow-md hover:shadow-lg hover:shadow-teal-400 mb-8">
            <h2 className="text-3xl font-semibold text-teal-300 mb-4">Why Choose This Website?</h2>
            <ul className="list-disc list-inside text-left space-y-3">
              <li>Accurate and reliable anime recommendations.</li>
              <li>Clean, minimalistic, and responsive design.</li>
              <li>Powered by the <strong>Jikan API</strong> to ensure quality data.</li>
              <li>Created with love for the anime community!</li>
            </ul>
          </div>

          {/* Personal Section */}
          <h2 className="text-3xl font-semibold text-teal-300 mb-6">About Me</h2>
          <div className="bg-gradient-to-br from-black via-teal-950 shadow-teal-600 to-slate-950 p-6 mb-28 rounded-lg shadow-md hover:shadow-lg hover:shadow-teal-400">
            <p className="text-lg leading-relaxed">
              Hey! I'm <strong>Adarsh Pathania</strong>, a passionate developer, anime enthusiast, and a proud creator of this platform. With a strong background 
              in <strong>web development</strong>, I aim to craft user-friendly and visually stunning websites. I'm also exploring the endless possibilities of 
              technology, merging creativity with functionality to build tools that bring value to users.
            </p>
            <p className="text-lg leading-relaxed  mt-4">
              When I'm not coding, you can find me diving into epic anime series, playing chess, or teaching others about the exciting world of web development. 
              My journey in web development has been driven by curiosity, determination, and a love for solving complex problems with elegant solutions.
            </p>
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default About;
