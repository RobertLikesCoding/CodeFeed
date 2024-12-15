import { Post, Subreddit } from "../components/services/api/redditAPI";

interface FetchResponse {
  data: {
    children: Post[] | Subreddit[];
  };
}

export const mockPosts: FetchResponse = {
  data: {
    children: [
      {
        data: {
          id: "1",
          title: "Test Post 1",
          num_comments: 10,
          ups: 100,
          author: "test_author_1",
          created: 1620000000,
          url: "https://www.example.com",
          subreddit_name_prefixed: "r/test",
          public_description: "This is a test post description 1",
        },
      },
      {
        data: {
          id: "2",
          title: "Test Post 2",
          num_comments: 20,
          ups: 200,
          author: "test_author_2",
          created: 1620000001,
          url: "https://www.example2.com",
          subreddit_name_prefixed: "r/test2",
          public_description: "This is a test post description 2",
        },
      },
    ],
  },
};

export const mockSubreddits: FetchResponse = {
  data: {
    children: [
      {
        data: {
          id: "1",
          display_name_prefixed: "test name",
          icon_img: "/url/to/image.png",
          primary_color: "#FFFFFF",
        },
      },
    ],
  },
};
