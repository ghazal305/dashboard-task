import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

function AreaChartPlot({ data = [] }) {
  if (!Array.isArray(data) || data.length === 0) {
    return (
      <div className="flex justify-center items-center h-full text-gray-400">
        No data available
      </div>
    );
  }

  const chartData = data.map((p, i) => ({
    label: p.name ?? `#${p.id ?? i}`,
    price: Number(p.price ?? 0),
    stock: Number(p.stock ?? 0),
  }));

  console.log("AreaChart simple chartData:", chartData);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={chartData}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
          </linearGradient>
          <linearGradient id="colorStock" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
          </linearGradient>
        </defs>

        <XAxis dataKey="label" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="price"
          stroke="#8884d8"
          fill="url(#colorPrice)"
          name="Price"
        />
        <Area
          type="monotone"
          dataKey="stock"
          stroke="#82ca9d"
          fill="url(#colorStock)"
          name="Stock"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default AreaChartPlot;
