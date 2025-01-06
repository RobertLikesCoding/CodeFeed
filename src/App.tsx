import { Outlet } from "react-router-dom";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import ContentsList from "./components/Contents/ContentsList";

const App: React.FC = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <div className="sidemenu">
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
