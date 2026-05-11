import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/employeeslice";

export default function EmployeeList() {
  const dispatch = useDispatch();

  const employeeData = useSelector((state) => state.employee);

  const [search, setSearch] = useState("");

  const [company, setCompany] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => dispatch(add(data)));
  }, []);

  const filteredData = employeeData.filter((emp) => {
    const nameMatch = emp.name.toLowerCase().includes(search.toLowerCase());

    const companyMatch = company === "" || emp.company.name === company;

    return nameMatch && companyMatch;
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search employee"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select value={company} onChange={(e) => setCompany(e.target.value)}>
        <option value="">All Companies</option>

        {employeeData.map((emp) => (
          <option key={emp.id} value={emp.company.name}>
            {emp.company.name}
          </option>
        ))}
      </select>

      {filteredData.map((emp) => (
        <div key={emp.id}>
          <p className="font-bold">{emp.name}</p>
          <p>{emp.company.name}</p>
        </div>
      ))}
    </div>
  );
}
