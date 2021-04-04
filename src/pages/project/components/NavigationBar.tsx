import React from "react";
import { Link } from "react-router-dom";

interface NavigationBarItem {
  icon: React.ReactNode;
  href: string;
}

interface NavigationBarProps {
  items: NavigationBarItem[];
}

export const NavigationBar: React.FC<NavigationBarProps> = ({ items }) => {
  return (
    <nav className="bg-secondary">
      <ul>
        {items.map((item, index) => (
          <Link to={item.href}>
            <li key={index} className="px-5 py-4 hover:bg-gray-300 transition">
              {item.icon}
            </li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};
