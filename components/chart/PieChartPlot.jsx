import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

function PieChartPlot({ data = [] }) {

     const colors = [
    "#8884d8",
    "#FA8072",
    "#AF69EE",
    "#3DED97",
    "#3AC7EB",
    "#F9A603",
  ];

  if (!data || data.length === 0) {
    return (
      <div className="flex justify-center items-center h-full text-gray-400">
        No data available
      </div>
    );
  }

  const categoryCount = data.reduce((acc, product) => {
    const category = product.category || "Unknown";
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.keys(categoryCount).map((category) => ({
    name: category,
    value: categoryCount[category],
  }));

  console.log("PieChart data:", chartData);

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart width={730} height={250}>
        <Pie
          data={chartData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius="80%"
          label
        >
          {chartData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={colors[index % colors.length]}
            />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default PieChartPlot;
