import Sidebar_V2, { SideBarItem } from "./SideBar_V2";
import {Calendar, Home, Layers, LayoutDashboard, StickyNote} from "lucide-react";

const Sidebar = ({ state, setState }) => {
  return (
    <>
      <Sidebar_V2>
        <hr className="my-2" />
        <SideBarItem icon={<Home size={20} />} text="Home" active />
        <SideBarItem
          icon={<LayoutDashboard size={20} />}
          text="DashBoard"
          onClick={() => setState("create-post")}
          alert
        />
        <SideBarItem icon={<StickyNote size={20} />} text="Projects" />
        <SideBarItem icon={<Calendar size={20} />} text="Date" />
        <SideBarItem icon={<Layers size={20} />} text="alert" />
      </Sidebar_V2>
    </>
  );
};

export default Sidebar;
