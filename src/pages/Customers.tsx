import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Search, Building2, Phone, Mail, MapPin, MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const customers = [
  {
    id: 1,
    name: "شركة أحمد للإنشاءات",
    nameEn: "Ahmed Construction Co.",
    type: "business",
    typeAr: "شركة",
    phone: "+966 11 234 5678",
    email: "info@ahmedconst.sa",
    address: "الرياض، حي العليا",
    activeContainers: 5,
    totalOrders: 23,
  },
  {
    id: 2,
    name: "مؤسسة الخليج للمقاولات",
    nameEn: "Gulf Contracting Est.",
    type: "business",
    typeAr: "مؤسسة",
    phone: "+966 11 345 6789",
    email: "contact@gulfcontracting.sa",
    address: "الرياض، حي الملز",
    activeContainers: 3,
    totalOrders: 15,
  },
  {
    id: 3,
    name: "شركة البناء الحديث",
    nameEn: "Modern Build Co.",
    type: "business",
    typeAr: "شركة",
    phone: "+966 11 456 7890",
    email: "info@modernbuild.sa",
    address: "الرياض، حي السليمانية",
    activeContainers: 2,
    totalOrders: 8,
  },
  {
    id: 4,
    name: "عبدالله محمد العتيبي",
    nameEn: "Abdullah Al-Otaibi",
    type: "individual",
    typeAr: "فرد",
    phone: "+966 50 567 8901",
    email: "abdullah@email.com",
    address: "الرياض، حي الورود",
    activeContainers: 1,
    totalOrders: 2,
  },
];

export default function Customers() {
  const [isArabic] = useState(true);

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold">
            {isArabic ? "إدارة العملاء" : "Customer Management"}
          </h1>
          <p className="text-muted-foreground">
            {isArabic ? "إدارة ومتابعة جميع العملاء" : "Manage and track all customers"}
          </p>
        </div>
        <Button className="shrink-0">
          <Plus className="w-4 h-4 ml-2" />
          {isArabic ? "إضافة عميل" : "Add Customer"}
        </Button>
      </div>

      {/* Search */}
      <div className="flex gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder={isArabic ? "بحث بالاسم أو الهاتف..." : "Search by name or phone..."}
            className="pr-10"
          />
        </div>
      </div>

      {/* Customer Cards */}
      <div className="grid md:grid-cols-2 gap-4">
        {customers.map((customer) => (
          <Card key={customer.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{isArabic ? customer.name : customer.nameEn}</h3>
                    <Badge variant="secondary" className="mt-1">
                      {customer.typeAr}
                    </Badge>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>{isArabic ? "عرض التفاصيل" : "View Details"}</DropdownMenuItem>
                    <DropdownMenuItem>{isArabic ? "تعديل" : "Edit"}</DropdownMenuItem>
                    <DropdownMenuItem>{isArabic ? "طلب جديد" : "New Order"}</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <div className="space-y-2 text-sm mb-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Phone className="w-4 h-4" />
                  <span dir="ltr">{customer.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Mail className="w-4 h-4" />
                  <span>{customer.email}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{customer.address}</span>
                </div>
              </div>

              <div className="flex gap-4 pt-4 border-t border-border">
                <div className="text-center flex-1">
                  <p className="text-lg font-bold text-primary">{customer.activeContainers}</p>
                  <p className="text-xs text-muted-foreground">{isArabic ? "حاويات نشطة" : "Active"}</p>
                </div>
                <div className="text-center flex-1">
                  <p className="text-lg font-bold">{customer.totalOrders}</p>
                  <p className="text-xs text-muted-foreground">{isArabic ? "إجمالي الطلبات" : "Total Orders"}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </DashboardLayout>
  );
}
