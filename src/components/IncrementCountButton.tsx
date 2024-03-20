import { FC } from "react";
import { useCountStore } from "../stores/useCountStore";
   
const IncrementCountButton: FC = () => {
  const incrementCount = useCountStore((state) => state.increment);

  return (
    <button onClick={incrementCount}>+</button>
  )
} 

export { IncrementCountButton };