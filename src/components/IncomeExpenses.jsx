//context
import { useGlobalState } from "../context/ExpenseTrackerContext";

const IncomeExpenses = () => {
  // Context variables
  const { transactions } = useGlobalState();

  // Variables
  const income = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((acc, transaction) => acc + transaction.amount, 0)
    .toFixed(2);

  const expense = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((acc, transaction) => acc + transaction.amount, 0)
    .toFixed(2);

  return (
    <>
      <div className="flex justify-between my-2">
        <h4>Ingresos</h4>
        <p>{income}</p>
      </div>
      <div className="flex justify-between my-2">
        <h4>Gastos</h4>
        <p>{expense}</p>
      </div>
    </>
  );
};

export default IncomeExpenses;
