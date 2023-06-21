import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const amount = props.expensesAmount.map((expenseAmount) => {
    return expenseAmount.amount;
  });
  const maxAmount = amount.reduce((x, y) => x + y);
  console.log(maxAmount);

  return (
    <div className="chart">
      {props.expensesAmount.map((expenseAmount) => (
        <ChartBar
          key={expenseAmount.label}
          amount={expenseAmount.amount}
          maxAmount={maxAmount}
          label={expenseAmount.label}
        />
      ))}
    </div>
  );
};

export default Chart;
