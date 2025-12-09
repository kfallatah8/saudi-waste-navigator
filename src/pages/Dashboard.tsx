import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { ContainerStatusChart } from "@/components/dashboard/ContainerStatusChart";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { DriversList } from "@/components/dashboard/DriversList";
import { Package, Truck, Users, AlertTriangle, TrendingUp, Calendar, Plus, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ContainerMap } from "@/components/map/ContainerMap";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Dashboard() {
  const [isArabic] = useState(true);

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">
            {isArabic ? "مرحباً، أحمد" : "Welcome, Ahmed"} 
            <span className="inline-block animate-[wave_2s_ease-in-out_infinite] origin-[70%_70%] ml-2">👋</span>
          </h1>
          <p className="text-muted-foreground mt-1">
            {isArabic
              ? "إليك نظرة عامة على عملياتك اليوم"
              : "Here's an overview of your operations today"}
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="rounded-xl">
            <Calendar className="w-4 h-4 ml-2" />
            {isArabic ? "اليوم" : "Today"}
          </Button>
          <Button className="rounded-xl shadow-lg shadow-primary/20">
            <Plus className="w-4 h-4 ml-2" />
            {isArabic ? "طلب جديد" : "New Order"}
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatsCard
          title={isArabic ? "إجمالي الحاويات" : "Total Containers"}
          value="165"
          change={isArabic ? "+12 هذا الشهر" : "+12 this month"}
          changeType="positive"
          icon={Package}
          iconColor="bg-primary/10 text-primary"
        />
        <StatsCard
          title={isArabic ? "الحاويات المؤجرة" : "Rented Containers"}
          value="85"
          change={isArabic ? "51.5% معدل الإشغال" : "51.5% occupancy rate"}
          changeType="neutral"
          icon={TrendingUp}
          iconColor="bg-secondary/10 text-secondary"
        />
        <StatsCard
          title={isArabic ? "السائقين النشطين" : "Active Drivers"}
          value="12"
          change={isArabic ? "3 في مهام الآن" : "3 on tasks now"}
          changeType="neutral"
          icon={Truck}
          iconColor="bg-chart-1/10 text-chart-1"
        />
        <StatsCard
          title={isArabic ? "تنبيهات" : "Alerts"}
          value="4"
          change={isArabic ? "2 تحتاج اهتمام عاجل" : "2 need urgent attention"}
          changeType="negative"
          icon={AlertTriangle}
          iconColor="bg-destructive/10 text-destructive"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Map Section */}
        <Card className="lg:col-span-2 border-border/50 shadow-sm">
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold">
                {isArabic ? "خريطة الحاويات" : "Container Map"}
              </CardTitle>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                {isArabic ? "عرض الكل" : "View All"}
                <ArrowLeft className="w-4 h-4 mr-1" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <ContainerMap isArabic={isArabic} />
          </CardContent>
        </Card>

        {/* Sidebar */}
        <div className="space-y-6">
          <ContainerStatusChart isArabic={isArabic} />
          <DriversList isArabic={isArabic} />
        </div>
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentActivity isArabic={isArabic} />
        
        {/* Quick Actions */}
        <Card className="border-border/50 shadow-sm">
          <CardHeader>
            <CardTitle className="text-lg font-semibold">
              {isArabic ? "إجراءات سريعة" : "Quick Actions"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Package, label: isArabic ? "إضافة حاوية" : "Add Container", color: "group-hover:text-primary group-hover:bg-primary/10" },
                { icon: Truck, label: isArabic ? "إضافة سائق" : "Add Driver", color: "group-hover:text-secondary group-hover:bg-secondary/10" },
                { icon: Users, label: isArabic ? "عميل جديد" : "New Customer", color: "group-hover:text-chart-1 group-hover:bg-chart-1/10" },
                { icon: Calendar, label: isArabic ? "جدولة مهمة" : "Schedule Task", color: "group-hover:text-chart-3 group-hover:bg-chart-3/10" },
              ].map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="group h-auto py-6 flex-col gap-3 rounded-xl border-border/50 hover:border-primary/30 hover:shadow-md transition-all duration-300"
                >
                  <div className={`p-3 rounded-xl bg-muted transition-colors ${action.color}`}>
                    <action.icon className="w-5 h-5" />
                  </div>
                  <span className="text-sm font-medium">{action.label}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
