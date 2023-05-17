//context
import { useGlobalState } from "../../context/ExpenseTrackerContext";

//components
import { TransactionItem } from "../";

const TransactionList = () => {
  //context variables
  const { transactions } = useGlobalState();

  //variables
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h3 className="text-slate-300 text-xl font-bold block">
        {+total === 0 ? "Empty history" : "History"}
      </h3>
      <ul>
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
