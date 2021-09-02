import React, { useState } from 'react';

import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState('2020');
  const [validExpenses, setValidExpenses] = useState([]);

  const retrieveSelectedYear = (year) => {
    setSelectedYear(year);

    setValidExpenses(
      props.items.filter(expense => expense.date.getFullYear() - year === 0)
      
    )
  }

  return (
    <div>
      <Card className="expenses">
      <ExpensesFilter onRetrieveSelectedYear={retrieveSelectedYear} selected={selectedYear} />
      <ExpensesChart expenses={validExpenses} />
      <ExpensesList items={validExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
