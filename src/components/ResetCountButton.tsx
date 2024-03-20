import { FC } from "react";
import { useCountStore } from "../stores/useCountStore";
   
const ResetCountButton: FC = () => {
  const resetCount = useCountStore((state) => state.reset);

  return (
    <button onClick={resetCount}>reset</button>
  )
} 

export { ResetCountButton };