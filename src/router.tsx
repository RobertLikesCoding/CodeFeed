import { createBrowserRouter } from 'react-router-dom';

import App from './App'
import Latest from "./pages/LatestPage";
import Frontend from "./pages/FrontendPage";
import Backend from "./pages/BackendPage";
import Fullstack from "./pages/FullstackPage";
import NotFoundPage from './pages/NotFoundPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <Latest />,
      },
      {
        path: "frontend",
        element: <Frontend />,
      },
      {
        path: "backend",
        element: <Backend />,
      },
      {
        path: "fullstack",
        element: <Fullstack />,
      },
    ]
  },
]);

export default router;