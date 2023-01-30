import React from "react";
import Menu from "./Menu";
import {
  MdOutlineNotificationsActive,
  MdOutlineChatBubbleOutline,
} from "react-icons/md";
import { RiSettings2Line } from "react-icons/ri";

const menuList = [
  {
    icon: MdOutlineNotificationsActive,
    title: "Notifications",
    status: {
      count: 24,
      color: "bg-green-400",
    },
  },
  {
    icon: MdOutlineChatBubbleOutline,
    title: "Chat",
    status: {
      count: 8,
      color: "bg-orange-300",
    },
  },
  {
    icon: RiSettings2Line,
    title: "Settings",
  },
];

const Account = () => {
  return (
    <div className="grid gap-6">
      <h2 className="uppercase font-bold text-sm text-gray-500">Account</h2>
      <Menu menuList={menuList} />
    </div>
  );
};

export default Account;
