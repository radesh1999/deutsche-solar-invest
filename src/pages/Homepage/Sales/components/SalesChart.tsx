import React, { useState } from 'react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import { Checkbox } from 'antd';
import { salesData } from './salesData';

const SalesChart: React.FC = () => {
    const [showSubmitted, setShowSubmitted] = useState(true);
    const [showSettled, setShowSettled] = useState(true);

    const transformedData = salesData.chartData.labels.map((label, index) => ({
        name: label,
        submitted: salesData.chartData.submitted[index],
        settled: salesData.chartData.settled[index],
    }));

    const formatYAxisTick = (value: number): string => {
        if (value === 0) return '(Euro) 0';
        if (value >= 1000000) return `${(value / 1000000).toFixed(2).replace('.', ',')} Mio.`;
        if (value >= 1000) return `${value / 1000}k`;
        return String(value);
    };

    return (
        <div className="bg-white rounded-xl shadow-sm p-6">
            {/* Header & Legend */}
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center space-x-4 text-sm">
                    <div className="custom-checkbox1 flex items-center space-x-2">
                        <Checkbox
                            checked={showSubmitted}
                            onChange={() => setShowSubmitted(prev => !prev)}
                        />
                        <span className='ml-2'>submitted</span>
                    </div>
                    <div className="custom-checkbox2 flex items-center">
                        <Checkbox
                            checked={showSettled}
                            onChange={() => setShowSettled(prev => !prev)}
                        />
                        <span className='ml-2'>settled</span>
                    </div>
                </div>
                <h2 className="text-lg font-bold text-brand-text-dark">Sales</h2>

            </div>

            {/* Chart */}
            <div className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={transformedData}
                        margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
                        barGap={4}
                    >
                        <CartesianGrid strokeDasharray="4 4" vertical={false} />
                        <XAxis
                            dataKey="name"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#6B7280', fontSize: 12 }}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tickFormatter={formatYAxisTick}
                            tick={{ fill: '#6B7280', fontSize: 12 }}
                            domain={[0, 1500000]}
                            ticks={[0, 250000, 500000, 750000, 1000000, 1250000, 1500000]}
                        />
                        <Tooltip
                            cursor={{ fill: 'rgba(230, 230, 230, 0.5)' }}
                            contentStyle={{
                                backgroundColor: '#fff',
                                border: '1px solid #ccc',
                                borderRadius: '0.5rem',
                            }}
                            formatter={(value: number) => `€${value.toLocaleString()}`}
                        />
                        {showSubmitted && (
                            <Bar dataKey="submitted" fill="#FBBF24" radius={[2, 2, 0, 0]} />
                        )}
                        {showSettled && (
                            <Bar dataKey="settled" fill="#1E4631" radius={[2, 2, 0, 0]} />
                        )}
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default SalesChart;
