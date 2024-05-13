import { useState } from "react";
import { PiSelectionBackground } from "react-icons/pi";
import { FaRegEdit } from "react-icons/fa";
import Reveal from "./Reveal";

const SideNav = ({ selectedIndex }) => {
  const menuList = [
    {
      id: 1,
      name: "Icon",
      icon: FaRegEdit,
    },
    {
      id: 2,
      name: "Background",
      icon: PiSelectionBackground,
    },
  ];

  const [activateIndex, setActivateIndex] = useState(0);
  return (
    <div className="h-screen border shadow-sm">
      <Reveal>
        {" "}
        <div>
          {menuList.map((menu, index) => (
            <h2
              onClick={() => {
                setActivateIndex(index);
                selectedIndex(index);
              }}
              className={`p-3 text-lg px-7 text-gray-500 my-2 cursor-pointer hover:bg-primary hover:text-white flex items-center gap-2 ${
                activateIndex == index && "bg-primary text-white"
              }`}
              key={index}
            >
              <menu.icon className="w-6 h-6 hover:animate-bounce" />
              {menu.name}
            </h2>
          ))}
        </div>
      </Reveal>
    </div>
  );
};

export default SideNav;
