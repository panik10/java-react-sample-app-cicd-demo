import { useSession } from "@descope/react-sdk";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  const { isSessionLoading } = useSession();

  if (isSessionLoading) {
    return null;
  }

  return (
    <>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
            <li><Link to="/vanilla-dream">Vanilla Dream</Link></li>
            <li><Link to="/chocolate-indulgence">Chocolate Indulgence</Link></li>
            <li><Link to="/strawberry-bliss">Strawberry Bliss</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        {children}
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} Bravo Ice Cream. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Layout;