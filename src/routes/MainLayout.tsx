import Navigation from "../components/NavBar/Navigation";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-white w-screen">
      <Navigation />
      <main className="container mx-auto p-6">{children}</main>
    </div>
  );
};
