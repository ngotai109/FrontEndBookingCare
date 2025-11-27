import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL, ROLEKEY_URL } from "../../services/api";
import { jwtDecode } from "jwt-decode";
import "./Login.scss";

export default function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`${API_BASE_URL}/api/Auth/Login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    Email: username,
                    Password: password
                }),
            });

            const data = await res.json().catch(() => null);

            const token = data.token?.token || data.token; // lấy token từ API
            const refreshToken = data.refreshToken;

            if (res.ok && token) {
                // Lưu token vào localStorage
                localStorage.setItem("accessToken", token);
                localStorage.setItem("refreshToken", refreshToken);

                // Decode token sau khi nhận
                const decoded = jwtDecode(token);
                const userRole = decoded[ROLEKEY_URL];

                // Navigate theo role
                if (userRole === "Patient") {
                    navigate("/patient");
                } else if (userRole === "Doctor") {
                    navigate("/doctor");
                } else if (userRole === "Admin") {
                    navigate("/admin");
                } else {
                    alert("Role không hợp lệ!");
                }

                alert("Đăng nhập thành công!");
            } else {
                alert(data?.message || "Đăng nhập thất bại! Vui lòng kiểm tra tài khoản/mật khẩu.");
            }

        } catch (err) {
            console.error("Lỗi:", err);
            alert("Không thể kết nối với máy chủ. Vui lòng thử lại sau!");
        }
    };

    return (
        <div className="login">
            <div className="login__content">
                <h3>Đăng nhập</h3>
                <form onSubmit={handleLogin} className="login__form">
                    <div className="login__field">
                        <label htmlFor="username">Tên đăng nhập</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="login__field">
                        <label htmlFor="password">Mật khẩu</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-submit">
                        Đăng nhập
                    </button>
                </form>
                <div className="login__signup">
                    Bạn chưa có tài khoản? <a href="/register">Đăng kí</a>
                </div>
            </div>
        </div>
    );
}
