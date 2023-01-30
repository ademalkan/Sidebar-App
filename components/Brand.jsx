import React from "react";
import { IoLogoGameControllerB } from "react-icons/io";
const Brand = () => {
  return (
    <div className="flex items-center gap-2">
      <IoLogoGameControllerB size={30} />
      <h2>
        <span className="font-bold text-gray-700">Gamer</span>{" "}
        <span className="text-xs text-gray-500">v1.0</span>
      </h2>
    </div>
  );
};

export default Brand;
