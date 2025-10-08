import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { BudgetContext } from "../contexts/BudgetContext";

//dati menù
const links = [
  { path: "/", label: "Home" },
  { path: "/who-we-are", label: "Who we are" },
  { path: "/products", label: "Products" },
];

const MainNavBar = () => {
  const { budgetMode, setBudgetMode } = useContext(BudgetContext);

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
          {/* bottone*/}
          <button
            className="budget-mode-btn"
            onClick={() => setBudgetMode(!budgetMode)}
          >
            {budgetMode ? "budget mode on" : "budget mode off"}
          </button>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavBar;
