import Header from "../src/components/Header";
import IconControler from "./components/IconControler";
import SideNav from "./components/SideNav";
import BgControler from "./components/BgControler";
import { useState } from "react";

const App = () => {
  const [selectedIndex, setSelectedIndex] = useState();
  return (
    <>
      <Header />
      <div className="w-64 fixed">
        <SideNav selectedIndex={(value) => setSelectedIndex(value)} />
      </div>
      <div className="ml-64 grid grid-cols-1 md:grid-cols-6 fixed">
        <div className="md:col-span-2 border shadow-sm h-screen p-5 overflow-auto">
          {selectedIndex == 0 ? <IconControler /> : <BgControler />}
        </div>
        <div className="md:col-span-3">previw</div>
        <div className="md:col-span-1">ads</div>
      </div>
    </>
  );
};

export default App;
