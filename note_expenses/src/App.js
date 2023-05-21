import React from "react"; //We don't need to import React as modern react project setup doesn't need it,
// But in past we have to import it. So you might see the import in many projects
import "./App.css";
import "./components/ExpenseDetails/ExpenseItem";
import Expense from "./components/ExpenseDetails/Expense";
import AddExpense from "./components/NewExpenses/AddExpense"

// function App() {
const App = () => {
  const expenseItem = [
    {
      id: 1,
      title: "Food",
      date: new Date(2020, 2, 28),
      amount: 2000,
    },
    {
      id: 2,
      title: "Rent",
      date: new Date(2021, 4, 21),
      amount: 6000,
    },
    {
      id: 3,
      title: "Transport",
      date: new Date(2021, 12, 1),
      amount: 1000,
    },
    {
      id: 4,
      title: "Extra",
      date: new Date(2022, 9, 13),
      amount: 500,
    },
  ];

  return (
    <div>
      <AddExpense />
      <Expense item={expenseItem} />
    </div>
  );

  // What actually happend behind the scene
  // The below code give you the result exactly same. Uncomment it to see
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Expense Data"),
  //   React.createElement(Expense, { item: expenseItem })
  // );
};

export default App;
