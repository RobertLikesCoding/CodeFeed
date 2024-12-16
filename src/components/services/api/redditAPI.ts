const baseUrl = "https://www.reddit.com/";

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
  try {
    if (query === null || query === "") {
      return [];
    }
    const response: Response = await fetch(
      `${baseUrl}search.json?q=${encodeURI(query)}&limit=10&sort=relevance`,
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

export interface Subreddit{
  data: {
    id: string;
    display_name_prefixed: string;
    icon_img: string;
    primary_color: string;
    description: string;
  }
}

export async function querySubreddits(query: string): Promise<Subreddit[]> {
  try {
    if (query === null || query === "") {
      return [];
    }
    const response: Response = await fetch(
      `${baseUrl}subreddits/search.json?q=${encodeURI(query)}&limit=5&sort=activity`,
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
    return [];
  }
}
