import Image from "next/image";
import React from "react";
import { IoIosMore } from "react-icons/io";

const Profile = () => {
  return (
    <div className="flex items-center gap-2 border py-4 px-4 rounded-full">
      <div className="h-12 w-12 overflow-hidden rounded-full">
        <Image
          width={100}
          height={100}
          alt="Profile Photo"
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
        />
      </div>
      <div className="flex-1">
        <h2 className="text-sm">Emily Star</h2>
        <p className="text-gray-500 text-xs">emily_star@gmail.com</p>
      </div>
      <IoIosMore size={25} />
    </div>
  );
};

export default Profile;
