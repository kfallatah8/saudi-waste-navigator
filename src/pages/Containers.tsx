import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { ContainerTable } from "@/components/containers/ContainerTable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Filter, Download, Upload } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Containers() {
  const [isArabic] = useState(true);

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold">
            {isArabic ? "إدارة الحاويات" : "Container Management"}
          </h1>
          <p className="text-muted-foreground">
            {isArabic
              ? "إدارة ومتابعة جميع الحاويات"
              : "Manage and track all containers"}
          </p>
        </div>
        <Button className="shrink-0">
          <Plus className="w-4 h-4 ml-2" />
          {isArabic ? "إضافة حاوية" : "Add Container"}
        </Button>
      </div>

      {/* Filters */}
      <div className="bg-card rounded-xl p-4 border border-border mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder={isArabic ? "بحث بالرقم أو العميل..." : "Search by ID or customer..."}
              className="pr-10"
            />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder={isArabic ? "الحالة" : "Status"} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{isArabic ? "جميع الحالات" : "All Status"}</SelectItem>
              <SelectItem value="available">{isArabic ? "متاحة" : "Available"}</SelectItem>
              <SelectItem value="rented">{isArabic ? "مؤجرة" : "Rented"}</SelectItem>
              <SelectItem value="full">{isArabic ? "ممتلئة" : "Full"}</SelectItem>
              <SelectItem value="intransit">{isArabic ? "في الطريق" : "In Transit"}</SelectItem>
              <SelectItem value="overdue">{isArabic ? "متأخرة" : "Overdue"}</SelectItem>
            </SelectContent>
          </Select>
          <Select defaultValue="all">
            <SelectTrigger className="w-full sm:w-[180px]">
              <SelectValue placeholder={isArabic ? "النوع" : "Type"} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{isArabic ? "جميع الأنواع" : "All Types"}</SelectItem>
              <SelectItem value="20ft">{isArabic ? "20 قدم" : "20ft"}</SelectItem>
              <SelectItem value="30ft">{isArabic ? "30 قدم" : "30ft"}</SelectItem>
              <SelectItem value="40ft">{isArabic ? "40 قدم" : "40ft"}</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <Filter className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Download className="w-4 h-4" />
            </Button>
            <Button variant="outline" size="icon">
              <Upload className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mb-6">
        {[
          { label: isArabic ? "الإجمالي" : "Total", value: "165", color: "text-foreground" },
          { label: isArabic ? "متاحة" : "Available", value: "45", color: "text-primary" },
          { label: isArabic ? "مؤجرة" : "Rented", value: "85", color: "text-secondary" },
          { label: isArabic ? "ممتلئة" : "Full", value: "23", color: "text-chart-3" },
          { label: isArabic ? "متأخرة" : "Overdue", value: "12", color: "text-destructive" },
        ].map((stat) => (
          <div key={stat.label} className="bg-card rounded-lg p-4 border border-border text-center">
            <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Table */}
      <ContainerTable isArabic={isArabic} />
    </DashboardLayout>
  );
}
