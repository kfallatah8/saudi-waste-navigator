import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from "recharts";
import { Download, Calendar, TrendingUp, TrendingDown, Minus } from "lucide-react";

const monthlyData = [
  { month: "يناير", revenue: 45000, orders: 120 },
  { month: "فبراير", revenue: 52000, orders: 145 },
  { month: "مارس", revenue: 48000, orders: 132 },
  { month: "أبريل", revenue: 61000, orders: 168 },
  { month: "مايو", revenue: 55000, orders: 152 },
  { month: "يونيو", revenue: 67000, orders: 185 },
];

const containerUsage = [
  { name: "20 قدم", value: 45, color: "hsl(150, 70%, 45%)" },
  { name: "30 قدم", value: 30, color: "hsl(203, 100%, 40%)" },
  { name: "40 قدم", value: 25, color: "hsl(45, 93%, 58%)" },
];

const kpis = [
  { title: "إجمالي الإيرادات", titleEn: "Total Revenue", value: "328,000 ريال", change: "+12%", trend: "up" },
  { title: "عدد الطلبات", titleEn: "Total Orders", value: "902", change: "+8%", trend: "up" },
  { title: "معدل الإشغال", titleEn: "Occupancy Rate", value: "76%", change: "+5%", trend: "up" },
  { title: "متوسط وقت التسليم", titleEn: "Avg Delivery Time", value: "2.3 ساعة", change: "-15%", trend: "down" },
];

export default function Reports() {
  const [isArabic] = useState(true);

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold">
            {isArabic ? "التقارير والتحليلات" : "Reports & Analytics"}
          </h1>
          <p className="text-muted-foreground">
            {isArabic ? "تحليل شامل لأداء العمليات" : "Comprehensive operations performance analysis"}
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Calendar className="w-4 h-4 ml-2" />
            {isArabic ? "آخر 6 أشهر" : "Last 6 Months"}
          </Button>
          <Button variant="outline">
            <Download className="w-4 h-4 ml-2" />
            {isArabic ? "تصدير" : "Export"}
          </Button>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        {kpis.map((kpi) => (
          <Card key={kpi.title}>
            <CardContent className="p-6">
              <p className="text-sm text-muted-foreground">{isArabic ? kpi.title : kpi.titleEn}</p>
              <div className="flex items-end justify-between mt-2">
                <p className="text-2xl font-bold">{kpi.value}</p>
                <div className={`flex items-center gap-1 text-sm ${
                  kpi.trend === "up" ? "text-primary" : kpi.trend === "down" ? "text-destructive" : "text-muted-foreground"
                }`}>
                  {kpi.trend === "up" ? <TrendingUp className="w-4 h-4" /> : 
                   kpi.trend === "down" ? <TrendingDown className="w-4 h-4" /> : 
                   <Minus className="w-4 h-4" />}
                  {kpi.change}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid lg:grid-cols-2 gap-6 mb-6">
        {/* Revenue Chart */}
        <Card>
          <CardHeader>
            <CardTitle>{isArabic ? "الإيرادات الشهرية" : "Monthly Revenue"}</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="month" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip />
                <Bar dataKey="revenue" fill="hsl(150, 70%, 45%)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Orders Trend */}
        <Card>
          <CardHeader>
            <CardTitle>{isArabic ? "اتجاه الطلبات" : "Orders Trend"}</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="month" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip />
                <Line type="monotone" dataKey="orders" stroke="hsl(203, 100%, 40%)" strokeWidth={2} dot={{ fill: "hsl(203, 100%, 40%)" }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Container Usage */}
      <Card>
        <CardHeader>
          <CardTitle>{isArabic ? "استخدام الحاويات حسب النوع" : "Container Usage by Type"}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <ResponsiveContainer width={200} height={200}>
              <PieChart>
                <Pie
                  data={containerUsage}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {containerUsage.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex-1 grid grid-cols-3 gap-4">
              {containerUsage.map((type) => (
                <div key={type.name} className="text-center">
                  <div className="w-4 h-4 rounded-full mx-auto mb-2" style={{ backgroundColor: type.color }} />
                  <p className="font-semibold">{type.value}%</p>
                  <p className="text-sm text-muted-foreground">{type.name}</p>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
}
