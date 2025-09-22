import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { MainLayout } from "./MainLayout";
import { MicroFrontendRoute } from "./MicroFrontendRoute";
import { NotFoundPage } from "./NotFoundPage";

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
            <MicroFrontendRoute micro="dashboard" MicroComponent={Dashboard} />
          }
        />

        <Route
          path="/producao"
          element={
            <MicroFrontendRoute micro="producao" MicroComponent={Production} />
          }
        />

        <Route
          path="/vendas"
          element={<MicroFrontendRoute micro="vendas" MicroComponent={Sales} />}
        />

        <Route
          path="/metas"
          element={<MicroFrontendRoute micro="metas" MicroComponent={Goals} />}
        />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </MainLayout>
  );
};
