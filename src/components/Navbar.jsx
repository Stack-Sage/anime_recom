import React from "react";
import { Link } from "react-router-dom";



const Navbar = () => {




  return (
    <>
      <div className=" flex  gap-10 fixed  shadow-lg shadow-teal-900 hover:shadow-teal-300   h-[8%] rounded-md hover:text-teal-300  transition duration-500 ease-in-out text-teal-500 font-bold text-[1.2em]  w-full ">
       <ul className="fixed top-4 left-10 active:text-emerald-500 text-[1.4em]  hover:scale-105 transition duration-200 ease-in-out ">

        <Link className="" to="/">
          AniHive
        </Link>
       </ul>

        
          <ul className=" flex gap-10 fixed right-10  top-4 ">
            <li className=" active:text-emerald-300 hover:scale-105 transition duration-200 ease-in-out ">
              <Link
              className="
              
              "
               to="/contact ">Contact</Link>
            </li>
            <li className="active:text-emerald-300 hover:scale-105 transition duration-200 ease-in-out ">
              <Link
              className=""
               to="/about">About</Link>
            </li>
          </ul>
       
      </div>
    </>
  );
};

export default Navbar;
