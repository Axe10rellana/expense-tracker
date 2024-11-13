//react
import { createContext, useContext, useReducer, useEffect } from "react";

//sweetalert2
import Swal from "sweetalert2";

//reducers
import AppReducer from "./AppReducer";

export const ExpenseTrackerContext = createContext();

export const useGlobalState = () => {
  const context = useContext(ExpenseTrackerContext);
  return context;
};

//initial state
const initialState = {
  transactions: [],
};

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

  //Función para agregar un ingreso
  const addIncome = (transaction) => {
    Swal.fire({
      icon: "question",
      title: "Question",
      text: "¿Desea añadir este ingreso a la lista de transacciones?",
      showDenyButton: true,
      denyButtonText: "No",
      denyButtonColor: "#4338ca",
      confirmButtonText: "Yes",
      confirmButtonColor: "#2ecc71",
    }).then((response) => {
      if (response.isConfirmed) {
        dispatch({
          type: "ADD_INCOME",
          payload: transaction,
        });
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Ingresos añadidos con éxito",
          timer: 2000,
          confirmButtonColor: "#2ecc71",
        });
      }
    });
  };

  //Función para agregar un gasto
  const addExpense = (transaction) => {
    Swal.fire({
      icon: "question",
      title: "Question",
      text: "¿Desea añadir este gasto a la lista de transacciones?",
      showDenyButton: true,
      denyButtonText: "No",
      denyButtonColor: "#4338ca",
      confirmButtonText: "Yes",
      confirmButtonColor: "#e74c3c",
    }).then((response) => {
      if (response.isConfirmed) {
        dispatch({
          type: "ADD_EXPENSE",
          payload: transaction,
        });
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Gasto añadido correctamente",
          timer: 2000,
          confirmButtonColor: "#e74c3c",
        });
      }
    });
  };

  //Función para borrar una transación
  const deleteTransaction = (id) => {
    Swal.fire({
      icon: "error",
      title: "Warning",
      text: "¿Desea eliminar esta transacción de la lista de transacciones?",
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
          text: "Transacción eliminada correctamente",
          timer: 2000,
          confirmButtonColor: "#2ecc71",
        });
      }
    });
  };

  const reorderTransactions = (startIndex, endIndex) => {
	  const result = Array.from(state.transactions);
	  const [removed] = result.splice(startIndex, 1);
	  result.splice(endIndex, 0, removed);
	  
	  dispatch({
	    type: "REORDER_TRANSACTIONS",
	    payload: result,
	  });
	};

  const data = {
    transactions: state.transactions,
    addIncome,
    addExpense,
    deleteTransaction,
    reorderTransactions,
  };

  return (
    <ExpenseTrackerContext.Provider value={data}>
      {children}
    </ExpenseTrackerContext.Provider>
  );
};
