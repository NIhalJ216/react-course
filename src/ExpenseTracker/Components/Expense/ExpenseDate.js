import React from "react";
import "./ExpenseDate.css";

function ExpenseDate(props) {
  const newYear = new Date(props.date);
  const month = newYear.toLocaleString("en-US", { month: "long" });
  const day = newYear.toLocaleString("en-US", { day: "2-digit" });
  const year = newYear.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{day}</div>
      <div className="expense-date__day">{year}</div>
    </div>
  );
}

export default ExpenseDate;
