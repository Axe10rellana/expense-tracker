//react
import { useState } from "react";

//context
import { useGlobalState } from "../../context/ExpenseTrackerContext";

const TransactionForm = () => {
  //context variables
  const { addTransaction } = useGlobalState();

  //state variables
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  //functions
  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: +amount,
    });

    setAmount(0);
    setDescription("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
          type="text"
          name="description"
          placeholder="Enter a Description"
          autoComplete="off"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          required
        />
        <input
          className="bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full"
          type="number"
          name="amount"
          step="0.01"
          placeholder="00.00"
          autoComplete="off"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
          required
        />
        <button
          className={`bg-indigo-700 text-white transition-colors duration-300 px-3 py-2 rounded-lg block mb-2 w-full hover:bg-indigo-500 ${
            description !== "" && amount !== 0
              ? "cursor-pointer"
              : "cursor-not-allowed"
          }`}
        >
          Add Transaction
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;
