//@hello-pangea/dnd
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

//context
import { useGlobalState } from "../../context/ExpenseTrackerContext";

//components
import { TransactionItem } from "../";

const TransactionList = () => {
  //context variables
  const { transactions, reorderTransactions } = useGlobalState();

  //variables
  const hasTransactions = transactions.length > 0;

  // Functions
  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    reorderTransactions(result.source.index, result.destination.index);
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <h3 className="text-slate-300 text-xl font-bold block">
        {hasTransactions ? "Historial" : "Historial vacío"}
      </h3>
      <Droppable droppableId="transactions">
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {transactions.map((transaction, index) => (
              <Draggable key={transaction.id} draggableId={transaction.id} index={index}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <TransactionItem transaction={transaction} />
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TransactionList;
