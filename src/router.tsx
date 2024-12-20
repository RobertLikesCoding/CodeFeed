import { createBrowserRouter } from 'react-router-dom';

import App from './App'
import MainPage from "./pages/MainPage";
import SubredditPage from './pages/SubredditPage';
import PostDetailsPage from "./pages/PostDetailsPage";
import SearchPage from './pages/SearchPage';
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: "/topics/:topic",
        element: <MainPage />,
      },
      {
        path: "/subreddits/:subreddit",
        element: <SubredditPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      {
        path: "/subreddits/:subreddit/:postId",
        element: <PostDetailsPage />,
      },
    ]
  },
]);

export default router;