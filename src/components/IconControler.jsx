import { Smile } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { useContext, useEffect, useState } from "react";
import ColorPickerController from "./ColorPickerController";
import { UpdateStorageContext } from "./context/UpdateStorageContext";

const IconControler = () => {
  const storageValue = JSON.parse(localStorage.getItem("value"));
  const [size, setSize] = useState(storageValue ? storageValue?.iconSize : 280);
  const [rotate, setRotate] = useState(
    storageValue ? storageValue?.iconRotate : 0
  );
  const [color, setColor] = useState(
    storageValue ? storageValue?.iconColor : "#fff"
  );
  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);

  useEffect(() => {
    const updatedValue = {
      ...storageValue,
      iconSize: size,
      iconRotate: rotate,
      iconColor: color,
      icon: "Smile",
    };
    setUpdateStorage(updatedValue);
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
          <label className="flex items-center justify-between p-2">
            Tamanho<span>{size} px</span>{" "}
          </label>
          <Slider
            defaultValue={[size]}
            max={512}
            step={1}
            onValueChange={(event) => setSize(event[0])}
          />
        </div>
        <div className="py-2">
          <label className="flex items-center justify-between p-2">
            Rotação<span>{rotate} °</span>{" "}
          </label>
          <Slider
            defaultValue={[rotate]}
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
