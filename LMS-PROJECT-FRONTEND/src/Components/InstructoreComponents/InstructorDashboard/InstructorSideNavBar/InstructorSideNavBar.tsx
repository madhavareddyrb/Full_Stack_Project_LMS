import {
  BookOpen,
  MessageSquare,
  BarChart2,
  Wrench,
  HelpCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { useState } from "react";

export default function InstructorSideNavBar() {
  const [navigate, setNavigate] = useState("");
  const menuItems = [
    { name: "Courses", icon: BookOpen },
    { name: "Communication", icon: MessageSquare },
    { name: "Performance", icon: BarChart2 },
    { name: "Tools", icon: Wrench },
    { name: "Resources", icon: HelpCircle },
  ];

  const NavigatePaths = (e) => {
    console.log(e.target, "e target");
    setNavigate(e.target);
  };

  return (
    <div className="flex">
      <div
        className="
        group h-screen bg-[#1c1d1f] text-white
        w-16 hover:w-64 transition-all duration-300 ease-in-out
        overflow-hidden
      "
      >
        <div className="flex items-center gap-3 p-4">
          <div className="text-purple-500 font-bold text-xl">U</div>
          <span className="opacity-0 group-hover:opacity-100 transition-all">
            udemy
          </span>
        </div>

        <div className="mt-6 flex flex-col gap-2 px-2">
          {menuItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <Button
                    onClick={NavigatePaths}
                    variant="ghost"
                    className="w-full justify-start gap-4 text-white hover:bg-gray-700"
                  >
                    <Icon size={20} />

                    <span className="opacity-0 group-hover:opacity-100 transition-all">
                      {item.name}
                    </span>
                  </Button>
                </TooltipTrigger>

                <TooltipContent side="right" onClick={NavigatePaths}>
                  {item.name}
                </TooltipContent>
                {navigate}
              </Tooltip>
            );
          })}
        </div>
      </div>

      <div className="flex-1 p-10">
        <h1 className="text-2xl font-bold">Dashboard</h1>
      </div>
      
    </div>
  );
}
