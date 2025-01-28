import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [activeMenus, setActiveMenus] = useState([]);

  const toggleMenu = (menu) => {
    if (activeMenus.includes(menu)) {
      setActiveMenus(activeMenus.filter((m) => m !== menu));
    } else {
      setActiveMenus([...activeMenus, menu]);
    }
  };

  const renderMenu = (menuData, parentKey = "") => {
    return (
      <ul className="menu">
        {menuData.map((menu, index) => {
          const key = `${parentKey}-${index}`;
          return (
            <li key={key}>
              <button onClick={() => toggleMenu(key)}>{menu.label}</button>
              {menu.submenu && activeMenus.includes(key) && (
                <div className="submenu">{renderMenu(menu.submenu, key)}</div>
              )}
            </li>
          );
        })}
      </ul>
    );
  };

  const menuData = [
    {
      label: "Menu 1",
      submenu: [
        {
          label: "Submenu 1.1",
          submenu: [
            {
              label: "Submenu 1.1.1",
              submenu: [
                { label: "Submenu 1.1.1.1" },
                { label: "Submenu 1.1.1.2" },
              ],
            },
            { label: "Submenu 1.1.2" },
          ],
        },
        {
          label: "Submenu 1.2",
          submenu: [{ label: "Submenu 1.2.1" }, { label: "Submenu 1.2.2" }],
        },
      ],
    },
    {
      label: "Menu 2",
      submenu: [{ label: "Submenu 2.1" }, { label: "Submenu 2.2" }],
    },
  ];

  return <nav className="navbar">{renderMenu(menuData)}</nav>;
};

export default Navbar;
