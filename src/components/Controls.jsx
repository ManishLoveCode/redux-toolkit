import { useDispatch } from "react-redux";
import { counterActions } from "../store/index";
import { useRef } from "react";

const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch(counterActions.increment());
  };

  const handleDecrement = () => {
    dispatch(counterActions.decrement());
  };

  const handleAdd = () => {
    dispatch(
      counterActions.add({
        num: inputElement.current.value,
      })
    );
  };

  const handleSubtract = () => {
    dispatch(
      counterActions.subtract({
        num: inputElement.current.value,
      })
    );
  };
  return (
    <>
      <button onClick={handleIncrement}>Increment++</button>
      <button onClick={handleDecrement}>Decrement--</button>
      <br />
      <button onClick={handleAdd}>addValue</button>
      <input type="number" ref={inputElement} />
      <button onClick={handleSubtract}>subtractValue</button>
    </>
  );
};

export default Controls;
