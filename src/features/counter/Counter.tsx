import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { incremented, decremented } from './counter-slice';

const Counter = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    dispatch(incremented());
  };

  const handleDecrement = () => {
    dispatch(decremented());
  };

  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={handleDecrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
