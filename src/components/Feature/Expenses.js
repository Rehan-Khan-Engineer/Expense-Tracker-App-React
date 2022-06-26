import { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import NoExpensesItemLogic from "./NoExpensesItemLogic";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    // console.log(selectedYear);
    setFilteredYear(selectedYear);
  };
  //this helps in rendering items only based on year
  const filteredExpenses = props.items.filter((element) => {
    return element.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          defaultYear={filteredYear}
          onFilterYear={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <NoExpensesItemLogic items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
