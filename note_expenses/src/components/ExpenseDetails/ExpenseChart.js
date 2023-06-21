import Chart from "../Chart/Chart"

const ExpenseChart = (props) => {

    const expensesAmount = [
        { label: 'Jan', amount: 0 },
        { label: 'Feb', amount: 0 },
        { label: 'Mar', amount: 0 },
        { label: 'Apr', amount: 0 },
        { label: 'May', amount: 0 },
        { label: 'Jun', amount: 0 },
        { label: 'Jul', amount: 0 },
        { label: 'Aug', amount: 0 },
        { label: 'Sep', amount: 0 },
        { label: 'Oct', amount: 0 },
        { label: 'Nov', amount: 0 },
        { label: 'Dec', amount: 0 }
    ]

    props.expenseItem.map((expense) => {
        const expenseMonth = expense.date.getMonth()
        expensesAmount[expenseMonth].amount += expense.amount
        return 0
    })

    return (
        <Chart expensesAmount = {expensesAmount}/>
    )
}

export default ExpenseChart;