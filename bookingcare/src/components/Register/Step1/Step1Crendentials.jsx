import "./Step1Crendentias.scss";
import { useState } from "react";
import { API_BASE_URL } from "../../../services/api";
export default function Step1({ nextStep }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Mật khẩu không khớp!");
            return;
        }

        try {
            const res = await fetch(`${API_BASE_URL}/api/Auth/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: email,
                    password: password
                })
            });

            if (res.ok) {
                const msg = await res.text(); // hoặc .json() tùy backend
                alert("✅ " + msg);
                sessionStorage.setItem("email", email);
                nextStep();
            } else {
                const errorMsg = await res.text();
                alert("❌ Lỗi: " + errorMsg);
            }
        } catch (err) {
            alert("⚠️ Lỗi kết nối với Server");
            console.error(err);
        }
    };

    return (
        <div className="step1">
            <div className="step1__content">
                <h3>BƯỚC 1: TÀI KHOẢN</h3>
                <form className="step1__form" onSubmit={handleSubmit}>
                    <div className="step1__field">
                        <label htmlFor="email">Email</label>
                        <input
                            type="text"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Nhập email..."
                            required
                        />
                    </div>

                    <div className="step1__field">
                        <label htmlFor="password">Mật khẩu</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Nhập mật khẩu..."
                            required
                        />
                    </div>

                    <div className="step1__field">
                        <label htmlFor="confirmPassword">Nhập lại mật khẩu</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Nhập lại mật khẩu..."
                            required
                        />
                    </div>

                    <button type="submit" className="step1__btn">
                        Tiếp tục
                    </button>
                </form>
            </div>
        </div>
    );
}
