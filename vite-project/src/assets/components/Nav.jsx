import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">Speisekarte</Link>
      <Link to="/contact">Kontact</Link>
      <Link to="/offentime">Öffnungszeiten</Link>
      <Link to="/gallery">Galerie</Link>
    </nav>
  );
};
export default Nav;
