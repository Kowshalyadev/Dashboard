// src/components/Overview.jsx
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { date: "Mar 1", visitors: 400 },
  { date: "Mar 5", visitors: 1200 },
  { date: "Mar 10", visitors: 900 },
  { date: "Mar 15", visitors: 700 },
  { date: "Mar 20", visitors: 1400 },
  { date: "Mar 25", visitors: 900 },
  { date: "Mar 30", visitors: 1100 },
];

export default function Overview() {
  return (
    <div className="bg-[#161b2d] p-6 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Overview</h2>
        <span className="text-gray-400">Last 30 days</span>
      </div>

      <div className="text-3xl font-bold mb-2">13.49K</div>
      <div className="text-green-400 mb-6">+46.96% (897)</div>

      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="date" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip />
          <Line type="monotone" dataKey="visitors" stroke="#00d9ff" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
