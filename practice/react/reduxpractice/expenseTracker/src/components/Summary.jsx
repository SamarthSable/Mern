import React, { useState } from "react";
import { useSelector } from "react-redux";

export default function Summary() {
  const [filter, setFilter] = useState("All");
  const myIncome = useSelector((state) => state.tracker.income);
  const income = myIncome
    .filter((i) => i.category === "Income")
    .reduce((sum, i) => {
      return sum + i.amount;
    }, 0);
  const expense = myIncome
    .filter((i) => i.category === "Expense")
    .reduce((sum, i) => {
      return sum + i.amount;
    }, 0);
  const filteredData =
    filter === "All" ? myIncome : myIncome.filter((i) => i.category === filter);

  return (
    <div>
      <h1 className="text-3xl font-bold">Summary</h1>
      <select
        className="border p-2 mb-3"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
      </select>

      <div>
        <table className="border border-black border-collapse">
          <tr>
            <th className="border border-black p-2">Income</th>
            <th className="border border-black p-2">Category</th>
            <th className="border border-black p-2">Date</th>
          </tr>
          {filteredData.map((i) => (
            <tr key={i.id}>
              <td className="border border-black p-2">{i.amount}</td>
              <td className="border border-black p-2">{i.category}</td>
              <td className="border border-black p-2">{i.date}</td>
            </tr>
          ))}
        </table>
      </div>
      <div>
        <h1 className="text-3xl font-bold">Net Balance</h1>
        <h1 className="text-3xl font-bold">Total Income: {income}</h1>
        <h1 className="text-3xl font-bold">Total Expense: {expense}</h1>
        <h1 className="text-3xl font-bold">Net Balance: {income - expense}</h1>
      </div>
    </div>
  );
}
