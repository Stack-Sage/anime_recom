import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import About from "./components/About";
import Home from "./components/Home";
import Movies from "./components/Movies";
import { LampContainer } from "./components/ui/Lamp";
import { Route, Routes, useLocation } from "react-router-dom";

const App = () => {
  const location = useLocation();

  const showLampContainer = ["/", "/movies"].includes(location.pathname);

  return (
    <>
      {/* Conditionally render LampContainer */}
      {showLampContainer && (
        <div className="absolute top-0 w-screen mx-auto h-screen overflow-hidden">
          <LampContainer />
        </div>
      )}

      

      <div className="flex  top-0 flex-col text-gray-200 bg-gradient-to-br from-slate-950 via-black to-cyan-950 w-screen text-center min-h-screen h-screen">
        <div className="fixed">
          <Navbar />
        </div>

     { showLampContainer&&(  <div className=" mt-64 absolute w-full mx-auto items-center flex    justify-center hue-rotate-180    ">
          
        <img
        className=" hover:shadow-xl opacity-25 hover:opacity-50 hover: hover:shadow-black  rounded-full hover:scale-125 transistion duration-500 ease-in-out   shadow-none bg-transparent animate-pulse  contrast-150 hover:-rotate-180   rotate-180 hover:hue-rotate-60  "
          src="https://png.pngtree.com/png-vector/20220117/ourmid/pngtree-itachi-mangekyou-sharingan-png-image_4324649.png"
          alt="image"
          width="180px"
          height="200px"
        />
      
      </div>
      )}

        <div className="pt-[100px] min-h-screen  overflow-hidden ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default App;
