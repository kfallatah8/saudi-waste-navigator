import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Plus, Search, Download, Eye, Send, MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const invoices = [
  {
    id: "INV-2024-001",
    customer: "شركة أحمد للإنشاءات",
    customerEn: "Ahmed Construction",
    amount: "15,000 ريال",
    date: "2024-02-10",
    dueDate: "2024-02-25",
    status: "paid",
    statusAr: "مدفوعة",
    statusEn: "Paid",
  },
  {
    id: "INV-2024-002",
    customer: "مؤسسة الخليج",
    customerEn: "Gulf Foundation",
    amount: "8,500 ريال",
    date: "2024-02-08",
    dueDate: "2024-02-23",
    status: "pending",
    statusAr: "معلقة",
    statusEn: "Pending",
  },
  {
    id: "INV-2024-003",
    customer: "شركة البناء الحديث",
    customerEn: "Modern Build Co.",
    amount: "22,750 ريال",
    date: "2024-02-05",
    dueDate: "2024-02-20",
    status: "overdue",
    statusAr: "متأخرة",
    statusEn: "Overdue",
  },
  {
    id: "INV-2024-004",
    customer: "شركة النجم",
    customerEn: "Al-Najm Company",
    amount: "5,000 ريال",
    date: "2024-02-12",
    dueDate: "2024-02-27",
    status: "draft",
    statusAr: "مسودة",
    statusEn: "Draft",
  },
];

const statusStyles = {
  paid: "bg-primary/10 text-primary",
  pending: "bg-chart-3/10 text-chart-3",
  overdue: "bg-destructive/10 text-destructive",
  draft: "bg-muted text-muted-foreground",
};

export default function Invoices() {
  const [isArabic] = useState(true);

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold">
            {isArabic ? "الفواتير" : "Invoices"}
          </h1>
          <p className="text-muted-foreground">
            {isArabic ? "إدارة الفواتير والمدفوعات" : "Manage invoices and payments"}
          </p>
        </div>
        <Button className="shrink-0">
          <Plus className="w-4 h-4 ml-2" />
          {isArabic ? "فاتورة جديدة" : "New Invoice"}
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { label: isArabic ? "إجمالي الإيرادات" : "Total Revenue", value: "51,250 ريال", color: "text-primary" },
          { label: isArabic ? "معلقة" : "Pending", value: "8,500 ريال", color: "text-chart-3" },
          { label: isArabic ? "متأخرة" : "Overdue", value: "22,750 ريال", color: "text-destructive" },
          { label: isArabic ? "هذا الشهر" : "This Month", value: "51,250 ريال", color: "text-foreground" },
        ].map((stat) => (
          <div key={stat.label} className="bg-card rounded-xl p-4 border border-border">
            <p className={cn("text-2xl font-bold", stat.color)}>{stat.value}</p>
            <p className="text-sm text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Search */}
      <div className="flex gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder={isArabic ? "بحث بالرقم أو العميل..." : "Search by ID or customer..."}
            className="pr-10"
          />
        </div>
        <Button variant="outline">
          <Download className="w-4 h-4 ml-2" />
          {isArabic ? "تصدير" : "Export"}
        </Button>
      </div>

      {/* Table */}
      <div className="bg-card rounded-xl border border-border overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="text-right">{isArabic ? "رقم الفاتورة" : "Invoice ID"}</TableHead>
              <TableHead className="text-right">{isArabic ? "العميل" : "Customer"}</TableHead>
              <TableHead className="text-right">{isArabic ? "المبلغ" : "Amount"}</TableHead>
              <TableHead className="text-right">{isArabic ? "التاريخ" : "Date"}</TableHead>
              <TableHead className="text-right">{isArabic ? "تاريخ الاستحقاق" : "Due Date"}</TableHead>
              <TableHead className="text-right">{isArabic ? "الحالة" : "Status"}</TableHead>
              <TableHead className="text-center">{isArabic ? "الإجراءات" : "Actions"}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.id} className="hover:bg-muted/30">
                <TableCell className="font-medium">{invoice.id}</TableCell>
                <TableCell>{isArabic ? invoice.customer : invoice.customerEn}</TableCell>
                <TableCell className="font-semibold">{invoice.amount}</TableCell>
                <TableCell>{invoice.date}</TableCell>
                <TableCell>{invoice.dueDate}</TableCell>
                <TableCell>
                  <Badge className={cn("font-normal", statusStyles[invoice.status as keyof typeof statusStyles])}>
                    {isArabic ? invoice.statusAr : invoice.statusEn}
                  </Badge>
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
                        {isArabic ? "عرض" : "View"}
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Send className="h-4 w-4 ml-2" />
                        {isArabic ? "إرسال" : "Send"}
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Download className="h-4 w-4 ml-2" />
                        {isArabic ? "تحميل PDF" : "Download PDF"}
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </DashboardLayout>
  );
}
