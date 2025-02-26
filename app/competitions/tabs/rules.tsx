import { Card, CardBody } from "@nextui-org/react";
import React, { useState, FC } from "react";
import {
  CheckCircle,
  AlertCircle,
  Clock,
  Users,
  Code,
  FileCheck,
  Award,
  ChevronDown,
} from "lucide-react";

// 1. Define interfaces for your data structures
interface RuleItem {
  text: string;
  highlight: boolean;
}

interface RuleSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: "emerald" | "blue" | "purple" | "rose" | string; // add other colors if needed
  items: RuleItem[];
}

interface ExpandedSections {
  [key: string]: boolean; 
  // or list them explicitly if you want strictness:
  // general: boolean;
  // submission: boolean;
  // evaluation: boolean;
  // code: boolean;
}

const RulesTab: FC = () => {
  // 2. Use the ExpandedSections interface for the state
  const [expandedSections, setExpandedSections] = useState<ExpandedSections>({
    general: true,
    submission: false,
    evaluation: false,
    code: false,
  });

  // 3. Provide explicit parameter types
  const toggleSection = (section: string): void => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  // 4. Define the rules array using the RuleSection interface
  const rules: RuleSection[] = [
    {
      id: "general",
      title: "General Guidelines",
      icon: <CheckCircle size={20} className="text-emerald-500" />,
      color: "emerald",
      items: [
        { text: "All submissions must be made through the official platform", highlight: false },
        { text: "Teams are limited to a maximum of 4 members", highlight: true },
        { text: "Solutions must be your own original work", highlight: false },
        { text: "The competition runs for 48 hours straight", highlight: false },
      ],
    },
    {
      id: "submission",
      title: "Submission Rules",
      icon: <FileCheck size={20} className="text-blue-500" />,
      color: "blue",
      items: [
        { text: "Submissions must be in the specified CSV format", highlight: false },
        { text: "Each team is limited to 5 submissions per day", highlight: true },
        { text: "Final submissions must be made before the deadline", highlight: false },
        { text: "Late submissions will not be considered", highlight: false },
      ],
    },
    {
      id: "evaluation",
      title: "Evaluation Criteria",
      icon: <Award size={20} className="text-purple-500" />,
      color: "purple",
      items: [
        { text: "Accuracy of solutions (70%)", highlight: true },
        { text: "Efficiency of implementation (20%)", highlight: false },
        { text: "Code quality and documentation (10%)", highlight: false },
        { text: "Ties will be broken by timestamp of final submission", highlight: false },
      ],
    },
    {
      id: "code",
      title: "Code of Conduct",
      icon: <AlertCircle size={20} className="text-rose-500" />,
      color: "rose",
      items: [
        { text: "No sharing of solutions between teams", highlight: true },
        { text: "Respect all participants and organizers", highlight: false },
        { text: "Follow ethical guidelines for AI usage", highlight: false },
        { text: "Violations may result in disqualification", highlight: true },
      ],
    },
  ];

  // Helper functions with explicit parameter & return types
  const getBorderClass = (sectionId: string, color: string): string => {
    if (expandedSections[sectionId]) {
      switch (color) {
        case "emerald":
          return "border-emerald-200 dark:border-emerald-800";
        case "blue":
          return "border-blue-200 dark:border-blue-800";
        case "purple":
          return "border-purple-200 dark:border-purple-800";
        case "rose":
          return "border-rose-200 dark:border-rose-800";
        default:
          return "border-slate-200 dark:border-slate-700";
      }
    }
    return "border-slate-200 dark:border-slate-700";
  };

  const getHeaderBgClass = (sectionId: string, color: string): string => {
    if (expandedSections[sectionId]) {
      switch (color) {
        case "emerald":
          return "bg-emerald-50 dark:bg-emerald-900/20";
        case "blue":
          return "bg-blue-50 dark:bg-blue-900/20";
        case "purple":
          return "bg-purple-50 dark:bg-purple-900/20";
        case "rose":
          return "bg-rose-50 dark:bg-rose-900/20";
        default:
          return "bg-white dark:bg-slate-800";
      }
    }
    return "bg-white dark:bg-slate-800";
  };

  const getTitleColorClass = (color: string): string => {
    switch (color) {
      case "emerald":
        return "text-emerald-700 dark:text-emerald-400";
      case "blue":
        return "text-blue-700 dark:text-blue-400";
      case "purple":
        return "text-purple-700 dark:text-purple-400";
      case "rose":
        return "text-rose-700 dark:text-rose-400";
      default:
        return "text-slate-700 dark:text-slate-300";
    }
  };

  const getHighlightClasses = (highlight: boolean, color: string): string => {
    if (!highlight) return "";
    let bgClass = "";
    let borderClass = "";

    switch (color) {
      case "emerald":
        bgClass = "bg-emerald-50 dark:bg-emerald-900/20";
        borderClass = "border-emerald-100 dark:border-emerald-800/30";
        break;
      case "blue":
        bgClass = "bg-blue-50 dark:bg-blue-900/20";
        borderClass = "border-blue-100 dark:border-blue-800/30";
        break;
      case "purple":
        bgClass = "bg-purple-50 dark:bg-purple-900/20";
        borderClass = "border-purple-100 dark:border-purple-800/30";
        break;
      case "rose":
        bgClass = "bg-rose-50 dark:bg-rose-900/20";
        borderClass = "border-rose-100 dark:border-rose-800/30";
        break;
      default:
        bgClass = "bg-slate-50 dark:bg-slate-700/20";
        borderClass = "border-slate-100 dark:border-slate-700/30";
    }
    return `p-2 rounded-lg ${bgClass} border ${borderClass}`;
  };

  const getNumberBulletClass = (highlight: boolean, color: string): string => {
    if (highlight) {
      switch (color) {
        case "emerald":
          return "bg-emerald-500 text-white";
        case "blue":
          return "bg-blue-500 text-white";
        case "purple":
          return "bg-purple-500 text-white";
        case "rose":
          return "bg-rose-500 text-white";
        default:
          return "bg-slate-500 text-white";
      }
    }
    return "bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400";
  };

  return (
    <Card className="shadow-lg border-none bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 mx-4 sm:mx-12">
      <CardBody className="p-0">
        <div className="p-4 sm:p-6 border-b border-slate-200 dark:border-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
              Official Competition Rules
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 mt-1">
              Please review all guidelines before participating
            </p>
          </div>
          <div className="flex items-center gap-2 mt-4 sm:mt-0">
            <div className="flex items-center gap-1 bg-amber-100 dark:bg-amber-900/30 px-3 py-1 rounded-full">
              <Clock size={14} className="text-amber-600 dark:text-amber-400" />
              <span className="text-xs font-medium text-amber-600 dark:text-amber-400">
                48 Hours
              </span>
            </div>
            <div className="flex items-center gap-1 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full">
              <Users size={14} className="text-blue-600 dark:text-blue-400" />
              <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
                Teams of 4
              </span>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-6 space-y-4">
          {rules.map((section: RuleSection) => (
            <div
              key={section.id}
              className={`overflow-hidden rounded-xl border transition-all duration-300 ${getBorderClass(section.id, section.color)}`}
            >
              <div
                className={`p-3 sm:p-4 flex items-center justify-between cursor-pointer ${getHeaderBgClass(section.id, section.color)}`}
                onClick={() => toggleSection(section.id)}
              >
                <div className="flex items-center gap-2">
                  {section.icon}
                  <h3
                    className={`text-base sm:text-lg font-semibold ${getTitleColorClass(
                      section.color
                    )}`}
                  >
                    {section.title}
                  </h3>
                </div>
                <ChevronDown
                  size={18}
                  className={`text-slate-400 transition-transform duration-300 ${
                    expandedSections[section.id] ? "rotate-180" : ""
                  }`}
                />
              </div>

              {expandedSections[section.id] && (
                <div className="bg-white dark:bg-slate-800 p-3 sm:p-4 border-t border-slate-100 dark:border-slate-700">
                  <ul className="space-y-2">
                    {section.items.map((item: RuleItem, idx: number) => (
                      <li
                        key={idx}
                        className={`flex items-start gap-2 ${getHighlightClasses(
                          item.highlight,
                          section.color
                        )}`}
                      >
                        <div
                          className={`min-w-[1.25rem] h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5 ${getNumberBulletClass(
                            item.highlight,
                            section.color
                          )}`}
                        >
                          {idx + 1}
                        </div>
                        <span
                          className={`text-sm sm:text-base text-slate-700 dark:text-slate-300 ${
                            item.highlight ? "font-medium" : ""
                          }`}
                        >
                          {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="p-4 sm:p-6 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700 rounded-b-xl">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
            <div className="flex items-center gap-2">
              <Code size={16} className="text-indigo-500" />
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                By participating, you agree to follow all competition rules
              </span>
            </div>
            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
              These rules are subject to change. Last updated: February 15, 2025
            </p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default RulesTab;
