import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./MainLayout";
import { MicroFrontendRoute } from "./MicroFrontendRoute";
import { NotFoundPage } from "./NotFoundPage";
import { lazy } from "react";
import { useAuth } from "@/context/AuthContext";
import { Login } from "@/pages/auth";
import { Loading } from "@/components/loading";

const Dashboard = lazy(() => import("dashboard/FarmsFiapDashboard"));
const Production = lazy(() => import("production/FarmsFiapProduction"));
const Sales = lazy(() => import("sales/FarmsFiapSales"));
const Goals = lazy(() => import("goals/FarmsFiapGoals"));

export const AppRoutes = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="container">
        <Loading />
      </div>
    );
  }
  return (
    <MainLayout>
      {true}
      <Routes>
        {user ? (
          <>
            <Route
              path="/"
              element={<MicroFrontendRoute MicroComponent={Dashboard} />}
            />

            <Route
              path="/producao"
              element={<MicroFrontendRoute MicroComponent={Production} />}
            />

            <Route
              path="/vendas"
              element={<MicroFrontendRoute MicroComponent={Sales} />}
            />

            <Route
              path="/metas"
              element={<MicroFrontendRoute MicroComponent={Goals} />}
            />

            <Route path="*" element={<NotFoundPage />} />
          </>
        ) : (
          <Route path="" element={<Login />} />
        )}
      </Routes>
    </MainLayout>
  );
};
