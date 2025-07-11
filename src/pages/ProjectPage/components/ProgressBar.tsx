import { Progress } from 'antd';

const CustomProgressBar = ({ percent }: { percent: number }) => {
    return (
        <Progress
            percent={percent}
            showInfo={false}
            strokeLinecap="round"
            strokeWidth={22}
            trailColor="#e0e0e8"
            strokeColor={{
                from: '#282875',
                to: '#101030',
            }}
        />
    );
};

export default CustomProgressBar;