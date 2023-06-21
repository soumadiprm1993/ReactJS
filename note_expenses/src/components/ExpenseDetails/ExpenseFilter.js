import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  const selectHandler = (event) => {
    props.onSelectDate(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label className="expenses-filter label">Filter by Year</label>
        <select value={props.defaultValue} onChange={selectHandler}>
          <option value="See All">See All</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
