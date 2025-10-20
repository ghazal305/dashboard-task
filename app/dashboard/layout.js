import DashboardShell from "../../components/ui/dashboardShell";

export const metadata = {
  title: "Dashboard",
};

export default function DashboardLayout({ children }) {
  return <DashboardShell>{children}</DashboardShell>;
}
