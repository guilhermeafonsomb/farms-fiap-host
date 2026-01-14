import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const routeTitles: Record<string, string> = {
  "/": "Dashboard",
  "/vendas": "Vendas",
  "/producao": "Produção",
  "/metas": "Metas",
};

export const RouteAnnouncer = () => {
  const location = useLocation();

  useEffect(() => {
    const title = routeTitles[location.pathname] || "Página";

    document.title = `${title} - FIAP Farms`;

    const announcement = document.getElementById("route-announcer");
    if (announcement) {
      announcement.textContent = `Navegou para ${title}`;
    }
  }, [location.pathname]);

  return (
    <div
      id="route-announcer"
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className="sr-only"
    />
  );
};
