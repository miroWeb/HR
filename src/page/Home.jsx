import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";
import { IoWoman } from "react-icons/io5";
import { IoManSharp } from "react-icons/io5";
import { BsPeopleFill } from "react-icons/bs";

function Home() {
  const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    console.log(data);
  };
  getData();

  return (
    <div>
      <div className="bg-[#1F283F] h-[80px]">
        <div className="container flex justify-center m-auto">
          {/* ==== */}
          <div className="stats shadow mt-[130px] w-[1000px] h-[150px] ml-[250px]">
            <div className="stat">
              <div className="stat-figure text-primary">
                <IoManSharp fontSize="30px" />
              </div>
              <div className="stat-title">The number of men</div>
              <div className="stat-value text-primary">32</div>
              <div className="stat-desc">21% more than last month</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <IoWoman fontSize="30px" />
              </div>
              <div className="stat-title">Number of women</div>
              <div className="stat-value text-secondary">47</div>
              <div className="stat-desc">21% more than last month</div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <BsPeopleFill fontSize="30px" color="#000" />
              </div>
              <div className="stat-title">Number of employees</div>
              <div className="stat-value">79</div>
              <div className="stat-desc">
                21% more than last month
              </div> 
            </div>
          </div>
          {/* ==== */}
        </div>
      </div>
      <div className="bg-[#1F283F] pl-[14px] w-[250px] h-[100vh] text-[#fff] text-[23px] leading-[90px]">
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
  );
}

export default Home;
