import React from "react";

function Navbar() {
  return (
    <div className="flex items-center justify-between w-full p-4 z-[100] absolute">
      <h1 className="text-red-600 text-4xl font-bold cursor-pointer ">
        CinePreview
      </h1>
      <div>
        <button className="pr-4 text-white">Sign In</button>
        <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Navbar;
