import {
  RadarChart,
  Radar,
  PolarAngleAxis,
  PolarGrid,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function RadarChartPlot({data}) {
   if (!data || data.length === 0) {
    return (
      <div className="flex justify-center items-center h-full text-gray-400">
        No data available
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart outerRadius={90} width={730} height={250} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="name" />
        <Radar
          name="Stock"
          dataKey="stock"
          stroke="#82ca9d"
          fill="#82ca9d"
          fillOpacity={0.6}
        />
        <Legend />
        <Tooltip />
      </RadarChart>
    </ResponsiveContainer>
  );
}

export default RadarChartPlot;
