import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { ContainerMap } from "@/components/map/ContainerMap";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Maximize2, Layers, Navigation, RefreshCw, Satellite, Map as MapIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function MapView() {
  const [isArabic] = useState(true);
  const [mapType, setMapType] = useState<"standard" | "satellite">("standard");

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold tracking-tight">
              {isArabic ? "الخريطة المباشرة" : "Live Map"}
            </h1>
            <Badge variant="secondary" className="bg-primary/10 text-primary animate-pulse">
              <span className="w-2 h-2 rounded-full bg-primary mr-2" />
              {isArabic ? "مباشر" : "Live"}
            </Badge>
          </div>
          <p className="text-muted-foreground mt-1">
            {isArabic
              ? "تتبع الحاويات والسائقين في الوقت الحقيقي"
              : "Track containers and drivers in real-time"}
          </p>
        </div>
        <div className="flex gap-2">
          <Button 
            variant={mapType === "standard" ? "default" : "outline"} 
            size="icon" 
            className="rounded-xl"
            onClick={() => setMapType("standard")}
          >
            <MapIcon className="w-4 h-4" />
          </Button>
          <Button 
            variant={mapType === "satellite" ? "default" : "outline"} 
            size="icon" 
            className="rounded-xl"
            onClick={() => setMapType("satellite")}
          >
            <Satellite className="w-4 h-4" />
          </Button>
          <div className="w-px bg-border mx-1" />
          <Button variant="outline" size="icon" className="rounded-xl">
            <RefreshCw className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-xl">
            <Navigation className="w-4 h-4" />
          </Button>
          <Button variant="outline" size="icon" className="rounded-xl">
            <Maximize2 className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Map Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {[
          { label: isArabic ? "حاويات متصلة" : "Connected Containers", value: "165", color: "text-primary" },
          { label: isArabic ? "شاحنات نشطة" : "Active Trucks", value: "8", color: "text-secondary" },
          { label: isArabic ? "مهام قيد التنفيذ" : "Tasks In Progress", value: "12", color: "text-chart-3" },
          { label: isArabic ? "تنبيهات جغرافية" : "Geo Alerts", value: "3", color: "text-destructive" },
        ].map((stat, index) => (
          <Card key={index} className="border-border/50">
            <CardContent className="p-4">
              <p className="text-xs text-muted-foreground">{stat.label}</p>
              <p className={`text-2xl font-bold mt-1 ${stat.color}`}>{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Full Map */}
      <Card className="border-border/50 shadow-sm overflow-hidden">
        <CardContent className="p-0">
          <div className="min-h-[calc(100vh-320px)] p-4">
            <ContainerMap isArabic={isArabic} />
          </div>
        </CardContent>
      </Card>
    </DashboardLayout>
  );
}
