import React , { useState} from "react";
import Container from "../UI/Container";
import ExpenseDate  from "./ExpenseDate";
import "./ExpenseItem.css";
function ExpenseItem(props) {
  return (
    <li>
    <Container className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Container>
    </li>
  );
}

export default ExpenseItem;
