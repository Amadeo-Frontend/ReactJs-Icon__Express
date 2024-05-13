import Header from "../src/components/Header";
import IconControler from "./components/IconControler";
import SideNav from "./components/SideNav";
import BgControler from "./components/BgControler";
import { useState } from "react";
import LogoPreview from "./components/LogoPreview";
import { UpdateStorageContext } from "./components/context/UpdateStorageContext";

const App = () => {
  const [selectedIndex, setSelectedIndex] = useState();
  const [updateStorage, setUpdateStorage] = useState({});
  const [downloadIcon, setDownloadIcon] = useState();
  return (
    <UpdateStorageContext.Provider value={{ updateStorage, setUpdateStorage }}>
      <div>
        <Header DownloadIcon={setDownloadIcon} />
        <div className="fixed w-64">
          <SideNav selectedIndex={(value) => setSelectedIndex(value)} />
        </div>
        <div className="fixed grid grid-cols-1 ml-64 md:grid-cols-6">
          <div className="h-screen p-5 overflow-auto border shadow-sm md:col-span-2">
            {selectedIndex == 0 ? <IconControler /> : <BgControler />}
          </div>
          <div className="md:col-span-3">
            <LogoPreview downloadIcon={downloadIcon} />
          </div>
          <div className="md:col-span-1">ads</div>
        </div>
      </div>
    </UpdateStorageContext.Provider>
  );
};

export default App;
