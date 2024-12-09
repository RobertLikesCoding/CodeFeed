import { createBrowserRouter } from 'react-router-dom';

import App from './App'
import LatestPage from "./pages/LatestPage";
import FrontendPage from "./pages/FrontendPage";
import BackendPage from "./pages/BackendPage";
import FullstackPage from "./pages/FullstackPage";
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
        element: <LatestPage />,
      },
      {
        path: "frontend",
        element: <FrontendPage />,
      },
      {
        path: "backend",
        element: <BackendPage />,
      },
      {
        path: "fullstack",
        element: <FullstackPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
    ]
  },
]);

export default router;