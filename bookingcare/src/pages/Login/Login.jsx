import { API_BASE_URL } from "../../services/api";
import "./Login.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
                    Password: password // nhớ đúng key như backend
                }),
            });

            const data = await res.json().catch(() => null);

            if (res.ok && data && data.token) {
                alert("Đăng nhập thành công!");
                localStorage.setItem("accessToken", data.token);
                localStorage.setItem("refreshToken", data.refreshToken);
                console.log({
                    accessToken: data.token,
                    refreshToken: data.refreshToken
                });

                navigate("/home");
            } else {
                // Có thể hiện thông báo chi tiết từ backend
                alert(data?.message || "Đăng nhập thất bại. Vui lòng kiểm tra lại tài khoản/mật khẩu!");
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
                        />
                    </div>
                    <div className="login__field">
                        <label htmlFor="password">Mật khẩu</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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
