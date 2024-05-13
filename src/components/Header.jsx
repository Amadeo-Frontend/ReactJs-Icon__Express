import { Download, DownloadIcon } from "lucide-react";
import { Button } from "./ui/button";
import Reveal from "./Reveal";

const Header = ({ DownloadIcon }) => {
  return (
    <div className="flex items-center justify-between p-4 border shadow-sm">
      <Reveal>
        <img src="/vite.svg" alt="" />
      </Reveal>
      <Reveal>
        <Button
          className="flex items-center gap-2"
          onClick={() => DownloadIcon(Date.now())}
        >
          <Download className="w-4 h-4" />
          Download
        </Button>
      </Reveal>
    </div>
  );
};

export default Header;
