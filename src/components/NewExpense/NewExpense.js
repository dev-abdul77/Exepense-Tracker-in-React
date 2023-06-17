import React, {useState} from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
const NewExpense = (props) => {
  const [isAdding , setIsAdding] = useState(false);
  const startAdding = () =>{
    setIsAdding(true);
  }
  const endAdding = () =>{
    setIsAdding(false);
  }
  const submitExpesneDataHandler = (expense) =>{
    const newExpense = {
      ...expense,
      id:Math.random().toString()
    }
    props.onAddExpense(newExpense)
  };
  return (
    
    <div className="new-expense">
    {!isAdding && (<button onClick={startAdding}>Add New Expense</button>)}
    {isAdding && <ExpenseForm onSubmitExpenseData={submitExpesneDataHandler}
        onCancel={endAdding}
      />}
      
    </div>
  );
};

export default NewExpense;
