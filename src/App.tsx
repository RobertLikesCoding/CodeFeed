import { Link, Outlet } from "react-router-dom";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li className="">
              <Link to="/">Latest</Link>
            </li>
            <li className="">
              <Link to="frontend">Frontend</Link>
            </li>
            <li className="">
              <Link to="backend">Backend</Link>
            </li>
            <li className="">
              <Link to="fullstack">FullStack</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default App;
