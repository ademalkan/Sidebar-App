import { RxDashboard } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { TbMailOpened } from "react-icons/tb";
import { FaFlagCheckered } from "react-icons/fa";
import { BsCalendar3 } from "react-icons/bs";
import { AiOutlineContacts } from "react-icons/ai";

const menuList = [
    {
      icon: RxDashboard,
      title: "Dashboard",
      isActive: true,
    },
    {
      icon: HiOutlineShoppingBag,
      title: "Products",
    },
    {
      icon: TbMailOpened,
      title: "Mail",
    },
    {
      icon: FaFlagCheckered,
      title: "Campaigns",
    },
    {
      icon: BsCalendar3,
      title: "Calendar",
    },
    {
      icon: AiOutlineContacts,
      title: "Contacts",
    },
  ];

  export default menuList