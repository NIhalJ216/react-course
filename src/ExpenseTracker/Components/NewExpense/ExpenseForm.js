import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm({ onSaveExpenseData }) {
  const [inputVals, setInputVals] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputVals({ ...inputVals, [name]: value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = { ...inputVals };
    onSaveExpenseData(expenseData);
    // console.log(expenseData)
    setInputVals({
      title: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={inputVals.title}
            onChange={handleChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            name="amount"
            value={inputVals.amount}
            onChange={handleChange}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            name="date"
            value={inputVals.date}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
