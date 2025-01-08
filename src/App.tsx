import { Outlet, Link } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import ContentsList from "./components/Contents/ContentsList";

const App: React.FC = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <div className="sidenav">
          <h3>Topics</h3>
          <ul>
            <li className="">
              <Link to="/">Latest</Link>
            </li>
            <li className="">
              <Link to="/topics/frontend">Frontend</Link>
            </li>
            <li className="">
              <Link to="/topics/backend">Backend</Link>
            </li>
            <li className="">
              <Link to="/topics/fullstack">FullStack</Link>
            </li>
          </ul>
          <ContentsList title="Popular" topic="development" />
          <ContentsList title="Other" topic="game+development" />
        </div>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default App;
