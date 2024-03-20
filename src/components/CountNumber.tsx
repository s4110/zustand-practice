import { FC } from "react";
import { useCountStore } from "../stores/useCountStore";
   
const CountNumber: FC = () => {
  const count = useCountStore((state) => state.count);

  return (
    <h2>{count}</h2>
  )
} 

export { CountNumber };