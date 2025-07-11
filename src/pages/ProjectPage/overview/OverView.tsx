import React from 'react';
import { Col, Slider } from 'antd';
import InfoCard from './InfoCard';
import DataRow from './DataRow';
import ProjectTimeline from '../components/TimeLineProgressBar'; // Reuse from previous step
import { Coins, Wechselrichter, Wechselrichterfrei, Power, KWP, KWPpower, LeaseTerm, DateAdd, ApproveIcon, Union, UnionLad, Settings, Transform, Wallet, Seeg, PowerExchange, HandShake, GrossProfit, GrossProfit1, OpenField, Tracker, Battery } from '../../../assets/images/index';
import CustomProgressBar from '../components/ProgressBar';

const OverView: React.FC = () => {

    return (
        <main className="overflow-y-auto pr-2 space-y-4 h-full">
            <div className="flex items-center space-x-4 mb-6">
                <div>
                    <h1 className="font-bold text-[17px] leading-[130%] tracking-[0]">Weidhausen</h1>
                    <p className="text-gray-500 text-[12px] leading-[130%] tracking-[0]">Waldstraße 17, 96279 Weidhausen</p>
                </div>
                <span className="bg-[#15A772] h-[30px] flex items-center text-white text-sm font-semibold px-3 rounded-[8px]">
                    Mediplan helm
                </span>
                <span className="bg-red-600 text-white text-sm font-bold px-4 py-1.5 rounded-full">
                    NEU!
                </span>
            </div>

            <div className="grid grid-cols-3 gap-6">
                <div className='col-span-1 grid grid-row-4 gap-6'>
                    <InfoCard>
                        <span className='flex flex-row gap-8'>
                            <DataRow icon={<img src={Wechselrichter} className='' />} label="11 WR" value="" />
                            <DataRow icon={<img src={Wechselrichterfrei} />} label="6 WR free" value="" />
                        </span>
                        <DataRow icon={<img src={Coins} />} label="2.015.842,40 €" value="" />
                        <DataRow icon={<img src={Power} />} label="1.681,90 kWp" value="" />
                    </InfoCard>
                    <InfoCard>
                        <DataRow icon={<img src={LeaseTerm} />} label="Lease term" value="20 years" />
                        <DataRow icon={<img src={DateAdd} />} label="Prolongation" value="10 years" />
                        <DataRow icon={<img src={ApproveIcon} />} label="Lease costs" value="5%" />
                    </InfoCard>
                    <InfoCard>
                        <DataRow icon={<img src={Settings} />} label="Service increase" value="12 €/kWp" secondaryValue="2 %" />
                        <DataRow icon={<img src={ApproveIcon} />} label="Lease costs increase" value="0 €" secondaryValue="0%" />
                        <DataRow icon={<img src={Transform} />} label="Trafo rental" value="0 €" />
                    </InfoCard>
                    <InfoCard>
                        <DataRow icon={<img src={GrossProfit} />} label={<div>Gross profit <br />(before costs)</div>} value="9,37 %" />
                        <DataRow icon={<img src={GrossProfit1} />} label={<div>Gross profit <br />(after costs)</div>} value="6,78 %" />
                    </InfoCard>
                </div>
                <div className="col-span-2 grid grid-cols-2 gap-6">
                    <div className='grid grid-cols-2 col-span-2 gap-6'>
                        <div className='grid grid-cols-2 gap-6'>
                            <Col className='grid grid-rows-2 gap-6'>
                                <InfoCard>
                                    <DataRow icon={<img src={KWP} />} label="1.198,55 €/kWp" value="" />
                                    <DataRow icon={<img src={KWPpower} />} label="1.410,00 kWh/kWp" value="" />
                                </InfoCard>
                                <InfoCard>
                                    <DataRow icon={<img src={Union} />} label="Canadian Solar" value="" />
                                    <DataRow icon={<img src={Wechselrichter} />} label="Huawei" value="" />
                                    <DataRow icon={<img src={UnionLad} />} label="Schlötter Freiland" value="" />
                                </InfoCard>
                            </Col>
                            <div className="rounded-lg bg-[#077836] top-0 left-0 w-full bg-brand-dark-green/90 text-white flex flex-col justify-around items-center p-4">
                                <div className="text-center flex flex-col justify-center items-center"> <img src={OpenField} /> <p className="text-sm mt-1">Open field</p> </div>
                                <div className="text-center flex flex-col justify-center items-center"> <img src={Tracker} /> <p className="text-sm mt-1">Tracker</p> </div>
                                <div className="text-center flex flex-col justify-center items-center"> <img src={Battery} /> <p className="text-sm mt-1">Storage</p> </div>
                            </div>
                        </div>
                        <div className="rounded-lg flex flex-row">
                            <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop" alt="Solar Panels" className='object-cover rounded-lg w-full' />
                        </div></div>
                    <div className='grid grid-cols-2 col-span-2 gap-6'>   <InfoCard>
                        <DataRow icon={<img src={HandShake} />} label="Direct sales/PPA" value="0,00 €/kWh" secondaryValue="0 %" />
                        <DataRow icon={<img src={PowerExchange} />} label="Power exchange" value="0,075 €/kWh" secondaryValue="100 %" />
                        <DataRow icon={<img src={Seeg} />} label="EEG" value="0,00 €/kWh" secondaryValue="0 %" />
                        <DataRow icon={<img src={Wallet} />} label="Average" value="0,075 €/kWh" />
                    </InfoCard>
                        <InfoCard>
                            <p className="text-sm font-medium text-brand-text-light mb-2">Sold 68%</p>
                            <CustomProgressBar percent={68} />

                            <div className="mt-6 relative">
                                <div className="flex justify-between items-end mb-2">
                                    <p className="text-sm font-medium text-brand-text-light">Evaluation</p>
                                </div>
                                <Slider
                                    disabled
                                    min={0}
                                    max={10}
                                    defaultValue={5}
                                    step={0.01}
                                    tooltip={{ open: true }}
                                    trackStyle={{ background: "transparent" }}
                                    railStyle={{ background: 'linear-gradient(to right, #ef4444, #f59e0b, #22c55e)', height: '22px', borderRadius: "20px" }}
                                    handleStyle={{ borderColor: 'linear-gradient(to right, #ef4444, #f59e0b, #22c55e)', borderWidth: 0 }}
                                />
                                <div className="flex justify-between text-xs text-gray-500 mt-4 px-2">
                                    {[...Array(11)].map((_, i) => <span key={i}>{i}</span>)}
                                </div>
                            </div>
                        </InfoCard></div>
                    <div className='grid grid-cols-1 col-span-2 gap-6'> <InfoCard>
                        <h3 className="font-bold mb-2">More information</h3>
                        <p className="text-sm text-gray-700">Purchase price of € 1,150/kWp is valid until 28.02.2025, after which it will be € 1,190/kWp</p>
                    </InfoCard></div>
                </div>
            </div>
            <div className="mt-6">
                <InfoCard className="p-6">
                    <ProjectTimeline />
                </InfoCard>
            </div>
        </main>
    );
};

export default OverView;