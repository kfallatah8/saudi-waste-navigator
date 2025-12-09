import { useState } from "react";
import { MapPin, Package, Truck, Navigation, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const containers = [
  { id: 1, lat: 24.7136, lng: 46.6753, status: "available", location: "الرياض - حي العليا" },
  { id: 2, lat: 24.6877, lng: 46.7219, status: "rented", location: "الرياض - حي الملز" },
  { id: 3, lat: 24.7241, lng: 46.6421, status: "full", location: "الرياض - حي السليمانية" },
  { id: 4, lat: 24.6980, lng: 46.7003, status: "intransit", location: "الرياض - حي الورود" },
  { id: 5, lat: 24.7356, lng: 46.6612, status: "overdue", location: "الرياض - حي النخيل" },
];

const statusConfig = {
  available: { label: "متاحة", labelEn: "Available", color: "bg-primary", textColor: "text-primary", shadow: "shadow-[0_0_15px_hsl(var(--primary)/0.5)]" },
  rented: { label: "مؤجرة", labelEn: "Rented", color: "bg-secondary", textColor: "text-secondary", shadow: "shadow-[0_0_15px_hsl(var(--secondary)/0.5)]" },
  full: { label: "ممتلئة", labelEn: "Full", color: "bg-chart-3", textColor: "text-chart-3", shadow: "shadow-[0_0_15px_hsl(var(--chart-3)/0.5)]" },
  intransit: { label: "في الطريق", labelEn: "In Transit", color: "bg-chart-4", textColor: "text-chart-4", shadow: "shadow-[0_0_15px_hsl(var(--chart-4)/0.5)]" },
  overdue: { label: "متأخرة", labelEn: "Overdue", color: "bg-destructive", textColor: "text-destructive", shadow: "shadow-[0_0_15px_hsl(var(--destructive)/0.5)]" },
};

interface ContainerMapProps {
  isArabic?: boolean;
}

export function ContainerMap({ isArabic = true }: ContainerMapProps) {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);
  const [selectedContainer, setSelectedContainer] = useState<typeof containers[0] | null>(null);

  const filteredContainers = selectedFilter
    ? containers.filter((c) => c.status === selectedFilter)
    : containers;

  return (
    <div className="h-full flex flex-col">
      {/* Filter Pills */}
      <div className="flex flex-wrap gap-2 mb-4">
        <Button
          variant={selectedFilter === null ? "default" : "outline"}
          size="sm"
          onClick={() => setSelectedFilter(null)}
          className="rounded-full transition-all duration-200"
        >
          {isArabic ? "الكل" : "All"} ({containers.length})
        </Button>
        {Object.entries(statusConfig).map(([key, config]) => (
          <Button
            key={key}
            variant={selectedFilter === key ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedFilter(key)}
            className={cn(
              "rounded-full transition-all duration-200",
              selectedFilter === key && config.color
            )}
          >
            <span className={cn("w-2 h-2 rounded-full mr-2", config.color)} />
            {isArabic ? config.label : config.labelEn} (
            {containers.filter((c) => c.status === key).length})
          </Button>
        ))}
      </div>

      {/* Map Container */}
      <div className="flex-1 relative bg-gradient-to-br from-muted/50 to-muted rounded-2xl overflow-hidden min-h-[400px] border border-border/50">
        {/* Animated Grid Background */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-30" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="mapGrid" width="5" height="5" patternUnits="userSpaceOnUse">
                <path d="M 5 0 L 0 0 0 5" fill="none" stroke="currentColor" strokeWidth="0.2" className="text-border" />
              </pattern>
              <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.1" />
                <stop offset="100%" stopColor="transparent" />
              </radialGradient>
            </defs>
            <rect width="100" height="100" fill="url(#mapGrid)" />
            <rect width="100" height="100" fill="url(#mapGlow)" />
          </svg>
        </div>

        {/* Simulated roads */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M 10 50 Q 30 30 50 50 T 90 50" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-muted-foreground" />
          <path d="M 50 10 Q 30 30 50 50 T 50 90" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-muted-foreground" />
          <path d="M 20 20 L 80 80" fill="none" stroke="currentColor" strokeWidth="0.3" className="text-muted-foreground" />
        </svg>

        {/* Container Markers */}
        <div className="absolute inset-0 p-8">
          {filteredContainers.map((container, index) => {
            const config = statusConfig[container.status as keyof typeof statusConfig];
            const position = {
              top: `${20 + (index * 15) % 60}%`,
              left: `${15 + (index * 20) % 70}%`,
            };

            return (
              <button
                key={container.id}
                className={cn(
                  "absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-primary/50 rounded-full",
                  selectedContainer?.id === container.id && "scale-125 z-20"
                )}
                style={position}
                onClick={() => setSelectedContainer(selectedContainer?.id === container.id ? null : container)}
              >
                <div className={cn(
                  "relative p-3 rounded-full transition-all duration-300",
                  config.color,
                  config.shadow
                )}>
                  <Package className="w-5 h-5 text-card" />
                  {/* Pulse ring */}
                  <span className={cn(
                    "absolute inset-0 rounded-full animate-ping opacity-40",
                    config.color
                  )} />
                </div>
                
                {/* Info Popup */}
                {selectedContainer?.id === container.id && (
                  <div className="absolute top-full mt-3 right-1/2 translate-x-1/2 bg-card/95 backdrop-blur-xl rounded-xl shadow-2xl p-4 min-w-[220px] z-30 border border-border/50 animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="absolute -top-2 right-1/2 translate-x-1/2 w-4 h-4 bg-card rotate-45 border-l border-t border-border/50" />
                    <div className="relative">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-lg">#{container.id}</span>
                        <Badge className={cn("text-xs", config.color)}>
                          {isArabic ? config.label : config.labelEn}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground flex items-center gap-2">
                        <MapPin className="w-3 h-3" />
                        {container.location}
                      </p>
                      <div className="mt-3 pt-3 border-t border-border/50">
                        <Button size="sm" className="w-full" variant="outline">
                          <Navigation className="w-3 h-3 ml-1" />
                          {isArabic ? "انتقال" : "Navigate"}
                        </Button>
                      </div>
                    </div>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Animated Trucks */}
        <div className="absolute top-1/3 left-1/4" style={{ animation: "float 3s ease-in-out infinite" }}>
          <div className="p-2.5 rounded-xl bg-chart-4 shadow-lg shadow-chart-4/30">
            <Truck className="w-4 h-4 text-card" />
          </div>
        </div>
        <div className="absolute top-2/3 left-2/3" style={{ animation: "float 3s ease-in-out infinite 1.5s" }}>
          <div className="p-2.5 rounded-xl bg-chart-4 shadow-lg shadow-chart-4/30">
            <Truck className="w-4 h-4 text-card" />
          </div>
        </div>

        {/* Map Legend */}
        <div className="absolute bottom-4 right-4 bg-card/90 backdrop-blur-xl rounded-xl p-4 shadow-xl border border-border/50">
          <div className="flex items-center gap-2 mb-3">
            <Layers className="w-4 h-4 text-muted-foreground" />
            <p className="text-xs font-semibold">{isArabic ? "دليل الخريطة" : "Map Legend"}</p>
          </div>
          <div className="space-y-2">
            {Object.entries(statusConfig).map(([key, config]) => (
              <div key={key} className="flex items-center gap-2">
                <div className={cn("w-3 h-3 rounded-full", config.color)} />
                <span className="text-xs text-muted-foreground">{isArabic ? config.label : config.labelEn}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Map controls */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <Button size="icon" variant="secondary" className="h-9 w-9 rounded-lg shadow-lg">
            <span className="text-lg font-bold">+</span>
          </Button>
          <Button size="icon" variant="secondary" className="h-9 w-9 rounded-lg shadow-lg">
            <span className="text-lg font-bold">−</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
