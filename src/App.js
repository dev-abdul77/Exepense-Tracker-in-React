import logo from "./logo.svg";
import React, {useState} from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const expenses = [
  {
    id: "e1",
    title: "A Car",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "A TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "A Chair",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  
  const [expensesArray, setExpensesArray] = useState(expenses)
  const addingNewExpenseData = (expense) =>{
    setExpensesArray((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  };
  return (
    <div /*className="App"*/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <NewExpense onAddExpense = {addingNewExpenseData}/>
      <Expenses items={expensesArray}></Expenses>
    </div>
  );
}

export default App;
