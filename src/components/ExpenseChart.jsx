//react-icons
import { AiFillPieChart } from "react-icons/ai";

//victory
import { VictoryPie, VictoryLabel } from "victory";

//context
import { useGlobalState } from "../context/ExpenseTrackerContext";

const ExpenseChart = () => {
  //Context variables
  const { transactions } = useGlobalState();

  // Calcular ingresos y gastos totales
  const totalIncome = transactions
    .filter((transaction) => transaction.type === "income")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  const totalExpenses = transactions
    .filter((transaction) => transaction.type === "expense")
    .reduce((acc, transaction) => acc + transaction.amount, 0);

  // Calcular el total y los porcentajes
  const total = totalIncome + totalExpenses;
  const totalIncomePercentage = total
    ? Math.round((totalIncome / total) * 100)
    : 0;
  const totalExpensesPercentage = total
    ? Math.round((totalExpenses / total) * 100)
    : 0;

  return (
    <>
      {total === 0 ? (
        <h2 className="text-slate-300 text-lg font-bold block mb-5">
          <p className="flex items-center justify-start gap-x-2">
            No hay transacciones: no se puede visualizar el gráfico{" "}
            <AiFillPieChart />
          </p>
        </h2>
      ) : (
        <VictoryPie
          colorScale={["#e74c3c", "#2ecc71"]}
          data={[
            { x: "Gastos", y: totalExpensesPercentage },
            { x: "Ingresos", y: totalIncomePercentage },
          ]}
          animate={{ duration: 200 }}
          labels={({ datum }) => `${datum.x}: ${datum.y}%`}
          labelComponent={<VictoryLabel angle={45} style={{ fill: "white" }} />}
        />
      )}
    </>
  );
};

export default ExpenseChart;
