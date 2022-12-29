import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpenses.css'

function NewExpenses({onAddExpense}) {
  const saveDataExpenseHandler = (enterdExpenseData) => {
    const expenseData = {
      ...enterdExpenseData,
      id: Math.random().toString()
    }
    onAddExpense(expenseData)
    // console.log(expenseData)
  }
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpenseData={saveDataExpenseHandler}/>
    </div>
  )
}

export default NewExpenses
