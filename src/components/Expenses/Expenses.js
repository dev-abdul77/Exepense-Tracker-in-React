import React, { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import Container from "../UI/Container";
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart'
import "./Expenses.css";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() == filterYear;
  });
  
  return (
    <div>
      <Container className="expenses">
        <ExpenseFilter
          selected={filterYear}
          onChangeFilter={filterChangeHandler}
        ></ExpenseFilter>
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses}></ExpensesList>
      </Container>
    </div>
  );
};

export default Expenses;
