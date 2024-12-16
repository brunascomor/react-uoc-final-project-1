/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/page2">Page 2</Link>
        </li>
      </ul>
      {children}
    </div>
  );
};

export default Layout;