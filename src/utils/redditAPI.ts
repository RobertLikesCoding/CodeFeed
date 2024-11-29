export interface Listing {
  data: {
    id: string;
    display_name: string;
    public_description: string;
  };
}

export default async function fetchSearchQuery(
  query: string
): Promise<Listing[]> {
  const baseUrl = "https://www.reddit.com/subreddits/search.json";
  try {
    const response: Response = await fetch(
      `${baseUrl}?q=${encodeURI(query)}&limit=25&sort=relevance`,
      {
        method: "GET",
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data.data.children;
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error("The following error has occured: ", error);
    return []; // Promise Type throws an error if I remove this
  }
}
