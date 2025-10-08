import { Link, NavLink } from "react-router-dom";

//dati menù
const links = [
  { path: "/", label: "Home" },
  { path: "/who-we-are", label: "Who we are" },
  { path: "/products", label: "Products" },
];

const MainNavBar = () => {
  return (
    <header>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.path}>
              <NavLink to={link.path} className="nav-element">
                {link.label}
              </NavLink>
            </li>
          ))}
          {/* <li>
          <Link to="/">Home Page</Link>
          <NavLink to="/chi-siamo">Chi Siamo</NavLink>
          <NavLink to="/prodotti">Prodotti</NavLink>
        </li> */}

          <button className="budget-mode-btn">Budget mode</button>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavBar;
