import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const { counterVal } = useSelector((store) => store.counter);
  return (
    <div>
      <p>Counter current value: {counterVal}</p>
    </div>
  );
};

export default DisplayCounter;
