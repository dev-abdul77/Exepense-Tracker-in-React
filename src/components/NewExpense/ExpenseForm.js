import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  // const [userInput , setUserInput] = useState(                //syntax to use single state but recommended to use multiple states
  //     {
  //         enteredTitle:'',
  //         enteredAmount:'',
  //         enteredDate:''
  //     }
  // );
  const titleChangeHandler = (event) => {
    // setUserInput({ this syntax also fails sometime, so if you want to use single state use it like that
    //     ...userInput,
    //     enteredTitle:event.target.value,
    // });
    // setUserInput((prevState)=>{   //better way to use single state
    //     return {...prevState,enteredTitle:event.target.value};
    // });
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredAmount:event.target.value,
    // });
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //     ...userInput,
    //     enteredDate:event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault(); //to prevent reload of page
    const expense = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSubmitExpenseData(expense)
    setEnteredAmount('');
    setEnteredDate('');
    setEnteredTitle('');
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          ></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={enteredDate}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          ></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>CANCEL</button>
        <button type="submit">ADD EXPENSE</button>
        
      </div>
    </form>
  );
};

export default ExpenseForm;
