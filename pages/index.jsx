import Brand from "@/components/Brand";
import Hr from "@/components/Hr";
import Menu from "@/components/Menu";
import MenuButton from "@/components/MenuButton";
import Nav from "@/components/Nav";
import { FiSearch } from "react-icons/fi";
import menuList from "@/mocks/menu-list";
import Account from "@/components/Account";
import Profile from "@/components/Profile";
export default function SideMenu() {
  return (
    <div className="bg-blue-100 p-10 h-screen">
      <main className="bg-white flex flex-col gap-6 md:w-96 max-h-full overflow-y-scroll py-6 px-8 rounded-l-2xl shadow-2xl scrollbar-thin   scrollbar-thumb-gray-200 scrollbar-track-gray-100">
        <Nav />
        <div className="flex justify-between items-center">
          <Brand />
          <FiSearch size={25} />
        </div>
        <div className="flex justify-evenly">
          <MenuButton isLeft isPrimary isSelected>
            Personal
          </MenuButton>
          <MenuButton isRight>Business</MenuButton>
        </div>
        <Menu menuList={menuList} />
        <Hr size={0.5} />
        <Account />
        <div className="flex-1">
          <Profile />
        </div>
      </main>
    </div>
  );
}
