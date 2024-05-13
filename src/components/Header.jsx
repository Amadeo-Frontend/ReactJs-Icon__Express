import { Download, DownloadIcon } from "lucide-react";
import { Button } from "./ui/button";
import Reveal from "./Reveal";

const Header = ({ DownloadIcon }) => {
  const resetPageAndStorage = () => {
    // Limpa o armazenamento local
    localStorage.clear();
    // Recarrega a página
    window.location.reload();
  };
  return (
    <div className="flex items-center justify-between p-4 border shadow-sm">
      <Reveal>
        <div className="flex items-center gap-2 logo">
          <img
            src="/logo.png"
            alt=""
            className="cursor-pointer w-9 h-9"
            onClick={resetPageAndStorage}
          />
          <span className="text-2xl font-semibold tracking-tight text-slate-500">
            ICON EXPRESS
          </span>
        </div>
      </Reveal>
      <Reveal>
        <Button
          className="flex items-center gap-2"
          onClick={() => DownloadIcon(Date.now())}
        >
          <Download className="w-4 h-4 hover:animate-bounce" />
          Download
        </Button>
      </Reveal>
    </div>
  );
};

export default Header;
