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
        <div className="lg:container my-10 lg:my-0 lg:mx-auto w-[90%] lg:w-[50%]">
          <div className="bg-zinc-800 p-8 rounded-lg flex flex-col justify-between lg:flex-row gap-x-2">
            <div className="lg:w-[45%]">
              <Header />
              <IncomeExpenses />
              <Balance />
              <TransactionForm />
            </div>
            <div className="flex flex-col lg:w-[55%]">
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
