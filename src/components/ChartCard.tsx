import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar
} from "recharts";

type ChartCardProps = {
  title: string;
  type: "line" | "bar" | "pie" | "radar";
  data: any[];
};

const COLORS = ["#3b82f6", "#10b981", "#f43f5e", "#facc15", "#8b5cf6"];

export default function ChartCard({ title, type, data }: ChartCardProps) {
  return (
    <div className="bg-gray-900 rounded-2xl p-6 shadow-lg flex flex-col items-center transition-transform transform hover:scale-105 mb-6">
      <h3 className="text-white text-lg font-semibold mb-4">{title}</h3>

      {type === "line" && (
        <LineChart width={300} height={200} data={data}>
          <CartesianGrid stroke="#374151" />
          <XAxis dataKey="name" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="value" stroke="#3b82f6" strokeWidth={2} />
        </LineChart>
      )}

      {type === "bar" && (
        <BarChart width={300} height={200} data={data}>
          <CartesianGrid stroke="#374151" />
          <XAxis dataKey="name" stroke="#fff" />
          <YAxis stroke="#fff" />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#3b82f6" />
        </BarChart>
      )}

      {type === "pie" && (
        <PieChart width={300} height={200}>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70} label>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      )}

      {type === "radar" && (
        <RadarChart cx={150} cy={100} outerRadius={80} width={300} height={200} data={data}>
          <PolarGrid stroke="#374151" />
          <PolarAngleAxis dataKey="metric" stroke="#fff" />
          <PolarRadiusAxis stroke="#fff" />
          <Radar name={title} dataKey="value" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.6} />
          <Tooltip />
        </RadarChart>
      )}
    </div>
  );
}
