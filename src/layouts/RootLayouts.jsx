import { Outlet } from "react-router-dom";
import Home from "../page/Home";

function RootLayouts() {
  return (
    <div>
      <Home />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayouts;
