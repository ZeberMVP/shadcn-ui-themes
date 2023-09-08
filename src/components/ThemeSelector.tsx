import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york/ui/Select";
import CopyButton from "./CopyButton";
import { useState } from "react";
import themes from "@/lib/themes.json";

const ThemeSelector = () => {
  const [selectedTheme, setSelectedTheme] = useState("default");
  const [copyValue, setCopyValue] = useState(
    themes.find((t) => t.theme === selectedTheme)?.values || "",
  );
  return (
    <div className="absolute right-0 top-0 flex items-center gap-4 rounded-[0.5rem] text-sm font-medium">
      <Select
        defaultValue="default"
        onValueChange={(value) => {
          setSelectedTheme(value);
          setCopyValue(themes.find((t) => t.theme === value)?.values || "");
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
