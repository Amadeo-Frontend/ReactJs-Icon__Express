import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { iconsList } from "@/constants/icons";
import { Smile } from "lucide-react";
import { useState, memo } from "react";
import { icons } from "lucide-react";

// Utilizando React.memo para memorizar o componente Icon
const MemoizedIcon = memo(({ name, color, size }) => {
  const LucidIcon = icons[name];
  return LucidIcon ? <LucidIcon color={color} size={size} /> : null;
});
MemoizedIcon.displayName = "MemoizedIcon";
const IconList = ({ selectedIcon }) => {
  const storageValue = JSON.parse(localStorage.getItem("value"));
  const [openDialog, setOpenDialog] = useState(false);
  const [icon, setIcon] = useState(storageValue ? storageValue?.icon : "Smile");

  // Função para fechar o diálogo
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div>
      <div>
        <label>Icone</label>
        <div
          onClick={() => setOpenDialog(true)}
          className="p-3 cursor-pointer bg-gray-200 rounded-md w-[50px] h-[50px] flex items-center justify-center my-2"
        >
          <MemoizedIcon name={icon} color={"#000"} size={20} />
        </div>
      </div>
      <Dialog open={openDialog} onOpenChange={handleCloseDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Escolha seu Ícone</DialogTitle>
            <DialogDescription>
              <div className="grid grid-cols-2 gap-4 overflow-auto md:grid-cols-4 lg:grid-cols-5 h-[400px] max-w-lg p-6">
                {iconsList.map((icon, index) => (
                  <div
                    className="flex items-center justify-center p-3 border rounded-sm cursor-pointer"
                    onClick={() => {
                      selectedIcon(icon);
                      setOpenDialog(false);
                      setIcon(icon);
                    }}
                  >
                    <MemoizedIcon name={icon} color={"#000"} size={20} />
                  </div>
                ))}
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default IconList;
