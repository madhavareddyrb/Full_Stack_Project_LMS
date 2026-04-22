import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils"; // Assumes shadcn's utility for class merging
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowDown,
  ArrowUp,
  Minus,
  Users,
  DollarSign,
  Clock,
  AlertCircle,
} from "lucide-react";

/**
 * A professional, animated metric card for admin dashboards.
 * Displays a key value, title, icon, and trend indicator with Framer Motion hover effects.
 */
const DashboardMetricCard = ({
  value,
  title,
  icon: IconComponent,
  trendChange,
  trendType = "neutral",
  className,
}) => {
  // Determine trend icon and color
  const TrendIcon =
    trendType === "up" ? ArrowUp : trendType === "down" ? ArrowDown : Minus;
  const trendColorClass =
    trendType === "up"
      ? "text-green-600 dark:text-green-400"
      : trendType === "down"
        ? "text-red-600 dark:text-red-400"
        : "text-muted-foreground";

  return (
    <motion.div
      // Subtle lift and shadow on hover
      whileHover={{
        y: -4,
        boxShadow:
          "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={cn(
        "cursor-pointer rounded-lg", // Ensure cursor indicates interactivity
        className,
      )}
    >
      <Card className="h-full transition-colors duration-200">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            {title}
          </CardTitle>
          {IconComponent && (
            <IconComponent
              className="h-4 w-4 text-muted-foreground"
              aria-hidden="true"
            />
          )}
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-foreground mb-2">{value}</div>
          {trendChange && (
            <p
              className={cn(
                "flex items-center text-xs font-medium",
                trendColorClass,
              )}
            >
              <TrendIcon className="h-3 w-3 mr-1" aria-hidden="true" />
              {trendChange}{" "}
              {trendType === "up"
                ? "increase"
                : trendType === "down"
                  ? "decrease"
                  : "change"}
            </p>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ExampleUsage = () => {
  return (
    <div className="p-8 bg-background border rounded-lg max-w-7xl mx-auto shadow-md">
      <h3 className="text-xl font-semibold text-foreground mb-6">
        Dashboard Overview
      </h3>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <DashboardMetricCard
          title="Total Users"
          value="2,350"
          icon={Users}
          trendChange="+180"
          trendType="up"
        />
        <DashboardMetricCard
          title="Revenue"
          value="$12,450"
          icon={DollarSign}
          trendChange="-2.5%"
          trendType="down"
        />
        <DashboardMetricCard
          title="Avg. Session"
          value="4m 32s"
          icon={Clock}
          trendChange="+0.5s"
          // Or "up" if positive
          trendType="neutral"
        />
        <DashboardMetricCard
          title="Open Tickets"
          value="12"
          // Using AlertCircle from lucide-react if needed
          icon={AlertCircle}
          trendChange="+3"
          trendType="up"
          // Example of custom class for layout
          className="lg:col-span-1"
        />
      </div>
    </div>
  );
};

export default ExampleUsage;
