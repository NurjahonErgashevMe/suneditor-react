import { useEffect, useState } from "react";
import "./App.css";
import Editor from "./components/Editor/Editor";
function App() {
  const [value, setValue] = useState<string>("");
  useEffect(() => {
    console.log(value);
  }, [value, setValue]);
  return (
    <div
      style={{
        height: "200vh",
        background: "red",
      }}
    >
      <Editor onChange={setValue} />
    </div>
  );
}

export default App;
