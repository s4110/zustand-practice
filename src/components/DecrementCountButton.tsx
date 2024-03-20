import { FC } from "react";
import { useCountStore } from "../stores/useCountStore";
   
const DecrementCountButton: FC = () => {
  const decrementCount = useCountStore((state) => state.decrement);

  return (
    <button onClick={decrementCount}>-</button>
  )
} 

export { DecrementCountButton };