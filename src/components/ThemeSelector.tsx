"use client";

import themes from "@/lib/themes.json";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york/ui/Select";
import CopyButton from "./CopyButton";
import { useTheme } from "./CustomThemeProvider";

const ThemeSelector = () => {
  const { currentTheme } = useTheme();
  const copyValue = themes.find((t) => t.theme === currentTheme)?.values || "";

  return (
    <div className="absolute right-0 top-0 flex items-center gap-4 rounded-[0.5rem] text-sm font-medium">
      <Select
        defaultValue={currentTheme}
        onValueChange={(value) => {
          localStorage.setItem("currentTheme", value);
          window.location.reload();
        }}
      >
        <SelectTrigger
          id="theme-selector"
          className="line-clamp-1 w-[160px] truncate"
        >
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="default">Default</SelectItem>
          <SelectItem value="documentation">Documentation</SelectItem>
        </SelectContent>
      </Select>
      <CopyButton value={copyValue} />
    </div>
  );
};

export default ThemeSelector;
