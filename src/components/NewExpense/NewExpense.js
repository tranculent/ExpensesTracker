import React, { useState } from 'react';

import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        
        props.onRetrieveExpenses(expenseData);
    }

    const [showForm, setShowForm] = useState(false);

    const toggleFormHandler = () => {
        setShowForm(!showForm);
    }

    return (
        <div className='new-expense'>
            {showForm ? <NewExpenseForm toggleFormHandler={toggleFormHandler} showForm={showForm} onSaveExpenseData={saveExpenseDataHandler} /> : <button onClick={toggleFormHandler}>Add Expense</button>}
        </div>
        
    );
};

export default NewExpense;