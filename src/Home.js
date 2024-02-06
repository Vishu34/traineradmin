import TopBar from "./components/TopBar";
import SideBar from "./components/SideBar";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <TopBar />
      <div className="container-fluid page-body-wrapper">
        <SideBar />
        <Outlet/>
      </div>
    </>
  );
}

export default Home;
