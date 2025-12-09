import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";

const data = [
  { name: "متاحة", nameEn: "Available", value: 45, color: "hsl(150, 70%, 45%)" },
  { name: "مؤجرة", nameEn: "Rented", value: 85, color: "hsl(203, 100%, 40%)" },
  { name: "في الطريق", nameEn: "In Transit", value: 23, color: "hsl(45, 93%, 58%)" },
  { name: "ممتلئة", nameEn: "Full", value: 12, color: "hsl(0, 84%, 60%)" },
];

interface ContainerStatusChartProps {
  isArabic?: boolean;
}

export function ContainerStatusChart({ isArabic = true }: ContainerStatusChartProps) {
  return (
    <div className="bg-card rounded-xl p-6 border border-border">
      <h3 className="font-semibold text-lg mb-4">
        {isArabic ? "حالة الحاويات" : "Container Status"}
      </h3>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={4}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip
            formatter={(value, name) => [value, isArabic ? name : data.find(d => d.name === name)?.nameEn]}
          />
          <Legend
            formatter={(value) => {
              const item = data.find(d => d.name === value);
              return isArabic ? item?.name : item?.nameEn;
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
