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
          display_name_prefixed: "r/frontend",
          icon_img: "https://www.example.com/icon1.png",
          primary_color: "#FF4500",
          description: "Frontend development subreddit",
        },
      },
      {
        data: {
          id: "2",
          display_name_prefixed: "r/reactjs",
          icon_img: "https://www.example.com/icon2.png",
          primary_color: "#61DAFB",
          description: "React.js subreddit",
        },
      },
      {
        data: {
          id: "3",
          display_name_prefixed: "r/javascript",
          icon_img: "https://www.example.com/icon3.png",
          primary_color: "#F7DF1E",
          description: "JavaScript subreddit",
        },
      },
      {
        data: {
          id: "4",
          display_name_prefixed: "r/webdev",
          icon_img: "https://www.example.com/icon4.png",
          primary_color: "#00A1F1",
          description: "Web development subreddit",
        },
      },
      {
        data: {
          id: "5",
          display_name_prefixed: "r/css",
          icon_img: "https://www.example.com/icon5.png",
          primary_color: "#264DE4",
          description: "CSS subreddit",
        },
      },
    ],
  },
};
