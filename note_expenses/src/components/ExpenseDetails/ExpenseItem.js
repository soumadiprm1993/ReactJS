import { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../ContainerUIComp/Card";

// function ExpenseItem(props) {
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    setTitle(title + " Edited")
    console.log(title)
  };
  return (
    <>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <h2> {title} </h2>
        <div className="expense-item__description"> {props.amount} </div>

        <button onClick={clickHandler}> Click Me </button>
      </Card>
    </>
  );
};

export default ExpenseItem;
