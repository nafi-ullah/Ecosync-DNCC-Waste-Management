import {
    Bell,
    CalendarCheck,
    Database,
    Home,
    LayoutDashboard,
    LineChart,
    LucideIcon,
    Package,
    Package2,
    Receipt,
    ScanFace,
    Settings,
    ShoppingCart,
    Truck,
    Users,
  } from "lucide-react";
import { stsManager } from "../roles";

export const STSManagerSidebarItemList = [
    {
      Icon: LayoutDashboard,
      title: "Dashboard",
    },
    {
      Icon: CalendarCheck,
      title: "Schedules",
    },
    {
      Icon: Database,
      title: "Storage",
    },
    {
      Icon: Truck,
      title: "Dump Entry",
    },    
    {
      Icon: Settings,
      title: "Settings",
    },
  ];

  export const stsManagerStateList = () => {
    STSManagerSidebarItemList.map((item) => {
      return stsManager + "-" + item.title;
    });
  };