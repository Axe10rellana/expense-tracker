//react-icons
import { GiExpense } from "react-icons/gi";

const Header = () => {
  return (
    <h1 className="text-2xl font-bold">
      <p className="flex items-center justify-start gap-x-2">
        Expense Tracker <GiExpense />
      </p>
    </h1>
  );
};

export default Header;
