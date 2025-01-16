const baseUrl = "https://www.reddit.com/";

export interface Post {
  data: {
    id: string;
    author: string;
    created: number;
    num_comments: number;
    subreddit_name_prefixed: string;
    subreddit: string;
    title: string;
    ups: number;
    public_description: string;
    thumbnail?: string;
    url?: string;
    link_flair_background_color: string;
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

export interface Subreddit {
  data: {
    id: string;
    display_name: string;
    icon_img: string;
    primary_color: string;
    description: string;
  };
}

export async function fetchSubreddits(query: string): Promise<Subreddit[] | null> {
  try {
    if (query === null || query === "") {
      return [];
    }
    const response: Response = await fetch(
      `${baseUrl}subreddits/search.json?q=${encodeURI(
        query
      )}&limit=5&sort=activity`,
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
    return null;
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

export interface SubredditDetails {
  display_name: string;
  title: string;
  public_description_html: string;
  active_user_count: number;
  subscribers: number;
  icon_img: string;
}

export async function fetchSubredditDetails(
  query: string
): Promise<SubredditDetails | null> {
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
      return result.data as SubredditDetails;
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error("Couldn't fetch Subreddit Info: ", error);
    return null;
  }
}

export interface Comment {
  data: {
    id: string;
    author: string;
    body_html: string;
    ups: number;
    created: number;
    replies: { data: { children: Comment[] } };
  };
}

export interface PostDetails {
  data: {
    id: string;
    title: string;
    ups: number;
    created: number;
    author: string;
    selftext_html?: string;
    url?: string;
  };
}

export async function fetchPostDetails(
  subreddit: string,
  postId: string
): Promise<[PostDetails, Comment[]] | null> {
  try {
    if (subreddit === null || subreddit === "") {
      throw new Error("Invalid subreddit or post ID");
    }
    const response: Response = await fetch(
      `${baseUrl}r/${subreddit}/comments/${encodeURI(postId)}.json`,
      {
        method: "GET",
      }
    );
    if (response.ok) {
      const result = await response.json();
      const postDetails = result[0].data.children[0];
      const comments = result[1].data.children;
      return [postDetails, comments];
    } else {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}
