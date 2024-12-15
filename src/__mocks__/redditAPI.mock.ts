import { Post } from "../components/services/api/redditAPI";

interface FetchResponse {
  data: {
    children: Post[]
  }
}

export const mockPostsArray: FetchResponse = {
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