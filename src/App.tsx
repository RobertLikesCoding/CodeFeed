import { useState } from "react";
import "./App.css";
import fetchBestReddits from "./utils/redditAPI";

function App() {
  const [data, setData] = useState();

  async function handleFetch() {
    const fetch = await fetchBestReddits();
    setData(fetch);
    console.log("Data: ", data);
  }

  return (
    <>
      <h1>Hello World!</h1>
      <button onClick={handleFetch}>Fetch</button>
    </>
  );
}

export default App;
