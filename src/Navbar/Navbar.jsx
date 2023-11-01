import React, { useState } from "react";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="w-full md:block   h-20 pr-8 pl-16 bg-white inline-block text-black  p-4  shadow-xl">
      <div className="inline-flex float-left">
        <div className="text-black inline mr-10 ">
          <h1 className="text-xl  text-indigo-700 sm:block font-extrabold">
            Flipkart
          </h1>
          <h5 className="hidden md:block">
            Explore <b className="text-orange-300">plus </b>
          </h5>
        </div>
        <div
          className=" md:hidden 
         flex"
        >
          <h1>Grocey</h1>
        </div>
        <div className="inline-flex float-left max-sm:hidden ">
          <div className="p-2 ">
            <input
              type="text"
              placeholder="Search for Products, Brands and More"
              className="w-[700px] p-2 bg-slate-200 rounded-xl text-black"
            />
          </div>
          <div className="inline-flex float-left max-sm:hidden ">
            <div className="p-4 mr-20 ml-20">
              <Link to="/Seller">
                <h1>
                  <StorefrontIcon /> Become a Seller
                </h1>
              </Link>
            </div>
            <div className="p-4">
              <Link to="/login">
                <h1>Sign in</h1>
              </Link>
            </div>
            <div className="p-4  ml-20">
              <h1>Cart</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
