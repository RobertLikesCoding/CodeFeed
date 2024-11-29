import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Latest from "./pages/Latest";
import Frontend from "./pages/Frontend";
import Backend from "./pages/Backend";
import Fullstack from "./pages/Fullstack";
import "./App.css";


const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <header>
          <nav>
            <ul>
              <li className=""><Link to="/">Latest</Link></li>
              <li className=""><Link to="frontend">Frontend</Link></li>
              <li className=""><Link to="backend">Backend</Link></li>
              <li className=""><Link to="fullstack">FullStack</Link></li>
            </ul>
          </nav>
        </header>
          <Routes>
            <Route path="/" element={<App />} />
            <Route index element={<Latest />} />
            <Route path="frontend" element={<Frontend />} />
            <Route path="backend" element={<Backend />} />
            <Route path="fullstack" element={<Fullstack />} />
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
