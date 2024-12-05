export interface Post {
  data: {
    id: string;
    author: string;
    created: number;
    num_comments: number;
    url: string;
    subreddit_name_prefixed: string;
    title: string;
    ups: number;
    public_description: string;
  };
}

export async function fetchSearchQuery(query: string): Promise<Post[]> {
  const baseUrl = "https://www.reddit.com/search.json";

  try {
    const response: Response = await fetch(
      `${baseUrl}?q=${encodeURI(query)}&limit=10&sort=relevance`,
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

// export async function fetchSubReddit(query: string): Promise<Post[]> {
//   const baseUrl = "https://www.reddit.com/r/";

//   try {
//     const response: Response = await fetch(
//       `${baseUrl}?q=${encodeURI(query)}/new.json`,
//       {
//         method: "GET",
//       }
//     );
//     if (response.ok) {
//       const data = await response.json();
//       return data.data.children;
//     } else {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//   } catch (error) {
//     console.error("The following error has occured: ", error);
//     return []; // Promise Type throws an error if I remove this
//   }
// }

