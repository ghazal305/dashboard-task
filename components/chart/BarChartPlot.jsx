import {
  BarChart,
  XAxis,
  YAxis,
  Bar,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function BarChartPlot( { data = [] }) {
  if (!Array.isArray(data) || data.length === 0) {
    return (
      <div className="flex justify-center items-center h-full text-gray-400">
        No data available
      </div>
    );
  }

  const chartData = data.map((item, index) => ({
    label: item.name ?? `#${item.id ?? index}`,
    high: Number(item.high ?? item.price ?? 0),
    low: Number(item.low ?? item.stock ?? 0),
  }));

  console.log("BarChartPlot chartData:", chartData);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={chartData}>
        <XAxis dataKey="label" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="high" fill="#82ca9d" name="High" />
        <Bar dataKey="low" fill="#FA8072" name="Low" />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default BarChartPlot;
