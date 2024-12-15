import { fetchSearchQuery, querySubreddits } from "./redditAPI";
import { mockPosts, mockSubreddits } from "../../../__mocks__/redditAPI.mock";

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
      "The following error has occured: ",
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
  })

  test("should return a listing of subreddits", async () => {
    const subreddits = await querySubreddits("test");

    expect(subreddits).toEqual(mockSubreddits.data.children);
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
      "The following error has occured: ",
      "API failure"
    );
  });
});