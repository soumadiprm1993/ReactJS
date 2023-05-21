import { useState } from "react";
import "./AddExpenseForm.css";

const AddExpenseForm = () => {
  const [enterdedTitle, setEnteredTitle] = useState("");
  const [enterdedAmount, setEnteredAmount] = useState("");
  const [enterdedDate, setEnteredDate] = useState("");

//   Alternative approach to update the state

// const [userInput, setUserInput] = useState({
//     enterdedTitle: '',
//     enterdedAmount: '',
//     enterdedDate: ''
// })

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput((prevState) => {
    //     return {...userInput,enterdedTitle:event.target.value}
    // });
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput((prevState) => {
    //     return {...userInput,enterdedAmount:event.target.value}
    // });
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput((prevState) => {
    //     return {...userInput,enterdedDate:event.target.value}
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(enterdedTitle, enterdedAmount, enterdedDate);

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Expense Title </label>
          <input type="text" onChange={titleChangeHandler} value={enterdedTitle}></input>
        </div>
        <div className="new-expense__control">
          <label> Amount </label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enterdedAmount}
          ></input>
        </div>
        <div className="new-expense__control">
          <label> Date </label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-12"
            onChange={dateChangeHandler}
            value={enterdedDate}
          ></input>
        </div>
      </div>
      <button type="submit"> Add Expense </button>
    </form>
  );
};

export default AddExpenseForm;
