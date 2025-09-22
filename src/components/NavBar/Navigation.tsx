import { Link, useLocation } from "react-router-dom";

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
    <nav className="bg-blue-600 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="text-white text-xl font-semibold">
            Farms FIAP - Host
          </span>

          <div className="flex space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path)
                    ? "bg-blue-800 text-white shadow-inner"
                    : "text-blue-200 hover:bg-blue-700 hover:text-white"
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
