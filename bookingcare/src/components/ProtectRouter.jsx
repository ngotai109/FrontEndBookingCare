import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function ProtectedRoute({ children, allowedRoles }) {
    const token = localStorage.getItem("accessToken");
    if (!token) return <Navigate to="/login" replace />;

    try {
        const decoded = jwtDecode(token);
        console.log("Decoded token:", decoded);

        // key dài của role
        const roleKey = "http://schemas.microsoft.com/ws/2008/06/identity/claims/role";
        const userRole = decoded[roleKey]; 
        console.log("User role:", userRole);

        const now = Date.now() / 1000;
        if (decoded.exp && decoded.exp < now) {
            localStorage.removeItem("accessToken");
            return <Navigate to="/login" replace />;
        }

        // kiểm tra role
        if (allowedRoles && !allowedRoles.includes(userRole)) {
            return <Navigate to="/register" replace />;
        }

        return children;
    } catch (err) {
        console.error("JWT decode error:", err);
        localStorage.removeItem("accessToken");
        return <Navigate to="/login" replace />;
    }
}
