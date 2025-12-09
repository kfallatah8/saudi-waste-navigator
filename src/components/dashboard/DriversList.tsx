import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const drivers = [
  {
    id: 1,
    name: "محمد العتيبي",
    nameEn: "Mohammed Al-Otaibi",
    status: "active",
    statusAr: "متصل",
    statusEn: "Online",
    tasks: 5,
    completed: 3,
    avatar: "م",
  },
  {
    id: 2,
    name: "أحمد الشمري",
    nameEn: "Ahmed Al-Shammari",
    status: "active",
    statusAr: "متصل",
    statusEn: "Online",
    tasks: 4,
    completed: 4,
    avatar: "أ",
  },
  {
    id: 3,
    name: "خالد القحطاني",
    nameEn: "Khalid Al-Qahtani",
    status: "break",
    statusAr: "استراحة",
    statusEn: "On Break",
    tasks: 3,
    completed: 2,
    avatar: "خ",
  },
  {
    id: 4,
    name: "فهد الدوسري",
    nameEn: "Fahad Al-Dosari",
    status: "offline",
    statusAr: "غير متصل",
    statusEn: "Offline",
    tasks: 0,
    completed: 0,
    avatar: "ف",
  },
];

interface DriversListProps {
  isArabic?: boolean;
}

export function DriversList({ isArabic = true }: DriversListProps) {
  return (
    <div className="bg-card rounded-xl p-6 border border-border">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-lg">
          {isArabic ? "السائقين" : "Drivers"}
        </h3>
        <Badge variant="secondary">
          {drivers.filter(d => d.status === "active").length} {isArabic ? "متصل" : "online"}
        </Badge>
      </div>
      <div className="space-y-3">
        {drivers.map((driver) => (
          <div
            key={driver.id}
            className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors"
          >
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="font-semibold text-primary">{driver.avatar}</span>
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm truncate">
                {isArabic ? driver.name : driver.nameEn}
              </p>
              <div className="flex items-center gap-2 mt-0.5">
                <span
                  className={cn(
                    "w-2 h-2 rounded-full",
                    driver.status === "active" && "bg-primary",
                    driver.status === "break" && "bg-warning",
                    driver.status === "offline" && "bg-muted-foreground"
                  )}
                />
                <span className="text-xs text-muted-foreground">
                  {isArabic ? driver.statusAr : driver.statusEn}
                </span>
              </div>
            </div>
            <div className="text-left">
              <p className="text-sm font-medium">{driver.completed}/{driver.tasks}</p>
              <p className="text-xs text-muted-foreground">
                {isArabic ? "مهام" : "tasks"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
