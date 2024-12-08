import { fetchSearchQuery } from "./redditAPI";

const mockPostsArray = {
  kind: "t3",
  data: {
    children: [
      {
        id: "1",
        author: "test_author",
        created: 1620000000,
        num_comments: 10,
        url: "https://www.example.com",
        subreddit_name_prefixed: "r/test",
        title: "Test Post",
        ups: 100,
        public_description: "This is a test post description",
      },
    ],
  },
};

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
