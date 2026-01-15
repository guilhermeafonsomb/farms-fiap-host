import { Link, useLocation } from "react-router-dom";

import logo from "@/assets/logo.png";

function Navigation({ logout }: { logout: () => void }) {
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
                <Link
                  to={item.path}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 ${
                    isActive(item.path)
                      ? "bg-primary-500 text-white shadow-inner"
                      : "text-primary-500 hover:bg-primary-500 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <button
          className="px-4 py-2 h-12 text-sm font-medium text-red-400  mx-2  focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 rounded"
          aria-label="Logout from application"
          onClick={() => logout()}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
