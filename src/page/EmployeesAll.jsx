import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { IoPeopleOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { IoIosAddCircleOutline } from "react-icons/io";
import { FaRegEdit } from "react-icons/fa";

import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";

function EmployeesAll() {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [genderFilter, setGenderFilter] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("");
  const itemsPerPage = 5;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/users");
        setEmployees(response.data.users);
        setFilteredEmployees(response.data.users);

        // Unikal bo'limlar ro'yxatini olish
        const uniqueDepartments = [
          ...new Set(
            response.data.users.map((user) => user.company.department)
          ),
        ];
        setDepartments(uniqueDepartments);
      } catch (error) {
        console.error("Ma'lumotlarni yuklashda xatolik:", error);
      }
    };

    fetchData();
  }, []);

  // Filtrlash funksiyasi
  const handleFilter = () => {
    let filtered = employees;

    if (genderFilter) {
      filtered = filtered.filter((emp) => emp.gender === genderFilter);
    }

    if (departmentFilter) {
      filtered = filtered.filter(
        (emp) => emp.company.department === departmentFilter
      );
    }

    setFilteredEmployees(filtered);
    setCurrentPage(0); // Filtrdan so'ng birinchi sahifaga o'tish
  };
  
  // Sahifalash funksiyasi
  const offset = currentPage * itemsPerPage;
  const currentPageData = filteredEmployees.slice(
    offset,
    offset + itemsPerPage
  );

  return (
    <div className=""> 
      <div className="bg-[#1F283F] border">
        <div className="container bg-slate-400  m-auto">
          {/* ==== */}
          <div className="mx-auto mt-[115px] p-4 mr-[-10px] border shadow w-[1050px] rounded-[15px]">
            <div className="">
              <h1 className="text-2xl font-bold mb-4">Xodimlar ro'yxati</h1>
              {/* Filtrlash */}
              <div className="mb-4">                                                                  
                <div className="flex gap-4">
                  {/* Bo'lim bo'yicha */}
                  <select
                    className="border rounded p-2"
                    value={departmentFilter}
                    onChange={(e) => setDepartmentFilter(e.target.value)}
                  >
                    <option value="">Barcha bo'limlar</option>
                    {departments.map((dept) => (
                      <option key={dept} value={dept}>
                        {dept}
                      </option>
                    ))}
                  </select>

                  {/* Jinsi bo'yicha */}
                  <div className="flex gap-2">
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value=""
                        checked={genderFilter === ""}
                        onChange={() => setGenderFilter("")}
                      />
                      Barcha
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={genderFilter === "male"}
                        onChange={() => setGenderFilter("male")}
                      />
                      Erkak
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={genderFilter === "female"}
                        onChange={() => setGenderFilter("female")}
                      />
                      Ayol
                    </label>
                  </div>

                  <button
                    className="bg-blue-500 text-white rounded p-2"
                    onClick={handleFilter}
                  >
                    Filtrlash
                  </button>
                </div>
              </div>

              {/* Ro'yxat */}
              <ul>
                {currentPageData.map((emp) => (
                  <li key={emp.id} className="border-b p-2">
                    <div className="font-bold">
                      {emp.firstName} {emp.lastName}
                    </div>
                    <div>Bo'lim: {emp.company.department}</div>
                    <div>Jinsi: {emp.gender}</div>
                  </li>
                ))}
              </ul>

              {/* Sahifalash */}
              <div className="mt-[50px]">
                <ReactPaginate
                  previousLabel={"Oldingi"}
                  nextLabel={"Keyingi"}
                  pageCount={Math.ceil(filteredEmployees.length / itemsPerPage)}
                  onPageChange={(e) => setCurrentPage(e.selected)}
                  containerClassName={"flex gap-2 justify-center mt-4"}
                  activeClassName={"font-bold"}
                />
              </div>
            </div>
            {/* ==== */}
          </div>
        </div> 
      </div>                                                            
      <div className="bg-[#1F283F] pl-[14px] w-[250px] border border-[red] h-[100vh] text-[#fff] text-[23px] leading-[90px]">
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

export default EmployeesAll;
