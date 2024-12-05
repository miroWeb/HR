import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EmployeesAll from "./page/EmployeesAll";
import Home from "./page/Home";
import EmployeeOne from "./page/EmployeeOne";
import AddPage from "./page/AddPage";
import EditPage from "./page/EditPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/employeesall",
    element: <EmployeesAll></EmployeesAll>,
  },
  {
    path: "/employeeone",
    element: <EmployeeOne></EmployeeOne>,
  },
  {
    path: "/addpage",
    element: <AddPage></AddPage>,
  },
  {
    path: "/editpage",
    element: <EditPage></EditPage>,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>  
  );
}

export default App;
