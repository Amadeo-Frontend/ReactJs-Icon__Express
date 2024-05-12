import { Smile } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";

const IconControler = () => {
  const [size, setSize] = useState(280);
  return (
    <div>
      <div>
        <label>Icone</label>
        <div className="p-3 cursor-pointer bg-gray-200 rounded-md w-[50px] h-[50px] flex items-center justify-center my-2">
          <Smile />
        </div>
        <div>
          <label className="p-2 flex justify-between items-center">
            Tamanho<span>{size} px</span>{" "}
          </label>
          <Slider defaultValue={[280]} max={512} step={1} />
        </div>
      </div>
    </div>
  );
};

export default IconControler;
