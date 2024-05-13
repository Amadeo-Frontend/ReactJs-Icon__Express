import { useEffect, useState, useContext } from "react";
import { UpdateStorageContext } from "./context/UpdateStorageContext";
import { icons } from "lucide-react";
import html2canvas from "html2canvas";
import Reveal from "./Reveal";
const LogoPreview = ({ downloadIcon }) => {
  const [storageValue, setStorageValue] = useState();
  const { updateStorage, setUpdateStorage } = useContext(UpdateStorageContext);
  useEffect(() => {
    const storageData = JSON.parse(localStorage.getItem("value"));
    setStorageValue(storageData);
  }, [updateStorage]);
  useEffect(() => {
    if (downloadIcon) {
      downloadPngIcon();
    }
  }, [downloadIcon]);

  /**
   * Used to download the icon in png format
   */

  const downloadPngIcon = () => {
    const downloadIconDiv = document.getElementById("downloadIconDiv");
    html2canvas(downloadIconDiv, {
      backgroundColor: null,
    }).then((canvas) => {
      const pngImage = canvas.toDataURL("image/png");
      const downloadLink = document.createElement("a");
      downloadLink.href = pngImage;
      downloadLink.download = "Icon_Express.png";
      downloadLink.click();
    });
  };

  const Icon = ({ name, color, size, rotate }) => {
    const LucidIcon = icons[name];
    if (!LucidIcon) {
      return;
    }
    return (
      <LucidIcon
        color={color}
        size={size}
        style={{
          transform: `rotate(${rotate}deg)`,
        }}
      />
    );
  };

  return (
    <div className="flex items-center justify-center w-full h-screen">
      <Reveal>
        {" "}
        <div
          className="h-[500px] w-[500px] mb-20 bg-gray-200 outline-dotted outline-gray-300"
          style={{
            padding: storageValue?.bgPadding,
          }}
        >
          <div
            id="downloadIconDiv"
            className="flex items-center justify-center w-full h-full"
            style={{
              borderRadius: storageValue?.bgRounded,
              background: storageValue?.bgColor,
            }}
          >
            <Icon
              name={storageValue?.icon}
              color={storageValue?.iconColor}
              size={storageValue?.iconSize}
              rotate={storageValue?.iconRotate}
            />
          </div>
        </div>
      </Reveal>
    </div>
  );
};

export default LogoPreview;
