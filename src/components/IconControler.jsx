import { Smile } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { useEffect, useState } from "react";
import ColorPickerController from "./ColorPickerController";

const IconControler = () => {
  const [size, setSize] = useState(280);
  const [rotate, setRotate] = useState(0);
  const [color, setColor] = useState("#fff");
  const storegeValue = JSON.parse(localStorage.getItem("value"));

  useEffect(() => {
    const updatedValue = {
      ...storegeValue,
      iconSize: size,
      iconRotate: rotate,
      iconColor: color,
      icon: "Smile",
    };
    localStorage.setItem("value", JSON.stringify(updatedValue));
  }, [size, rotate, color]);

  return (
    <div>
      <div>
        <label>Icone</label>
        <div className="p-3 cursor-pointer bg-gray-200 rounded-md w-[50px] h-[50px] flex items-center justify-center my-2">
          <Smile />
        </div>
        <div className="py-2">
          <label className="p-2 flex justify-between items-center">
            Tamanho<span>{size} px</span>{" "}
          </label>
          <Slider
            defaultValue={[280]}
            max={512}
            step={1}
            onValueChange={(event) => setSize(event[0])}
          />
        </div>
        <div className="py-2">
          <label className="p-2 flex justify-between items-center">
            Rotação<span>{rotate} °</span>{" "}
          </label>
          <Slider
            defaultValue={[0]}
            max={360}
            step={1}
            onValueChange={(event) => setRotate(event[0])}
          />
        </div>
        <div className="py-2">
          <label className="p-2">Cor do Ícone</label>
          <ColorPickerController
            hideControler={true}
            selectedColor={(color) => setColor(color)}
          />
        </div>
      </div>
    </div>
  );
};

export default IconControler;
