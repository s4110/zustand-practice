import "./App.css";
import { Counter } from "./components/Counter";
import { CountNumber } from "./components/CountNumber";
import { IncrementCountButton } from "./components/IncrementCountButton";
import { DecrementCountButton } from "./components/DecrementCountButton";
import { ResetCountButton } from "./components/ResetCountButton";
import { useSliceStore } from "./stores/useSliceStore";

function App() {
  const countA = useSliceStore((state) => state.countA);
  const countB = useSliceStore((state) => state.countB);
  
  const {
    incrementA,
    incrementB,
    decrementA,
    decrementB,
    resetA,
    resetB,
    resetAll
  } = useSliceStore((state) => state);

  return (
    <>
      <div className="card">
        <CountNumber/>
        <IncrementCountButton/>
        <DecrementCountButton/>
        <ResetCountButton/>
      </div>
      <div className="card">

      </div>
      <div className="card">
        <Counter
          count={countA}
          onIncrement={incrementA}
          onDecrement={decrementA}
          onReset={resetA}
          onResetAll={resetAll}
        >SliceA</Counter>
      </div>
      <div className="card">
        <Counter
          count={countB}
          onIncrement={incrementB}
          onDecrement={decrementB}
          onReset={resetB}
          onResetAll={resetAll}
        >SliceB</Counter>
      </div>
    </>
  )
}

export default App
