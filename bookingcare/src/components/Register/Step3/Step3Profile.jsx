import "./Step3Profile.scss";
import { useState } from "react";
import { API_BASE_URL } from "../../../services/api";
import { useNavigate } from "react-router-dom";
export default function Step3() {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState("");
    const [gender, setGender] = useState("Nam");
    const [birthday, setBirthday] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const api = `${API_BASE_URL}/api/Auth/complete-resgiter`;
            console.log(api);
            const res = await fetch(`${API_BASE_URL}/api/Auth/complete-resgiter`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(
                    {
                        Email: sessionStorage.getItem("email"),
                        FullName: fullName,
                        BirthOfDate: birthday,
                        Gender: gender,
                        Address: address,
                        PhoneNumber: phone
                    }
                )
            });
            if (res.ok) {
                const mess = await res.text();
                alert(`✅${mess}`);
                navigate("/login");
            }
            else {
                const err = await res.text();
                alert("❌" + err);
            }
        } catch (err) {
            alert("Lỗi kết nối với Server");
        }

    };

    return (
        <div className="step3">
            <div className="step3__content">
                <h3>BƯỚC 3 : HOÀN TẤT ĐĂNG KÍ</h3>
                <form className="step3__form" onSubmit={handleSubmit}>
                    <div className="step3__field">
                        <label htmlFor="fullName">Họ tên</label>
                        <input
                            type="text"
                            id="fullName"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="Nhập họ tên..."
                        />
                    </div>
                    <div className="step3__field">
                        <label htmlFor="gender">Giới tính</label>
                        <select
                            id="gender"
                            value={gender}
                            onChange={(e) => setGender(e.target.value)}
                        >
                            <option value="Nam">Nam</option>
                            <option value="Nữ">Nữ</option>
                        </select>
                    </div>
                    <div className="step3__field">
                        <label htmlFor="birthday">Ngày sinh</label>
                        <input
                            type="date"
                            id="birthday"
                            value={birthday}
                            onChange={(e) => setBirthday(e.target.value)}
                        />
                    </div>
                    <div className="step3__field">
                        <label htmlFor="address">Địa chỉ</label>
                        <input
                            type="text"
                            id="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="Nhập địa chỉ..."
                        />
                    </div>
                    <div className="step3__field">
                        <label htmlFor="phone">Số điện thoại</label>
                        <input
                            type="tel"
                            id="phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Nhập số điện thoại..."
                        />
                    </div>

                    <button type="submit" className="step3__btn">
                        Hoàn Tất
                    </button>
                </form>
            </div>
        </div>

    );
}
