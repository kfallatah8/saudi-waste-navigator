import { useState } from "react";
import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, User, Bell, Shield, Palette, Globe } from "lucide-react";

export default function Settings() {
  const [isArabic] = useState(true);

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold">
          {isArabic ? "الإعدادات" : "Settings"}
        </h1>
        <p className="text-muted-foreground">
          {isArabic ? "إدارة إعدادات النظام والحساب" : "Manage system and account settings"}
        </p>
      </div>

      <Tabs defaultValue="company" className="space-y-6">
        <TabsList className="bg-muted p-1">
          <TabsTrigger value="company" className="gap-2">
            <Building2 className="w-4 h-4" />
            {isArabic ? "الشركة" : "Company"}
          </TabsTrigger>
          <TabsTrigger value="profile" className="gap-2">
            <User className="w-4 h-4" />
            {isArabic ? "الملف الشخصي" : "Profile"}
          </TabsTrigger>
          <TabsTrigger value="notifications" className="gap-2">
            <Bell className="w-4 h-4" />
            {isArabic ? "الإشعارات" : "Notifications"}
          </TabsTrigger>
          <TabsTrigger value="appearance" className="gap-2">
            <Palette className="w-4 h-4" />
            {isArabic ? "المظهر" : "Appearance"}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="company">
          <Card>
            <CardHeader>
              <CardTitle>{isArabic ? "معلومات الشركة" : "Company Information"}</CardTitle>
              <CardDescription>
                {isArabic ? "تحديث بيانات الشركة الأساسية" : "Update your company's basic information"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>{isArabic ? "اسم الشركة" : "Company Name"}</Label>
                  <Input defaultValue="شركة الرياض لإدارة المخلفات" />
                </div>
                <div className="space-y-2">
                  <Label>{isArabic ? "السجل التجاري" : "Commercial Register"}</Label>
                  <Input defaultValue="1010123456" />
                </div>
                <div className="space-y-2">
                  <Label>{isArabic ? "رقم الهاتف" : "Phone Number"}</Label>
                  <Input defaultValue="+966 11 234 5678" dir="ltr" />
                </div>
                <div className="space-y-2">
                  <Label>{isArabic ? "البريد الإلكتروني" : "Email"}</Label>
                  <Input defaultValue="info@riyadhwaste.sa" type="email" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <Label>{isArabic ? "العنوان" : "Address"}</Label>
                  <Input defaultValue="الرياض، المملكة العربية السعودية" />
                </div>
              </div>
              <Button>{isArabic ? "حفظ التغييرات" : "Save Changes"}</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="profile">
          <Card>
            <CardHeader>
              <CardTitle>{isArabic ? "الملف الشخصي" : "Profile"}</CardTitle>
              <CardDescription>
                {isArabic ? "إدارة بيانات حسابك الشخصي" : "Manage your personal account information"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>{isArabic ? "الاسم الكامل" : "Full Name"}</Label>
                  <Input defaultValue="أحمد محمد العتيبي" />
                </div>
                <div className="space-y-2">
                  <Label>{isArabic ? "البريد الإلكتروني" : "Email"}</Label>
                  <Input defaultValue="ahmed@riyadhwaste.sa" type="email" />
                </div>
                <div className="space-y-2">
                  <Label>{isArabic ? "رقم الجوال" : "Mobile"}</Label>
                  <Input defaultValue="+966 50 123 4567" dir="ltr" />
                </div>
                <div className="space-y-2">
                  <Label>{isArabic ? "المنصب" : "Position"}</Label>
                  <Input defaultValue="مدير العمليات" />
                </div>
              </div>
              <Button>{isArabic ? "حفظ التغييرات" : "Save Changes"}</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>{isArabic ? "إعدادات الإشعارات" : "Notification Settings"}</CardTitle>
              <CardDescription>
                {isArabic ? "تحكم في الإشعارات التي تتلقاها" : "Control the notifications you receive"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                { title: isArabic ? "تنبيهات الحاويات المتأخرة" : "Overdue Container Alerts", desc: isArabic ? "تلقي إشعار عند تأخر استلام حاوية" : "Receive alerts when containers are overdue" },
                { title: isArabic ? "تحديثات المهام" : "Task Updates", desc: isArabic ? "إشعارات عند اكتمال أو تعديل المهام" : "Notifications when tasks are completed or modified" },
                { title: isArabic ? "تنبيهات المخالفات" : "Fine Risk Alerts", desc: isArabic ? "تحذيرات استباقية لتجنب المخالفات" : "Proactive warnings to avoid fines" },
                { title: isArabic ? "تقارير يومية" : "Daily Reports", desc: isArabic ? "ملخص يومي للعمليات" : "Daily operations summary" },
              ].map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                  <Switch defaultChecked={index < 3} />
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="appearance">
          <Card>
            <CardHeader>
              <CardTitle>{isArabic ? "المظهر" : "Appearance"}</CardTitle>
              <CardDescription>
                {isArabic ? "تخصيص مظهر النظام" : "Customize the system appearance"}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{isArabic ? "الوضع الداكن" : "Dark Mode"}</p>
                  <p className="text-sm text-muted-foreground">
                    {isArabic ? "تفعيل المظهر الداكن للنظام" : "Enable dark theme for the system"}
                  </p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">{isArabic ? "اللغة" : "Language"}</p>
                    <p className="text-sm text-muted-foreground">
                      {isArabic ? "العربية" : "English"}
                    </p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  {isArabic ? "تغيير" : "Change"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardLayout>
  );
}
