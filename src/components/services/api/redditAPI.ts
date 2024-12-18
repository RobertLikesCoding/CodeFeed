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
      const result = await response.json();
      return result.data.children;
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error("Failed to search for posts: ", error);
    return [];
  }
}

export interface Subreddit{
  data: {
    id: string;
    display_name: string;
    icon_img: string;
    primary_color: string;
    description: string;
  }
}

export async function fetchSubreddits(query: string): Promise<Subreddit[]> {
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
      const result = await response.json();
      return result.data.children;
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error("Couldn't fetch Subreddits: ", error);
    return [];
  }
}

export async function fetchSubredditPosts(query: string): Promise<Post[]> {
  try {
    if (query === null || query === "") {
      return [];
    }
    const response: Response = await fetch(
      `${baseUrl}r/${encodeURI(query)}.json`,
      {
        method: "GET",
      }
    );
    if (response.ok) {
      const result = await response.json();
      return result.data.children;
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error("Couldn't fetch Subreddit Posts: ", error);
    return [];
  }
}

interface SubredditAbout {
  data: {
    display_name: string;
    title: string;
    public_description: string;
    active_user_count: number;
    subscribers: number;
  }
}

export async function fetchSubredditInfo(query: string): Promise<SubredditAbout | null> {
  try {
    if (query === null || query === "") {
      return null;
    }
    const response: Response = await fetch(
      `${baseUrl}r/${encodeURI(query)}/about.json`,
      {
        method: "GET",
      }
    );
    if (response.ok) {
      const result = await response.json();
      return result.data;
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error("Couldn't fetch Subreddit Info: ", error);
    return null;
  }
}