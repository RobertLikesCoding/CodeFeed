import { fetchSearchQuery } from "./redditAPI";
import { mockPostsArray } from "../../../__mocks__/redditAPI.mock";

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    status: 200,
    json: () => Promise.resolve(mockPostsArray),
  })
) as jest.Mock;

describe("Fetch from Reddit", () => {
  test("should return a list of posts", async () => {
    const posts = await fetchSearchQuery("test");

    expect(posts).toEqual(mockPostsArray.data.children);
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
