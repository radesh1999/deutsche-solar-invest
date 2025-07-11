import React, { useState } from 'react';
import {
  LeftOutlined,
} from '@ant-design/icons';
import Logo from '../assets/svg/logo.svg'; // Assuming you have this SVG
import { Link, useLocation } from 'react-router-dom';
import { CalculationsIcon, ConsultingIcon, Home, InvesterMenuIcon, ProjectDevIcon, ProjectsIcon, UserMenuIcon } from '../assets/images';

const navItems = [
  { path: '/home', icon: <img src={Home} />, label: 'Home' },
  { path: '/projects', icon: <img src={ProjectsIcon} />, label: 'Projects' },
  { path: '/investors', icon: <img src={InvesterMenuIcon} />, label: 'Investors' },
  { path: '/calculations', icon: <img src={CalculationsIcon} />, label: 'Calculations' },
  { path: '/consulting-documents', icon: <img src={ConsultingIcon} />, label: 'Consulting Documents' },
  { path: '/user', icon: <img src={UserMenuIcon} />, label: 'User' },
  { path: '/project-developer', icon: <img src={ProjectDevIcon} />, label: 'Project Developer' },
];

const Sidebar: React.FC = () => {
  const location = useLocation();
  // State to manage the collapsed/expanded status of the sidebar
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Function to toggle the state
  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    // Dynamic width and transition for the main container
    <div
      className={`min-h-screen bg-[#2E5A4A] text-white flex flex-col justify-between py-4 transition-all duration-300 ease-in-out ${isCollapsed ? 'w-24' : 'w-72'
        }`}
    >
      <div>
        {/* Logo and company name section */}
        <div
          className={`flex items-center p-2 transition-all duration-300 ${isCollapsed ? 'justify-center' : 'space-x-3'
            }`}
        >
          {/* Use a smaller logo when collapsed */}
          <img src={Logo} alt="logo" className={`transition-all duration-300 ${isCollapsed ? 'w-20 ' : 'w-20'}`} />

          {/* Conditionally render the company name */}
          {!isCollapsed && (
            <div>
              <h1 className="font-semibold text-[17px] leading-tight font-inter whitespace-nowrap">Deutsche</h1>
              <h1 className="font-semibold text-[17px] leading-tight font-inter whitespace-nowrap">Solar Invest</h1>
            </div>
          )}
        </div>

        {/* Navigation */}
        <nav className="mt-8">
          <ul>
            {navItems.map((item, index) => {
              const isActivePath = location.pathname.startsWith(item.path);
              return (
                <li key={index}>
                  <Link
                    to={item.path}
                    className={`relative py-2 flex items-center transition-colors duration-300 ease-in-out rounded-lg ${isCollapsed ? 'justify-center px-2' : 'justify-start px-4'
                      } ${isActivePath
                        ? 'bg-[radial-gradient(50%_128.57%_at_50%_-36.61%,_#15A772_0%,_rgba(54,144,79,0)_100%)]'
                        : 'hover:bg-[rgba(255,255,255,0.1)]'
                      }`}
                  >
                    {/* Top border line */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                    {/* Icon + Label Row */}
                    <div
                      className={`flex items-center transition-all duration-300 ease-in-out ${isCollapsed ? 'gap-0' : 'gap-2'
                        }`}
                    >
                      {/* Icon wrapper with gradient border */}
                      <span
                        className={`p-[2px] rounded-full transition-all duration-300 ease-in-out ${isActivePath ? 'bg-gradient-to-b from-[#15A772] to-white' : 'bg-transparent'
                          }`}
                      >
                        {/* Actual Icon */}
                        <span
                          className={`flex items-center justify-center p-2 rounded-full text-2xl transition-all duration-300 ease-in-out ${isActivePath ? 'bg-[#2E5A4A] text-brand-green' : 'bg-transparent text-gray-400'
                            }`}
                        >
                          {item.icon}
                        </span>
                      </span>

                      {/* Conditionally render the Label */}
                      {!isCollapsed && (
                        <span
                          className={`text-lg transition-colors duration-300 ease-in-out ${isActivePath ? 'text-white' : 'text-gray-300'
                            }`}
                        >
                          {item.label}
                        </span>
                      )}
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Toggle Button at the bottom */}
      <button
        onClick={toggleSidebar}
        className={`flex items-center p-4 cursor-pointer text-gray-300 hover:text-white rounded-lg hover:bg-white/10 ${isCollapsed ? 'justify-center' : 'justify-start'
          }`}
      >
        <LeftOutlined
          className={`text-2xl transition-transform duration-300 ease-in-out ${isCollapsed ? 'rotate-180' : ''
            }`}
        />
      </button>
    </div>
  );
};

export default Sidebar;