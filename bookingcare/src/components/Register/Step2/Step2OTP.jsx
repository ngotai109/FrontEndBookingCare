import "./Step2OTP.scss";
import { useState } from "react";
import { API_BASE_URL } from "../../../services/api";
export default function Step2({ nextStep }) {
    const [otp, setOTP] = useState("");
    const email = sessionStorage.getItem("email");
    console.log(email);
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`${API_BASE_URL}/api/Auth/verify-otp`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: email,
                    otp: otp
                })
            });

            if (res.ok) {
                const message = await res.text();
                alert("✅ " + message);
                nextStep();
            } else {
                const error = await res.text();
                alert("❌ " + error);
            }
        } catch (err) {
            alert("⚠️ Lỗi kết nối tới server");
            console.error(err);
        }
    };

    return (
        <div className="step2">
            <div className="step2__content">
                <h3>BƯỚC 2 : XÁC THỰC OTP</h3>
                <h5>Mã xác thực đã được gửi về mail: {email}</h5>
                <form className="step2__form" onSubmit={handleSubmit}>
                    <div className="step2__field">
                        <label htmlFor="otp">OTP</label>
                        <input
                            type="text"
                            id="otp"
                            value={otp}
                            onChange={(e) => setOTP(e.target.value)}
                            placeholder="Nhập mã OTP"
                            required
                        />
                    </div>
                    <div className="step2__btn-row">
                        <button type="submit" className="step2__btn--confirm">
                            Xác nhận OTP
                        </button>
                        <button
                            type="button"
                            className="step2__btn--again"
                            onClick={() => alert("Đang gửi lại mã OTP...")}
                        >
                            Gửi lại mã
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
