import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../slices/expenseslice";

export default function AddExpense() {
  const [income, setIncome] = useState("");
  const [expense, setExpense] = useState("");
  const dispatch = useDispatch();

  function handleAddInc() {
    const newInc = {
      id: Date.now(),
      amount: Number(income),
      category: "Income",
      date: new Date().toLocaleDateString(),
    };
    console.log(newInc);
    dispatch(add(newInc));
    setIncome("");
  }
  function handleAddExp() {
    const newInc = {
      id: Date.now(),
      amount: Number(expense),
      category: "Expense",
      date: new Date().toLocaleDateString(),
    };
    console.log(newInc);
    dispatch(add(newInc));
    setExpense("");
  }
  return (
    <div>
      <h1 className="text-3xl font-bold">Expense Tracker</h1>
      <div className="flex gap-2">
        <input
          placeholder="Add Income"
          className="border-2"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
        />
        <button
          className="border-2 p-1.5 rounded-2xl bg-amber-200"
          onClick={handleAddInc}
        >
          Submit Income
        </button>
        <input
          placeholder="Add Expense"
          className="border-2"
          value={expense}
          onChange={(e) => setExpense(e.target.value)}
        />
        <button
          className="border-2 p-1.5 rounded-2xl bg-amber-200"
          onClick={handleAddExp}
        >
          Submit Expense
        </button>
      </div>
    </div>
  );
}
