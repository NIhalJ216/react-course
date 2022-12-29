import React, { useState } from "react";
import ExpenseItem from "../../Pages/ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function Expenses({ items }) {
  const [yearFilter, setYearFilter] = useState("2020");

  const handleYearFilter = (selectedYear) => {
    setYearFilter(selectedYear);
  };

  const filteredExpenses = items.filter((expense) => {
    return expense.date.getFullYear().toString() === yearFilter;
  });

  let expenseContent = (
    <h3 style={{ color: "white", textAlign: "center" }}>NO Expenses Found!</h3>
  );

  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((exp) => (
      <ExpenseItem
        key={exp.id}
        title={exp.title}
        amount={exp.amount}
        date={exp.date}
      />
    ));
  }
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={yearFilter} onSelectYear={handleYearFilter} />
        {expenseContent}
      </Card>
    </div>
  );
}

export default Expenses;
