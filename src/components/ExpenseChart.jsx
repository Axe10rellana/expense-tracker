//react-icons
import { AiFillPieChart } from "react-icons/ai";

//react-victory
import { VictoryPie, VictoryLabel } from "victory";

//context
import { useGlobalState } from "../context/ExpenseTrackerContext";

const ExpenseChart = () => {
  //context variables
  const { transactions } = useGlobalState();

  //variables
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  const totalIncome = transactions
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaction) => (acc += transaction.amount), 0);
  const totalExpenses =
    transactions
      .filter((transaction) => transaction.amount < 0)
      .reduce((acc, transaction) => (acc += transaction.amount), 0) * -1;
  const totalExpensesPercentage = Math.round(
    (totalExpenses / totalIncome) * 100
  );
  const totalIncomePercentage = 100 - totalExpensesPercentage;

  return (
    <>
      {+total === 0 ? (
        <h2 className="text-slate-300 text-lg font-bold block mb-5">
          <p className="flex items-center justify-start gap-x-2">
            No transactions: unable to display the chart <AiFillPieChart />
          </p>
        </h2>
      ) : +total < 0 ? (
        <h2 className="text-slate-300 text-lg font-bold block mb-5">
          <p className="flex items-center justify-start gap-x-2">
            Negative balance: unable to display the graph <AiFillPieChart />
          </p>
        </h2>
      ) : (
        <VictoryPie
          colorScale={["#e74c3c", "#2ecc71"]}
          data={[
            { x: "Expenses", y: totalExpensesPercentage },
            { x: "Incomes", y: totalIncomePercentage },
          ]}
          animate={{ duration: 200 }}
          labels={({ datum }) => `${datum.y}%`}
          labelComponent={<VictoryLabel angle={45} style={{ fill: "white" }} />}
        />
      )}
    </>
  );
};

export default ExpenseChart;
