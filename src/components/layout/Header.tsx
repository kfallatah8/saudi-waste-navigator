import { Bell, Search, Globe, Moon, Sun, Command } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

interface HeaderProps {
  isArabic: boolean;
  onLanguageToggle: () => void;
}

export function Header({ isArabic, onLanguageToggle }: HeaderProps) {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <header className="sticky top-0 z-30 h-16 bg-background/60 backdrop-blur-xl border-b border-border/50">
      <div className="flex h-full items-center justify-between px-6">
        {/* Search */}
        <div className="flex-1 max-w-md">
          <div className="relative group">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground transition-colors group-focus-within:text-primary" />
            <Input
              type="search"
              placeholder={isArabic ? "بحث..." : "Search..."}
              className="pr-10 pl-20 bg-muted/50 border-0 rounded-xl focus-visible:ring-1 focus-visible:ring-primary/50 transition-all"
            />
            <kbd className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none hidden sm:inline-flex h-6 select-none items-center gap-1 rounded-md border border-border bg-muted px-2 font-mono text-[10px] font-medium text-muted-foreground">
              <Command className="h-3 w-3" /> K
            </kbd>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={onLanguageToggle}
            className="text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-xl transition-all"
          >
            <Globe className="h-5 w-5" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-xl transition-all"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="relative text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-xl transition-all"
          >
            <Bell className="h-5 w-5" />
            <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-[10px] bg-destructive border-2 border-background">
              4
            </Badge>
          </Button>
        </div>
      </div>
    </header>
  );
}
