import Navigation from "../components/NavBar/Navigation";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <main className="container mx-auto p-6">{children}</main>
    </div>
  );
};
