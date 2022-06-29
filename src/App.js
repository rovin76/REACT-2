import "./styles.css";
import Todo from "./components/Day-1/Todo";
import CartContainer from "./components/Day-2/CartContainer";
import TodoUseEffect from "./components/Day-3/TodoUseEffect";
export default function App() {
  return (
    <div className="App">
      <div>
        {/* Day-3 */}
        <TodoUseEffect />
      </div>
      <div>
        {/* Day-2 */}
        <CartContainer />
      </div>
      <div>
        {/* Day-1 */}
        <Todo />
      </div>
    </div>
  );
}
