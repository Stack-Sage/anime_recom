import React from "react";
import { Link } from "react-router-dom";



const Navbar = () => {




  return (
    <>
      <div className=" flex  fixed  shadow-lg shadow-teal-900 hover:shadow-teal-300   h-[8%] rounded-md hover:text-teal-300  transition duration-500 ease-in-out text-teal-400 font-bold lg:text-[1.15em] text-[0.6em] w-full ">
       <ul className="fixed top-4 left-4 active:text-emerald-500 text-[1.4em]   ">

        <Link className="m-1 lg:m-5  hover:scale-105 transition duration-300 ease-in-out rounded-lg shadow-md shadow-teal-800 hover:shadow-lg hover:shadow-teal-400 hover:bg-gradient-to-tr p-3 " to="/">
          AniHive
        </Link>

        <Link className="m-1 lg:m-5  hover:scale-105 transition duration-300 ease-in-out rounded-lg shadow-md shadow-teal-800 hover:shadow-lg hover:shadow-teal-400 hover:bg-gradient-to-tr p-3 " to="/movies">
          MovieHive
        </Link>
       </ul>

        
          <ul className=" flex gap-4 lg:gap-6 fixed right-2  top-5 ">
            <li className=" active:text-emerald-300 hover:scale-105 transition duration-200 ease-in-out  ">
              <Link
              className=" lg:m-5  hover:scale-105 transition duration-300 ease-in-out rounded-lg  shadow-md shadow-teal-800 hover:shadow-lg hover:shadow-teal-400 hover:bg-gradient-to-tr p-3
              
              "
               to="/contact ">Contact</Link>
            </li>
            <li className="active:text-emerald-300 hover:scale-105 transition duration-200 ease-in-out ">
              <Link
              className=" lg:m-5  hover:scale-105 transition duration-300 ease-in-out rounded-lg shadow-md shadow-teal-800 hover:shadow-lg  hover:shadow-teal-400 hover:bg-gradient-to-tr  p-3 "
               to="/about">About</Link>
            </li>
          </ul>
       
      </div>
    </>
  );
};

export default Navbar;
