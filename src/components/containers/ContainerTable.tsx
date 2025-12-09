import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, MapPin, Eye, Edit, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const containers = [
  {
    id: "CNT-2847",
    type: "حاوية 20 قدم",
    typeEn: "20ft Container",
    customer: "شركة أحمد للإنشاءات",
    customerEn: "Ahmed Construction Co.",
    location: "الرياض - حي العليا",
    status: "rented",
    statusAr: "مؤجرة",
    statusEn: "Rented",
    dueDate: "2024-02-15",
    rent: "500 ريال/يوم",
  },
  {
    id: "CNT-1923",
    type: "حاوية 40 قدم",
    typeEn: "40ft Container",
    customer: "مؤسسة الخليج",
    customerEn: "Gulf Foundation",
    location: "الرياض - حي الملز",
    status: "full",
    statusAr: "ممتلئة",
    statusEn: "Full",
    dueDate: "2024-02-10",
    rent: "750 ريال/يوم",
  },
  {
    id: "CNT-3421",
    type: "حاوية 20 قدم",
    typeEn: "20ft Container",
    customer: "شركة البناء الحديث",
    customerEn: "Modern Build Co.",
    location: "الرياض - حي السليمانية",
    status: "overdue",
    statusAr: "متأخرة",
    statusEn: "Overdue",
    dueDate: "2024-02-05",
    rent: "500 ريال/يوم",
  },
  {
    id: "CNT-4512",
    type: "حاوية 30 قدم",
    typeEn: "30ft Container",
    customer: null,
    customerEn: null,
    location: "المستودع الرئيسي",
    status: "available",
    statusAr: "متاحة",
    statusEn: "Available",
    dueDate: null,
    rent: "600 ريال/يوم",
  },
  {
    id: "CNT-5678",
    type: "حاوية 20 قدم",
    typeEn: "20ft Container",
    customer: "شركة النجم",
    customerEn: "Al-Najm Company",
    location: "الرياض - حي الورود",
    status: "intransit",
    statusAr: "في الطريق",
    statusEn: "In Transit",
    dueDate: "2024-02-20",
    rent: "500 ريال/يوم",
  },
];

const statusStyles = {
  available: "bg-primary/10 text-primary hover:bg-primary/20",
  rented: "bg-secondary/10 text-secondary hover:bg-secondary/20",
  full: "bg-chart-3/10 text-chart-3 hover:bg-chart-3/20",
  intransit: "bg-chart-4/10 text-chart-4 hover:bg-chart-4/20",
  overdue: "bg-destructive/10 text-destructive hover:bg-destructive/20",
};

interface ContainerTableProps {
  isArabic?: boolean;
}

export function ContainerTable({ isArabic = true }: ContainerTableProps) {
  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-muted/50">
            <TableHead className="text-right">{isArabic ? "رقم الحاوية" : "Container ID"}</TableHead>
            <TableHead className="text-right">{isArabic ? "النوع" : "Type"}</TableHead>
            <TableHead className="text-right">{isArabic ? "العميل" : "Customer"}</TableHead>
            <TableHead className="text-right">{isArabic ? "الموقع" : "Location"}</TableHead>
            <TableHead className="text-right">{isArabic ? "الحالة" : "Status"}</TableHead>
            <TableHead className="text-right">{isArabic ? "تاريخ الاستحقاق" : "Due Date"}</TableHead>
            <TableHead className="text-center">{isArabic ? "الإجراءات" : "Actions"}</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {containers.map((container) => (
            <TableRow key={container.id} className="hover:bg-muted/30">
              <TableCell className="font-medium">{container.id}</TableCell>
              <TableCell>{isArabic ? container.type : container.typeEn}</TableCell>
              <TableCell>
                {container.customer ? (
                  isArabic ? container.customer : container.customerEn
                ) : (
                  <span className="text-muted-foreground">-</span>
                )}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-muted-foreground" />
                  <span className="text-sm">{container.location}</span>
                </div>
              </TableCell>
              <TableCell>
                <Badge
                  className={cn(
                    "font-normal",
                    statusStyles[container.status as keyof typeof statusStyles]
                  )}
                >
                  {isArabic ? container.statusAr : container.statusEn}
                </Badge>
              </TableCell>
              <TableCell>
                {container.dueDate ? (
                  <span className={cn(container.status === "overdue" && "text-destructive font-medium")}>
                    {container.dueDate}
                  </span>
                ) : (
                  <span className="text-muted-foreground">-</span>
                )}
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>
                      <Eye className="h-4 w-4 ml-2" />
                      {isArabic ? "عرض التفاصيل" : "View Details"}
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Edit className="h-4 w-4 ml-2" />
                      {isArabic ? "تعديل" : "Edit"}
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <MapPin className="h-4 w-4 ml-2" />
                      {isArabic ? "عرض على الخريطة" : "Show on Map"}
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">
                      <Trash2 className="h-4 w-4 ml-2" />
                      {isArabic ? "حذف" : "Delete"}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
