import { Download } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="p-4 shadow-sm border flex justify-between items-center">
      <img src="/vite.svg" alt="" />
      <Button className="flex items-center gap-2">
        <Download className="w-4 h-4" />
        Download
      </Button>
    </div>
  );
};

export default Header;
