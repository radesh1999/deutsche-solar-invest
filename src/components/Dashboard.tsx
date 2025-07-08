// import React, { useState } from 'react';
// import ProjectCard from '../pages/ProjektePage/components/ProjectCard';

// const tabs = [
//   'Projekte neu im Vertrieb',
//   'Projekt platziert und im Bau',
//   'Projekte im Betrieb',
//   'Zweitmarktprojekte'
// ];

// const Dashboard: React.FC = () => {
//   const [activeTab, setActiveTab] = useState(0);

//   return (
//     <div className="flex-1 p-8 overflow-y-auto">
//       <header className="mb-8">
//         <nav className="flex space-x-8 border-b border-gray-300">
//           {tabs.map((tab, index) => (
//             <button
//               key={index}
//               onClick={() => setActiveTab(index)}
//               className={`py-3 px-1 text-lg transition-colors duration-200 ${activeTab === index
//                   ? 'text-brand-green border-b-2 border-brand-green font-semibold'
//                   : 'text-brand-text-light hover:text-brand-text-dark'
//                 }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </nav>
//       </header>

//       <main>
//         {/* We'll render the same card 3 times to match the UI */}
//         <ProjectCard  />
//         <ProjectCard />
//         <ProjectCard />
//       </main>
//     </div>
//   );
// };

// export default Dashboard;