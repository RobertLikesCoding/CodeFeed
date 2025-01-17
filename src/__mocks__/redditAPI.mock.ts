import { Post, Subreddit, SubredditDetails, PostDetails } from "../components/services/api/redditAPI";

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
          subreddit: "test",
          public_description: "This is a test post description 1",
          link_flair_background_color: "#FFF"
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
          subreddit: "test2",
          public_description: "This is a test post description 2",
          link_flair_background_color: ""
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
          display_name: "r/frontend",
          icon_img: "https://www.example.com/icon1.png",
          primary_color: "#FF4500",
          description: "Frontend development subreddit",
        },
      },
      {
        data: {
          id: "2",
          display_name: "r/reactjs",
          icon_img: "https://www.example.com/icon2.png",
          primary_color: "#61DAFB",
          description: "React.js subreddit",
        },
      },
      {
        data: {
          id: "3",
          display_name: "r/javascript",
          icon_img: "https://www.example.com/icon3.png",
          primary_color: "#F7DF1E",
          description: "JavaScript subreddit",
        },
      },
      {
        data: {
          id: "4",
          display_name: "r/webdev",
          icon_img: "https://www.example.com/icon4.png",
          primary_color: "#00A1F1",
          description: "Web development subreddit",
        },
      },
      {
        data: {
          id: "5",
          display_name: "r/css",
          icon_img: "https://www.example.com/icon5.png",
          primary_color: "#264DE4",
          description: "CSS subreddit",
        },
      },
    ],
  },
};

export const mockComments = [
  {
    kind: "t1",
    data: {
      id: "1",
      author: "comment_author",
      body_html: "This is a test comment.",
      ups: 10,
      created: 1620000000,
      replies: {
        data: {
          children: [],
        },
      },
    },
  },
];

export const mockSubredditDetails: SubredditDetails = {
  display_name: "test_subreddit",
  title: "Test Subreddit",
  public_description_html: "This is a test subreddit for testing purposes.",
  active_user_count: 1234,
  subscribers: 5678,
  icon_img: "https://www.example.com/icon.png",
  primary_color: "#FF4500"
};

export const mockPostDetails: PostDetails = {
  data: {
    id: "123",
    title: "Test Post",
    selftext_html: "This is a test post.",
    ups: 100,
    created: 1620000000,
    author: "test_author",
  },
};
