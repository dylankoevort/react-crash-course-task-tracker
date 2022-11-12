import { useLocation } from "react-router-dom";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation(); // current location(url)
  return (
    <div>
      <header className="header">
        <h1>{title}</h1>
        {location.pathname === "/" && (
          <Button
            colour={showAdd ? "red" : "green"}
            text={showAdd ? "Close" : "Add"}
            onClick={onAdd}
          />
        )}
      </header>
    </div>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

export default Header;
