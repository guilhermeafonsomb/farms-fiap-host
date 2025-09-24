import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./MainLayout";
import { MicroFrontendRoute } from "./MicroFrontendRoute";
import { NotFoundPage } from "./NotFoundPage";
import { lazy } from "react";

const Dashboard = lazy(() => import("dashboard/FarmsFiapDashboard"));
const Production = lazy(() => import("production/FarmsFiapProduction"));
const Sales = lazy(() => import("sales/FarmsFiapSales"));
const Goals = lazy(() => import("goals/FarmsFiapGoals"));

export const AppRoutes = () => {
  return (
    <MainLayout>
      <Routes>
        <Route
          path="/"
          element={
            <MicroFrontendRoute micro="Dashboard" MicroComponent={Dashboard} />
          }
        />

        <Route
          path="/producao"
          element={
            <MicroFrontendRoute micro="Produção" MicroComponent={Production} />
          }
        />

        <Route
          path="/vendas"
          element={<MicroFrontendRoute micro="Vendas" MicroComponent={Sales} />}
        />

        <Route
          path="/metas"
          element={<MicroFrontendRoute micro="Metas" MicroComponent={Goals} />}
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </MainLayout>
  );
};
