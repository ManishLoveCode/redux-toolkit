import { useDispatch } from "react-redux";
import { useRef } from "react";
import { counterActions } from "../store/counterSlice";
import { privacyActions } from "../store/privacySlice";

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

  const handlePrivacyToggle = () => {
    dispatch(privacyActions.toggle());
  };
  return (
    <>
      <input className="val-input" type="number" ref={inputElement} placeholder="Enter Number" />
      <br />
      <div className="btn-gap">
        <button className="inc-btn" onClick={handleAdd}>
          addValue
        </button>
        <button className="dec-btn" onClick={handleSubtract}>
          subtractValue
        </button>
      </div>
      <br />

      <div>
        <button className="inc-btn" onClick={handleIncrement}>
          Increment++
        </button>
        <button className="privacy-btn" onClick={handlePrivacyToggle}>
          privacyToggle
        </button>
        <button className="dec-btn" onClick={handleDecrement}>
          Decrement--
        </button>
      </div>
    </>
  );
};

export default Controls;
