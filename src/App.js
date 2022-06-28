import "./styles.css";
import Todo from "./components/Day-1/Todo";
import CartContainer from "./components/Day-2/CartContainer";
export default function App() {
  return (
    <div className="App">
      <CartContainer />
      <Todo />
    </div>
  );
}
