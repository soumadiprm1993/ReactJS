import { useState } from "react";
import "./AddExpenseForm.css";

const AddExpenseForm = (props) => {
  const [enterdedTitle, setEnteredTitle] = useState("");
  const [enterdedAmount, setEnteredAmount] = useState("");
  const [enterdedDate, setEnteredDate] = useState("");
  const [showForm, setShowForm] = useState(false);

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

    const expenseData = {
      title: enterdedTitle,
      amount: +enterdedAmount,
      date: new Date(enterdedDate),
    };

    props.onAddExpense(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");

    clickHandlerShowForm();
  };

  const clickHandlerShowForm = () => {
    setShowForm(!showForm);
  };

  if (!showForm) {
    return <button onClick={clickHandlerShowForm}> Add New Expense </button>;
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label> Expense Title </label>
          <input
            type="text"
            onChange={titleChangeHandler}
            value={enterdedTitle}
          ></input>
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
      <button type="button" onClick={clickHandlerShowForm}>
        {" "}
        Cancel{" "}
      </button>
      <button type="submit"> Add Expense </button>
    </form>
  );
};

export default AddExpenseForm;
