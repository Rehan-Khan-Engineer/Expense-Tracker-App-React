import { useState } from "react";
import Expenses from "./components/Feature/Expenses";
import NewExpense from "./components/AddNewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Gaming Headsets",
    amount: 94.12,
    date: new Date(2020, 4, 25),
  },
  {
    id: "e2",
    title: "New Laptop",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Table Fan",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [newExpenseRendering, setNewExpenseRendering] =
    useState(DUMMY_EXPENSES);

  const saveExpenseDataHandler2 = (userEnteredExpenseData2) => {
    // console.log(userEnteredExpenseData2);

    // setNewExpenseRendering([userEnteredExpenseData2, ...DUMMY_EXPENSES]);
    //a better way of updating a state here would be to use function syntax, since
    // our new state depends upon the previous state.(we automatically get prevState
    //from React, which is the most recent state)

    setNewExpenseRendering((prevState) => [
      userEnteredExpenseData2,
      ...prevState,
    ]);
  };

  return (
    <div>
      <NewExpense onSaveExpenseData2={saveExpenseDataHandler2} />
      <Expenses items={newExpenseRendering} />
    </div>
  );
};

export default App;
