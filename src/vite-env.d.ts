/// <reference types="vite/client" />
/// <reference types="@testing-library/jest-dom" />

/// <reference types="@originjs/vite-plugin-federation" />

declare module "dashboard/FarmsFiapDashboard" {
  const Dashboard: React.ComponentType;
  export default Dashboard;
}

declare module "sales/FarmsFiapSales" {
  const Sales: React.ComponentType;
  export default Sales;
}

declare module "goals/FarmsFiapGoals" {
  const Goals: React.ComponentType;
  export default Goals;
}
