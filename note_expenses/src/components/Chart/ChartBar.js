import "./ChartBar.css";

const ChartBar = (props) => {
  let amountInPercentage = "0%";

  if (props.maxAmount > 0) {
    amountInPercentage =
      Math.round((props.amount / props.maxAmount) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: amountInPercentage }}
        ></div>
      </div>
      <div className="chart-bar__label"> {props.label} </div>
    </div>
  );
};

export default ChartBar;
