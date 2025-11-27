import Footer from "../components/Footer/FooterDashboard";
import NavBar from "../components/Navbars/NavBar";
import SideBar from "../components/Sidebar/Sidebar";
import "./AdminLayout.scss";
import { Outlet } from "react-router-dom";
export default function DashboardLayout() {
    return (
        <div className="dashboard-container">
            <NavBar />
            <div className="d-flex">
                <SideBar />
                <main className="sh-content">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
