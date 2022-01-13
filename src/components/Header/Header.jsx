import { Link } from "react-router-dom";
import "./Header.scss";

export const Header = () => {
  return (
    <header>
      <Link className="blogHeader" to="/">
        Blog
      </Link>
    </header>
  );
};
