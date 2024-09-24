import { useSelector } from "react-redux";
import "./App.css";
import Controls from "./components/Controls";
import DisplayCounter from "./components/DisplayCounter";
import PrivacyMessages from "./components/PrivacyMessages";

function App() {
  const privacy = useSelector((store) => store.privacy);

  return (
    <>
      <h1>redux toolkit</h1>
      {privacy ? <PrivacyMessages /> : <DisplayCounter />}
      <Controls />
    </>
  );
}

export default App;
