//context
import { useGlobalState } from "../context/ExpenseTrackerContext";

const Balance = () => {
  //Context variables
  const { transactions } = useGlobalState();

  //Calcula el balance total considerando ingresos y gastos
  const total = transactions
    .reduce((acc, transaction) => {
      return transaction.type === "income"
        ? acc + transaction.amount
        : acc - transaction.amount;
    }, 0)
    .toFixed(2);

  return (
    <div className="flex justify-between">
      <h3>Tu Balance</h3>
      <h2 className="text-2xl font-bold">${total}</h2>
    </div>
  );
};

export default Balance;
