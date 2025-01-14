import { Outlet, useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import "./App.scss";
import Header from "./components/Header/Header";
import SideNav from "./components/SideNav/SideNav";
import PageInfo from "./components/PageInfo/PageInfo";

const App: React.FC = () => {
  const { topic } = useParams();
  const isMobile = useMediaQuery({ maxWidth: "768px" });

  if (isMobile) {
    return (
      <>
        <header>
          <Header />
        </header>
        <main>
          <PageInfo topic={topic ? topic : "web development"} />
          <Outlet />
        </main>
        <footer></footer>
      </>
    )
  }

  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <SideNav />
        <Outlet />
        <PageInfo topic={topic ? topic : "web development"} />
      </main>
      <footer></footer>
    </>
  );
};

export default App;
