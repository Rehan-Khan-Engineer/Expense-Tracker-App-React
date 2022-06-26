import ExpenseItem from "./ExpenseItem";
import "./NoExpensesItemLogic.css";

const NoExpensesItemLogic = (props) => {
  if (props.items.length === 0) {
    return (
      <h2 className="expenses-list__fallback">
        No expenses found! would like to add one?
      </h2>
    );
  }

  return (
    <ul className="expenses-list">
      {props.items.map((element) => (
        <ExpenseItem
          key={element.id}
          title={element.title}
          amount={element.amount}
          date={element.date}
        />
      ))}
    </ul>
  );
};

export default NoExpensesItemLogic;
