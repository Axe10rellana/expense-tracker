//context
import { useGlobalState } from "../../context/ExpenseTrackerContext";

//components
import { TransactionItem } from "../";

const TransactionList = () => {
  //Context variables
  const { transactions } = useGlobalState();

  //variables
  const hasTransactions = transactions.length > 0;

  return (
    <>
      <h3 className="text-slate-300 text-xl font-bold block">
        {hasTransactions ? "Historial" : "Historial vacío"}
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
