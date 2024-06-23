import { useStore } from '../model/counter';

export const Counter = () => {
  const { count, inc, dec } = useStore()

  return (
    <div className="counter">
      <h1>Counter</h1>
      <button onClick={dec}>one up</button>
      <span>{count}</span>
      <button onClick={inc}>one up</button>
    </div>
  );
};
