import Navigation from "@/components/NavBar/Navigation";
import { useAuth } from "@/context/AuthContext";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-white w-screen">
      {user && <Navigation logout={logout} />}
      <main className="container mx-auto p-6">{children}</main>
    </div>
  );
};
