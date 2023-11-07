'use client';

import React, { OptionHTMLAttributes, useEffect } from 'react';
import { themeChange } from 'theme-change';
import Logo from '../Logo';
import Select from '../Select';
import ThemeSelector from '../ThemeSelector';

type MenuItem = {
  label: string;
  url: string;
};

const menuItems: MenuItem[] = [
  { label: 'Lễ cưới', url: '' },
  { label: 'Cặp đôi', url: '' },
  { label: 'Hành trình', url: '' },
  { label: 'Ảnh cưới', url: '' },
  { label: 'Sự kiện', url: '' },
  { label: 'Lời chúc', url: '' },
];

const NavigationBar = () => {
  const renderMenuItem = (menuItem: MenuItem) => (
    <li key={menuItem.label}>
      <a href={menuItem.url} className="text-base">
        {menuItem.label}
      </a>
    </li>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-center ml-auto md:ml-0">
        <div className="dropdown z-10">
          <label tabIndex={0} className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 z-30 right-0"
          >
            {menuItems.map((item) => renderMenuItem(item))}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden md:flex m-auto">
        <ul className="menu menu-horizontal px-1">
          {menuItems.map((item) => renderMenuItem(item))}
        </ul>
      </div>
    </div>
  );
};

export default NavigationBar;
