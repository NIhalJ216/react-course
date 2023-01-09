import React from "react";
import ExpenseItem from "../../Pages/ExpenseItem";
import "./ExpensesList.css";

function ExpensesList({ items }) {
  if (items.length === 0) {
    return <h2 className="expenses-list__fallback">Found No Expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {items.map((exp) => (
        <ExpenseItem
          key={exp.id}
          title={exp.title}
          amount={exp.amount}
          date={exp.date}
        />
      ))}
    </ul>
  );
}

export default ExpensesList;
