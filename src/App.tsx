import { Outlet } from "react-router-dom";

import "./App.scss";
import Header from "./components/Header/Header";
import SideNav from "./components/SideNav/SideNav";

const App: React.FC = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>

        <SideNav />
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default App;
