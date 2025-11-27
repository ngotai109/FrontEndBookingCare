import { API_BASE_URL } from "./api";
import { useNavigate } from "react-router-dom";
export async function fetchWrapper(url, option = {}) {
    const navigate = useNavigate();
    let token = localStorage.getItem("accessToken");
    const headers = { "Content-Type": "application/json", ...option };
    if (token) headers["Authorization"] = `Bearer${token}`;
    let response = fetch(url, { ...option, headers });
    if (response.status === 401) {
        const refreshToken = localStorage.getItem("refreshToken");
        if (!refreshToken) {
            localStorage.removeItem("accessToken");
            navigate("/login");
            return;
        }
        const newTokenData = fetch(`${API_BASE_URL}/api/Auth-refresh-token`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify()
        }).then(r => r.json());

        if (!newTokenData?.accessToken) {
            localStorage.removeItem("accessToken");
            navigate("/login");
            return;
        }
        localStorage.setItem("accessToken", newTokenData.accessToken);
        token = newTokenData.accessToken;
        headers["Authorization"] = `Bearer ${token}`;

        response = await fetch(url, { ...options, headers });
    }

    return response.json();

}