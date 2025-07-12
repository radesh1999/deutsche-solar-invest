import React, { useState, useEffect } from 'react';
import { LeftOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/svg/logo.svg';
import {
  CalculationsIcon, ConsultingIcon, Home, InvesterMenuIcon,
  ProjectDevIcon, ProjectsIcon, UserMenuIcon
} from '../assets/images';

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
  const [isExpanded, setIsExpanded] = useState(true);
  const [isTablet, setIsTablet] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      const isNowTablet = window.innerWidth < 1280;
      setIsTablet(isNowTablet);
      setIsExpanded(!isNowTablet); // Expanded by default on desktop, collapsed on tablet
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => setIsExpanded((prev) => !prev);

  const renderNav = () => (
    <ul>
      {navItems.map((item, index) => {
        const isActivePath = location.pathname.startsWith(item.path);
        return (
          <li key={index}>
            <Link
              to={item.path}
              className={`relative py-2 flex items-center rounded-lg transition-colors duration-300
                ${!isExpanded ? 'justify-center px-2' : 'justify-start px-4'}
                ${isActivePath
                  ? 'bg-[radial-gradient(50%_128.57%_at_50%_-36.61%,_#15A772_0%,_rgba(54,144,79,0)_100%)]'
                  : 'hover:bg-[rgba(255,255,255,0.1)]'
                }`}
              onClick={() => isTablet && isExpanded && setIsExpanded(false)}
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              <div className={`flex items-center ${!isExpanded ? 'gap-0' : 'gap-2'}`}>
                <span
                  className={`p-[2px] rounded-full ${isActivePath ? 'bg-gradient-to-b from-[#15A772] to-white' : 'bg-transparent'}`}
                >
                  <span
                    className={`flex items-center justify-center p-2 rounded-full text-2xl
                    ${isActivePath ? 'bg-[#2E5A4A] text-brand-green' : 'text-gray-400'}`}
                  >
                    {item.icon}
                  </span>
                </span>
                {isExpanded && (
                  <span className={`text-lg ${isActivePath ? 'text-white' : 'text-gray-300'}`}>
                    {item.label}
                  </span>
                )}
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      {/* Sidebar (inline on laptop, absolute drawer on tablet when expanded) */}
      <div
        className={`
          bg-[#2E5A4A] text-white flex flex-col justify-between py-4 z-30 transition-all duration-300
          ${isExpanded ? 'w-72' : 'w-24'}
          ${isTablet && isExpanded ? 'absolute top-0 left-0 h-full shadow-xl' : 'relative'}
        `}
      >
        {/* Logo & title */}
        <div>
          <div className={`flex items-center p-2 ${!isExpanded ? 'justify-center' : 'space-x-3'}`}>
            <img src={Logo} alt="logo" className="w-20" />
            {isExpanded && (
              <div>
                <h1 className="font-semibold text-[17px] leading-tight font-inter whitespace-nowrap">Deutsche</h1>
                <h1 className="font-semibold text-[17px] leading-tight font-inter whitespace-nowrap">Solar Invest</h1>
              </div>
            )}
          </div>
          <nav className="mt-6">{renderNav()}</nav>
        </div>

        {/* Toggle Button (always visible) */}
        <button
          onClick={toggleSidebar}
          className={`center-gradient-border flex items-center p-4 text-gray-300 hover:text-white transition-all
            ${!isExpanded ? 'justify-center' : 'justify-center'}`}
        >
          <LeftOutlined className={`text-xl transition-transform ${!isExpanded ? 'rotate-180' : 'rotate-0'}`} />
        </button>
      </div>

      {/* Backdrop only for tablet drawer */}
      {isTablet && isExpanded && (
        <div
          className="fixed inset-0 bg-black/30 z-20"
          onClick={() => setIsExpanded(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
