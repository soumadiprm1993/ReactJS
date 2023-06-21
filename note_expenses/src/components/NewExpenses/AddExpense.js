import AddExpenseForm from './AddExpenseForm'
import './AddExpense.css'

const AddExpense = (props) => {

    const AddExpenseHandler = (expenseData) => {
        props.onAddExpense(expenseData)
    }

    return (
        <div className="new-expense">
            <AddExpenseForm onAddExpense = {AddExpenseHandler}/>
        </div>
    )
};

export default AddExpense;