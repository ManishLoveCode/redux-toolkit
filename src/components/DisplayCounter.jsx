import { useSelector } from "react-redux";

const DisplayCounter = () => {
  const { counterVal } = useSelector((store) => store.counter);
  return (
    <div>
      <h2>
        Counter current value:{" "}
        <span style={{ color: "yellow" }}>{counterVal}</span>
      </h2>
    </div>
  );
};

export default DisplayCounter;
