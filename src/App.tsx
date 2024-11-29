import { useState, useEffect } from "react";
import "./App.css";
import fetchSearchQuery from "./utils/redditAPI";
import { Listing } from "./utils/redditAPI";


function App() {
  const [searchResponse, setSearchResponse] = useState<Listing[] | null>(null);
  const [query, setQuery] = useState<string>("");

  async function handleFetch(event: React.FormEvent) {
    event?.preventDefault();
    const fetch = await fetchSearchQuery(query);
    setSearchResponse(fetch);
  }

  useEffect(() => {
    if (searchResponse) {
      console.log("Data: ", searchResponse);
    }
  }, [searchResponse])

  return (
    <>
      <h1>Hello World!</h1>
      <input
        type="text"
        name="query"
        id="query"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" onClick={handleFetch}>
        Fetch
      </button>
      <section>
        {searchResponse && searchResponse.map((child) => (
          <div key={child.data.id}>
            <div>{child.data.display_name}</div>
            <div>{child.data.public_description}</div>
          </div>
        ))}
      </section>
    </>
  );
}

export default App;
