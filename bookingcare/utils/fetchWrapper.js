// src/utils/fetchWrapper.js
import { API_BASE_URL } from "../services/api";
import { useNavigate } from "react-router-dom";
export async function fetchWrapper(url, options = {}) {
    // Lấy token từ localStorage
    const token = localStorage.getItem("accessToken");
    const navigate = useNavigate();
    // Tạo headers
    const headers = {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
        ...options.headers,
    };

    // Gọi API lần đầu
    let response = await fetch(`${API_BASE_URL}${url}`, {
        ...options,
        headers,
    });

    // Nếu access token hết hạn → gọi refresh-token
    if (response.status === 401) {
        const refreshToken = localStorage.getItem("refreshToken");
        if (refreshToken) {
            const refreshRes = await fetch(`${API_BASE_URL}/api/Auth/refresh-token`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ refreshToken }),
            });

            if (refreshRes.ok) {
                const data = await refreshRes.json();

                // Lưu accessToken mới
                localStorage.setItem("accessToken", data.token);

                // Gọi lại request ban đầu với token mới
                const newHeaders = {
                    ...headers,
                    Authorization: `Bearer ${data.token}`,
                };

                response = await fetch(`${API_BASE_URL}${url}`, {
                    ...options,
                    headers: newHeaders,
                });
            } else {
                localStorage.clear();
                navigate("/login");
            }
        }
    }
    return response;
}
