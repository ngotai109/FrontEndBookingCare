import { Routes, Route, Navigate } from "react-router-dom";
import UserLayout from "../layouts/UserLayout";
import AdminLayout from "../layouts/AdminLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ProtectedRoute from "../components/ProtectRouter";
import UpdateInfor from "../pages/Patient/UpdateInfor";
import AppointmentWork from "../pages/Doctor/AppointmentWorrk";
import DashboardHome from "../pages/Home/Home";
import Booking from "../pages/Patient/Booking";
import DoctorList from "../pages/Doctor/DoctorList";
import PatientList from "../pages/Patient/PatientList";
import MedicineList from "../pages/Medicine/MedicineList/MedicineList";
export default function AppRouters() {
    return (
        <Routes>

            {/* Redirect root "/" -> "/login" */}
            <Route path="/" element={<Navigate to="/login" replace />} />

            {/* ================= AUTH ================= */}
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* ================= PATIENT GROUP ================= */}
            <Route
                path="/patient"
                element={
                    <ProtectedRoute allowedRoles={["Patient"]}>
                        <UserLayout />
                    </ProtectedRoute>
                }
            >
                <Route index element={<Booking />} />           {/* /patient */}
                <Route path="booking" element={<Booking />} />  {/* /patient/booking */}
                <Route path="update-infor" element={<UpdateInfor />} />  {/* /patient/update-infor */}
            </Route>


            {/* ================= DOCTOR GROUP ================= */}
            <Route
                path="/doctor"
                element={
                    <ProtectedRoute allowedRoles={["Doctor"]}>
                        <UserLayout />
                    </ProtectedRoute>
                }
            >
                <Route index element={<AppointmentWork />} />          {/* /doctor */}
                <Route path="appointmentwork" element={<AppointmentWork />} />  {/* /doctor/appointmentwork */}
            </Route>


            {/* ================= ADMIN ================= */}
            <Route
                path="/admin/*"
                element={
                    <ProtectedRoute allowedRoles={["Admin"]}>
                        <AdminLayout />
                    </ProtectedRoute>
                }
            >
                <Route index element={<DashboardHome />} />
                <Route path="home" element={<DashboardHome />}></Route>
                <Route path="patient" element={<PatientList />}></Route>
                <Route path="doctor" element={<DoctorList />}></Route>
                <Route path="medicine" element={<MedicineList />}></Route>
                {/* <Route path="users" element={<ManageUser />} />
                    <Route path="doctors" element={<ManageDoctor />} /> */}
            </Route>

        </Routes>
    );
}
