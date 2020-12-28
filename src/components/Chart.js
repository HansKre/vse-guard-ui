import React from 'react';
import { PieChart, Pie } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ReferenceLine } from 'recharts';
import { AreaChart, Area } from 'recharts';
import { ResponsiveContainer } from 'recharts';

const pieChart = (chartDefinition) => {
    return (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <PieChart >
                    <CartesianGrid strokeDasharray="3 3" />
                    <Pie data={chartDefinition.data.innerPie} dataKey="value" cx={200} cy={150} outerRadius={60} fill="#8884d8" />
                    <Pie data={chartDefinition.data.outerPie} dataKey="value" cx={200} cy={150} innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

const barChart = (chartDefinition) => {
    return (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <BarChart
                    data={chartDefinition.data}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <ReferenceLine y={0} stroke="#000" />
                    <Bar dataKey="pv" fill="#8884d8" />
                    <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

const areaChart = (chartDefinition) => {
    return (
        <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
                <AreaChart
                    data={chartDefinition.data}
                    margin={{
                        top: 10, right: 30, left: 0, bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                    <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

export default function Chart({ chartDefinition }) {
    if (chartDefinition && chartDefinition.style) {
        switch (chartDefinition.style) {
            case 'pie':
                return pieChart(chartDefinition);
            case 'bar':
                return barChart(chartDefinition);
            case 'area':
                return areaChart(chartDefinition);
            default:
                return;
        }
    }
}