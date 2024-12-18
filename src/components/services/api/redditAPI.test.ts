import {
  fetchSearchQuery,
  fetchSubreddits,
  fetchSubredditPosts,
  fetchSubredditInfo,
} from "./redditAPI";
import { mockPosts, mockSubreddits, mockSubredditAbout } from "../../../__mocks__/redditAPI.mock";

describe("Fetch Posts", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(mockPosts),
      })
    ) as jest.Mock;
  });

  test("should return a listing of posts", async () => {
    const posts = await fetchSearchQuery("test");

    expect(posts).toEqual(mockPosts.data.children);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  test("handles exceptions with console.error", async () => {
    (fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.reject("API failure")
    );
    const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation();
    const posts = await fetchSearchQuery("test");

    expect(posts).toEqual([]);
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "Failed to search for posts: ",
      "API failure"
    );
  });
});

describe("Fetch Subreddits", () => {
  beforeEach(() => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        status: 200,
        json: () => Promise.resolve(mockSubreddits),
      })
    ) as jest.Mock;
  });

  test("should return a listing of subreddits", async () => {
    const subreddits = await fetchSubreddits("test");

    expect(subreddits).toEqual(mockSubreddits.data.children);
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  test("handles exceptions with console.error", async () => {
    (fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.reject("API failure")
    );
    const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation();
    const posts = await fetchSubreddits("test");

    expect(posts).toEqual([]);
    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "Couldn't fetch Subreddits: ",
      "API failure"
    );
  });

  describe("Fetch Subreddit Posts", () => {
    beforeEach(() => {
      global.fetch = jest.fn(() =>
        Promise.resolve({
          ok: true,
          status: 200,
          json: () => Promise.resolve(mockPosts),
        })
      ) as jest.Mock;
    });

    test("should return a listing of posts for a subreddit", async () => {
      const posts = await fetchSubredditPosts("test");

      expect(posts).toEqual(mockPosts.data.children);
      expect(fetch).toHaveBeenCalledTimes(1);
    });

    test("handles exceptions with console.error", async () => {
      (fetch as jest.Mock).mockImplementationOnce(() =>
        Promise.reject("API failure")
      );
      const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation();
      const posts = await fetchSubredditPosts("test");

      expect(posts).toEqual([]);
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        "Couldn't fetch Subreddit Posts: ",
        "API failure"
      );
    });
  });

  describe("Fetch Subreddit Info", () => {
    beforeEach(() => {
      global.fetch = jest.fn();
    });

    test("should return an info object for a subreddit", async () => {
      (fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          data: mockSubredditAbout,
        }),
      });
      const subreddit = await fetchSubredditInfo("test");

      expect(subreddit).toEqual(mockSubredditAbout);
      expect(fetch).toHaveBeenCalledTimes(1);
      expect(fetch).toHaveBeenCalledWith(
        'https://www.reddit.com/r/test/about.json',
        { method: 'GET' }
      );
    });

    test("handles exceptions with console.error", async () => {
      (fetch as jest.Mock).mockImplementationOnce(() =>
        Promise.reject("API failure")
      );
      const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation();
      const subreddit = await fetchSubredditInfo("test");

      expect(subreddit).toEqual(null);
      expect(consoleErrorSpy).toHaveBeenCalledWith(
        "Couldn't fetch Subreddit Info: ",
        "API failure"
      );
    });
  });
});
