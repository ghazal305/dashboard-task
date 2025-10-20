import {
  LineChart,
  XAxis,
  YAxis,
  Line,
  Tooltip,
  Legend,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function LineChartPlot({data}) {
  if (!data || data.length === 0) {
    return (
      <div className="flex justify-center items-center h-full text-gray-400">
        No data available
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" /> 
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="price"
          stroke="#8884d8"
          strokeWidth={2}
          name="Price"
        />
        <Line
          type="monotone"
          dataKey="stock"
          stroke="#82ca9d"
          strokeWidth={2}
          name="Stock"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default LineChartPlot;
