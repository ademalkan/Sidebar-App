import clsx from "clsx";
import React from "react";

const MenuButton = ({ isLeft, isRight, isSelected, isPrimary, children }) => {
  return (
    <button
      className={clsx("w-full text-sm border p-2 rounded-2xl cursor-pointer uppercase", {
        "-mr-4": isLeft,
        "-ml-4": isRight,
        "bg-blue-800 text-white": isPrimary,
        "text-gray-700": isPrimary,
        "z-10": isSelected,
      })}
    >
      {children}
    </button>
  );
};

export default MenuButton;
