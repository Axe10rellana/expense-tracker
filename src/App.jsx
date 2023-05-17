//context
import { ExpenseTrackerProvider } from "./context/ExpenseTrackerContext";

//components
import {
  Balance,
  ExpenseChart,
  Header,
  IncomeExpenses,
  TransactionForm,
  TransactionList,
} from "./components";

const App = () => {
  return (
    <ExpenseTrackerProvider>
      <div className="lg:h-screen flex items-center justify-center">
        <div className="container mx-auto w-[90%] lg:w-[50%]">
          <div className="bg-zinc-800 p-8 rounded-lg flex flex-col justify-between lg:flex-row gap-x-2">
            <div>
              <Header />
              <IncomeExpenses />
              <Balance />
              <TransactionForm />
            </div>
            <div className="flex flex-col">
              <ExpenseChart />
              <TransactionList />
            </div>
          </div>
        </div>
      </div>
    </ExpenseTrackerProvider>
  );
};

export default App;
