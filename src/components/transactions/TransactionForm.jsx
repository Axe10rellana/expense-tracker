//react
import { useState } from "react";

//react-icons
import { AiOutlineTransaction } from "react-icons/ai";

//context
import { useGlobalState } from "../../context/ExpenseTrackerContext";

const TransactionForm = () => {
  //Context variables
  const { addIncome, addExpense } = useGlobalState();

  //State variables
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  //Functions
  const handleTransaction = (transactionType) => {
    const transaction = {
      id: window.crypto.randomUUID(),
      description,
      amount: +amount,
      type: transactionType,
    };

    if (transactionType === "income") {
      addIncome(transaction);
    } else if (transactionType === "expense") {
      addExpense(transaction);
    }

    setAmount(0);
    setDescription("");
  };

  const handleAmountChange = (e) => {
    const value = parseFloat(e.target.value);
    setAmount(value > 0 ? value : "");
  };

  return (
    <div>
      <form>
        <input
          className="bg-zinc-600 text-white outline-none px-3 py-2 rounded-lg block mb-2 w-full"
          type="text"
          name="description"
          placeholder="Ingrese una descripción"
          autoComplete="off"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          required
        />
        <input
          className="bg-zinc-600 text-white outline-none px-3 py-2 rounded-lg block mb-2 w-full"
          type="number"
          name="amount"
          step="0.01"
          placeholder="00.00"
          autoComplete="off"
          onChange={handleAmountChange}
          value={amount}
          min="0.01"
          required
        />
        <button
          type="button"
          onClick={() => handleTransaction("income")}
          className={`bg-indigo-700 text-white outline-none transition-colors duration-300 px-3 py-2 rounded-lg block mb-2 w-full hover:bg-indigo-500 ${
            description !== "" && amount > 0
              ? "cursor-pointer"
              : "cursor-not-allowed"
          }`}
        >
          <p className="flex items-center justify-center gap-x-2">
            Agregar Ingreso <AiOutlineTransaction />
          </p>
        </button>
        <button
          type="button"
          onClick={() => handleTransaction("expense")}
          className={`bg-red-700 text-white outline-none transition-colors duration-300 px-3 py-2 rounded-lg block mb-2 w-full hover:bg-red-500 ${
            description !== "" && amount > 0
              ? "cursor-pointer"
              : "cursor-not-allowed"
          }`}
        >
          <p className="flex items-center justify-center gap-x-2">
            Agregar Gasto <AiOutlineTransaction />
          </p>
        </button>
      </form>
    </div>
  );
};

export default TransactionForm;
