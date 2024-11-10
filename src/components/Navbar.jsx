import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-800 flex justify-center items-center text-white px-4 h-[50px]">
      <div className=" flex w-full justify-between">
        <Link to="/" className="text-xs lg:text-[16px]">Home</Link>
        <Link to="/about" className="text-xs lg:text-[16px]" >About</Link>
        <Link to="/" className=" hidden md:flex text-xs lg:text-[16px]">Trade Agreements</Link>
        <Link to="/" className=" hidden md:flex text-xs lg:text-[16px]">Top 25 Countries</Link>
        <Link to="/importers" className=" hidden md:flex text-xs lg:text-[16px]">Foreign Buyers</Link>
        <Link to="/exporters" className=" hidden md:flex text-xs lg:text-[16px]">Resources</Link>
        <Link to="/" className=" hidden md:flex text-xs lg:text-[16px]">What's New</Link>
        <Link to="/contact" className="text-xs lg:text-[16px]">Contact Us</Link>
        <Link to="/" className=" hidden md:flex text-xs lg:text-[16px]">Help</Link>
        <Link to="/" className=" hidden md:flex text-xs lg:text-[16px]">Language</Link>
      </div>
    </div>
  );
};

export default Navbar;
