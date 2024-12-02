import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li className="">
              <Link to="/">Latest</Link>
            </li>
            <li className="">
              <Link to="frontend">Frontender</Link>
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

export default Layout;