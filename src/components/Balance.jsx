//context
import { useGlobalState } from "../context/ExpenseTrackerContext";

const Balance = () => {
  //context variables
  const { transactions } = useGlobalState();

  //variables
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="flex justify-between">
      <h3>Your Balance</h3>
      <h2 className="text-2xl font-bold">${total}</h2>
    </div>
  );
};

export default Balance;
