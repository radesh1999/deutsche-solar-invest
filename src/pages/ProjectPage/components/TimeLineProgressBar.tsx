import { Progress } from 'antd';

const markers = [
    { percent: 42, label: null },
    { percent: 60, label: 'Plan: April 2025' },
    { percent: 80, label: null },
    { percent: 95, label: 'Plan: April 2026' },
];

const TimelineProgressBar = () => {
    return (
        <div
            className="py-[40px] px-0 py-3 relative font-sans"
        >
            <Progress
                percent={42}
                showInfo={false}
                strokeLinecap="round"
                strokeWidth={20}
                strokeColor="#0f783c"
                trailColor="#dbece2"
            />

            <div
                className="absolute top-0 left-0 w-full h-full"
            >
                {markers.map((marker, index) => (
                    <div
                        key={index}
                        className="absolute"
                        style={{
                            left: `${marker.percent}%`,
                            top: '50%',
                            transform: 'translateY(-50%)',
                            height: '35px',
                        }}
                    >
                        <div
                            className="w-[2px] h-full bg-[#0f783c]"
                            style={{ transform: 'translateX(-50%)' }}
                        ></div>

                        {marker.label && (
                            <span
                                className="absolute text-[#0f783c] text-xs whitespace-nowrap"
                                style={{
                                    top: '130%',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                }}
                            >
                                {marker.label}
                            </span>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TimelineProgressBar;