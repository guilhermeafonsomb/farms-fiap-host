import Navigation from "@/components/NavBar/Navigation";
import { useAuth } from "@/context/AuthContext";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-white w-screen">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-500 focus:text-white focus:rounded focus:outline-none focus:ring-2 focus:ring-primary-600"
      >
        Pular para o conteúdo principal
      </a>

      {user && <Navigation logout={logout} />}
      <main id="main-content" className="container mx-auto p-6">
        {children}
      </main>
    </div>
  );
};
