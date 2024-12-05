import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";

function EditPage() {
  return (
    <div>
      <div className="bg-[#1F283F] h-[80px]">
        <h3 className="text-[#fff] pl-[14px] pt-[24px] text-[16px]">
          HR Management System
        </h3>
        <div className="bg-[#1F283F] pl-[14px] pt-[30px] w-[250px] h-[100vh] text-[#fff] text-[23px] leading-[70px]">
          <Link to="/">
            <div className="flex  items-center gap-[10px]">
              <IoHomeOutline />
              <h3>Home</h3>
            </div>
          </Link>
          <Link to="/employeesall">
            <div className="flex items-center gap-[10px]">
              <IoPeopleOutline />
              <h3>All Employee</h3>
            </div>
          </Link>
          <Link to="/employeeone">
            <div className="flex items-center gap-[10px]">
              <VscAccount />
              <h3>One Employee</h3>
            </div>
          </Link>
          <Link to="/addpage">
            <div className="flex items-center gap-[10px]">
              <IoIosAddCircleOutline />
              <h3>Add Page</h3>
            </div>
          </Link>
          <Link to="/editpage">
            <div className="flex items-center gap-[10px]">
              <FaRegEdit />
              <h3>Edit Page</h3>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default EditPage;
