import { Link, useLocation } from "react-router-dom";

import logo from "@/assets/logo.png";

function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: "/", label: "Dashboard" },
    { path: "/vendas", label: "Vendas" },
    { path: "/producao", label: "Produção" },
    { path: "/metas", label: "Metas" },
  ];

  return (
    <nav className="bg-white border-b-2 border-primary-100 ">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/">
            <img src={logo} alt="logo farm" />
          </Link>

          <div className="flex space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? "bg-primary-500 text-white shadow-inner"
                    : "text-primary-500 hover:bg-primary-500 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
