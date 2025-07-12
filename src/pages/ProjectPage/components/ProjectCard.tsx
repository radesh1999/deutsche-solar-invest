import React from 'react';
import {
  Wechselrichter,
  Coins,
  Chart,
  KWP,
  Power,
  Wechselrichterfrei,
  KWPpower,
  OpenField,
  Tracker,
  Battery
} from '../../../assets/images/index';
import CustomProgressBar from './ProgressBar';
import TimelineProgressBar from './TimeLineProgressBar';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  id: number;
  name: string;
  label: string;
  inverters: string;
  pricePerKWp: string;
  freeInverters: string;
  energyYield: string;
  totalPrice: string;
  profit: string;
  capacity: string;
  sold: number;
  image: string;
}
// Placeholder icons for custom visuals
const InverterIcon = () => <img src={Wechselrichter} className="w-[14px] h-[24px] flex items-center justify-center text-xs" />;
const InverterFreeIcon = () => <img src={Wechselrichterfrei} className="w-[14px] h-[24px]" />;

// Specific icons for the green overlay
const FreilandanlageIcon = () => <div className="w-8 h-8 border-2 border-white flex flex-wrap p-0.5"><div className="w-full h-1/2 bg-white/50"></div></div>;
const TrackerIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3M3.75 15.75L7.5 12m0 0l-3.75-3.75m10.5 0L10.5 12m3.75 0l-3.75 3.75" /></svg>;
const SpeicherIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-3h6m-3-6h.01M5 12h.01M19 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  name,
  label,
  inverters,
  pricePerKWp,
  freeInverters,
  energyYield,
  totalPrice,
  profit,
  capacity,
  sold,
  image,
}) => {
  return (
    <Link to={`/projects/${id}`} className="no-underline">
      <div className="bg-white rounded-xl shadow-md p-6 mb-6">
        <div className="flex justify-between items-start">
          <div className="flex flex-row items-center space-x-3">
            <span className="bg-[#15A772] h-[30px] flex items-center text-white text-sm font-semibold px-3 rounded-[8px]">
              {label}
            </span>
            <h2 className="font-bold text-[17px] leading-[130%] tracking-[0] font-inter">
              {name}
            </h2>
          </div>
        </div>

        <div className="mt-4 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-4 text-brand-text-dark">
              <div className='flex flex-row gap-x-4'>
                <span className="flex items-center space-x-3"><InverterIcon /><p>{inverters}</p></span>
                <span className="flex items-center space-x-3"><InverterFreeIcon /><p>{freeInverters}</p></span>
              </div>
              <div className="flex items-center justify-end space-x-3"><p>{pricePerKWp}</p><img src={KWP} className="text-2xl text-gray-500" /></div>
              <div className="flex items-center space-x-3"><img src={Coins} className="text-2xl text-gray-500" /><p>{totalPrice}</p></div>
              <div className="flex items-center justify-end space-x-3"><p>{energyYield}</p><img src={KWPpower} className="text-2xl bg-white-500" /></div>
              <div className="flex items-center space-x-3"><img src={Power} className="text-2xl text-gray-500" /><p>{profit}</p></div>
              <div className="flex items-center justify-end space-x-3"><p>{capacity}</p><img src={Chart} className="text-2xl text-gray-500" /></div>
            </div>
            <div className="mt-6 w-[70%] ">
              <p className="text-sm font-medium text-brand-text-light mb-2">Verkauft {sold}%</p>
              <CustomProgressBar percent={75} />
            </div>
          </div>

          <div className="grid grid-cols-5 gap-x-1 gap-y-4 rounded-lg overflow-hidden h-55">
            <div className="lg:col-span-1 w-full rounded-lg bg-[#077836] bg-brand-dark-green/90 text-white flex flex-col justify-around items-center p-4">
              <div className="text-center flex flex-col justify-center items-center"> <img src={OpenField} className='w-6 h-6' /> <p className="text-sm mt-1">Open field</p> </div>
              <div className="text-center flex flex-col justify-center items-center"> <img src={Tracker} className='w-6 h-6' /> <p className="text-sm mt-1">Tracker</p> </div>
              <div className="text-center flex flex-col justify-center items-center"> <img src={Battery} className='w-6 h-6' /> <p className="text-sm mt-1">Storage</p> </div>
            </div>
            <div className='col-span-4 w-full rounded-lg overflow-hidden'>
              <img src={image} alt={name} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
        <div className='mt-6'>
          <TimelineProgressBar />
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;