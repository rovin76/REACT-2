import "./styles.css";
import Todo from "./components/Day-1/Todo";
import CartContainer from "./components/Day-2/CartContainer";
import TodoUseEffect from "./components/Day-3/TodoUseEffect";
import Home from "./components/Day-4/Home";
import DayFive from "./components/Day-5/DayFive";
export default function App() {
  return (
    <div className="App">
      <div>
         {/* Day-5 */}
        <DayFive/>
        {/* Day-4 */}
        <Home />
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
