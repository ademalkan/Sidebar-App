import React from "react";

import clsx from "clsx";

const Menu = ({ menuList = [] }) => {
  return (
    <ul className="grid gap-6">
      {menuList.map(({ title, icon: Icon, status, ...rest }) => (
        <li
          key={title}
          className={clsx("flex  items-center gap-2 ", {
            "text-gray-900 font-medium": rest.isActive,
            "text-gray-600 font-normal": !rest.isActive,
          })}
        >
          {Icon && <Icon size={20} />}
          <div className="flex-1">{title}</div>
          {status && (
            <div
              className={clsx(
                "text-xs px-2 py-1 rounded-lg font-bold  ",
                status?.color
              )}
            >
              {status.count}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Menu;
