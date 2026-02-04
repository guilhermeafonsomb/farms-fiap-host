import { Link, useLocation } from "react-router-dom";

import logo from "@/assets/logo.png";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

function Navigation({ logout }: { logout: () => void }) {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: "/", label: "Dashboard" },
    { path: "/vendas", label: "Vendas" },
    { path: "/metas", label: "Metas" },
  ];

  return (
    <nav
      className="bg-white border-b-2 border-primary-100 flex justify-center"
      aria-label="Main navigation"
    >
      <div className="px-4 flex w-full items-center justify-between">
        <div className="flex items-center justify-between h-16 w-full">
          <Link to="/">
            <img src={logo} alt="FIAP Farms - Home" />
          </Link>

          <ul className="flex space-x-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <Button
                  onClick={() => navigate(item.path)}
                  variant={isActive(item.path) ? "default" : "white"}
                  size="sm"
                >
                  {item.label}
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <Button
          size="sm"
          variant="secondary"
          aria-label="Logout from application"
          onClick={() => logout()}
        >
          Logout
        </Button>
      </div>
    </nav>
  );
}

export default Navigation;
