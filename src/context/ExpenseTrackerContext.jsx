//react
import { createContext, useContext, useReducer, useEffect } from "react";

//sweetalert2
import Swal from "sweetalert2";

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
    Swal.fire({
      icon: "question",
      title: "Question",
      text: "do you want to add this transaction to the transaction list?",
      showDenyButton: true,
      denyButtonText: "No",
      denyButtonColor: "#4338ca",
      confirmButtonText: "Yes",
      confirmButtonColor: "#2ecc71",
    }).then((response) => {
      if (response.isConfirmed) {
        dispatch({
          type: "ADD_TRANSACTION",
          payload: transaction,
        });
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Task successfully deleted",
          timer: 2000,
          confirmButtonColor: "#2ecc71",
        });
      } else if (response.isDenied) {
        return;
      }
    });
  };

  const deleteTransaction = (id) => {
    Swal.fire({
      icon: "error",
      title: "Warning",
      text: "Do you want to remove this transaction from the transaction list?",
      showDenyButton: true,
      denyButtonText: "No",
      denyButtonColor: "#4338ca",
      confirmButtonText: "Yes",
      confirmButtonColor: "#e74c3c",
    }).then((response) => {
      if (response.isConfirmed) {
        dispatch({
          type: "DELETE_TRANSACTION",
          payload: id,
        });
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Task successfully deleted",
          timer: 2000,
          confirmButtonColor: "#2ecc71",
        });
      } else if (response.isDenied) {
        return;
      }
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
