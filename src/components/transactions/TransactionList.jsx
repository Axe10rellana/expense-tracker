//context
import { useGlobalState } from "../../context/ExpenseTrackerContext";

//components
import { TransactionItem } from "../";

const TransactionList = () => {
  //context variables
  const { transactions } = useGlobalState();

  return (
    <>
      <h3 className="text-slate-300 text-xl font-bold block">History</h3>
      <ul>
        {transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
