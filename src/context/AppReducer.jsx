export default (state, action) => {
  switch (action.type) {
    case "ADD_INCOME":
      return {
        ...state,
        transactions: [
          ...state.transactions,
          { ...action.payload, type: "income" },
        ],
      };
    case "ADD_EXPENSE":
      return {
        ...state,
        transactions: [
          ...state.transactions,
          { ...action.payload, type: "expense" },
        ],
      };
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
