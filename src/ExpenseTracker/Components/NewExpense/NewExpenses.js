import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";

function NewExpenses({ onAddExpense }) {
  const [isEditing, setIsEditing] = useState(false);
  const saveDataExpenseHandler = (enterdExpenseData) => {
    const expenseData = {
      ...enterdExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenseData);
    setIsEditing(false);
    // console.log(expenseData)
  };

  const editingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={editingHandler}>Add New Expense</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveDataExpenseHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
}

export default NewExpenses;
