//react
import { createContext, useContext, useReducer, useEffect } from "react";

//reducer
import AppReducer from "./AppReducer";

//context
export const ExpenseTrackerContext = createContext();

//hook
export const useGlobalState = () => {
  const context = useContext(ExpenseTrackerContext);
  return context;
};

//initialState
const initialState = {
  transactions: [],
};

//provider
export const ExpenseTrackerProvider = ({ children }) => {
  //reducer variables
  const [state, dispatch] = useReducer(AppReducer, initialState, () => {
    const localData = localStorage.getItem("transactions");
    return localData ? JSON.parse(localData) : initialState;
  });

  //useEffect
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(state));
  }, [state]);

  //functions
  const addTransaction = (transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  const deleteTransaction = (id) => {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  //data
  const data = {
    transactions: state.transactions,
    addTransaction,
    deleteTransaction,
  };

  return (
    <ExpenseTrackerContext.Provider value={data}>
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
