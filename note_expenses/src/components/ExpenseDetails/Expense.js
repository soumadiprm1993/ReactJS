import { useState } from "react";
import Card from "../ContainerUIComp/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expense.css";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

// function Expense(props) {
const Expense = (props) => {
  const [dateFilter, setDateFilter] = useState("See All");

  const filteredExpenseItems = (dateFilter==="See All") ? props.item : props.item.filter(
    (expense) => expense.date.getFullYear().toString() === dateFilter
  );

  const selectHandler = (filteredDate) => {
    setDateFilter(filteredDate);
  };

  return (
    <li>
      <Card className="expenses">
        <ExpenseFilter defaultValue={dateFilter} onSelectDate={selectHandler} />
        <ExpenseChart expenseItem={filteredExpenseItems}></ExpenseChart>
        <ExpenseList expenseItem={filteredExpenseItems} />
      </Card>
    </li>
  );
};

export default Expense;
