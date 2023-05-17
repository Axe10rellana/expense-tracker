//context
import { useGlobalState } from "../../context/ExpenseTrackerContext";

const TransactionItem = ({ transaction }) => {
  //context variables
  const { deleteTransaction } = useGlobalState();

  return (
    <li className="bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex items-center justify-between">
      <p className="text-sm">{transaction.description}</p>
      <div className="flex items-center gap-x-2">
        <span>${transaction.amount}</span>
        <button
          className="bg-[#e74c3c] text-white text-lg px-2 rounded-full"
          onClick={() => deleteTransaction(transaction.id)}
        >
          x
        </button>
      </div>
    </li>
  );
};

export default TransactionItem;
