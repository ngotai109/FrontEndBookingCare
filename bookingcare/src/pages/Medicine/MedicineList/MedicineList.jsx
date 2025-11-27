import "./MedicineList.scss";
import { useEffect, useState } from "react";
import { API_BASE_URL } from "../../../services/api";
import "./MedicineList.scss";
export default function MedicineList() {
    const [medicines, setMedicines] = useState([]);
    const [form, setForm] = useState({ name: "", unit: "", function: "" });

    // Load danh sách thuốc
    const loadMedicines = async () => {
        try {
            const res = await fetch(`${API_BASE_URL}/api/Medicine/all`);
            const data = await res.json();
            setMedicines(data);
        } catch (err) {
            console.log("Lỗi tải dữ liệu");
        }
    };

    useEffect(() => {
        loadMedicines();
    }, []);

    // Xử lý nhập form
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Thêm thuốc
    const handleAdd = async () => {
        if (!form.name || !form.unit)
            return alert("Vui lòng nhập đầy đủ!");

        try {
            const res = await fetch(`${API_BASE_URL}/api/Medicine/add`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form) // gửi đúng dữ liệu form
            });

            if (res.ok) {
                alert("Thêm thuốc thành công!");
                setForm({ name: "", unit: "", function: "" });
                loadMedicines(); // load lại danh sách
                return;
            }

            alert("Thêm thuốc thất bại!");
        } catch (err) {
            alert("Lỗi kết nối!");
        }
    };

    return (
        <div className="medicine-page">

            <h2>Quản lý Thuốc</h2>

            {/* FORM */}
            <div className="form-card">
                <h3>Thêm thuốc mới</h3>

                <div className="form-row">
                    <input
                        type="text"
                        name="name"
                        placeholder="Tên thuốc"
                        value={form.name}
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="unit"
                        placeholder="Đơn vị"
                        value={form.unit}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-row">
                    <input
                        type="text"
                        name="function"
                        placeholder="Chức năng thuốc"
                        value={form.function}
                        onChange={handleChange}
                    />

                    <button onClick={handleAdd} className="add-btn">
                        + Thêm thuốc
                    </button>
                </div>
            </div>

            {/* TABLE */}
            <table className="medicine-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên thuốc</th>
                        <th>Đơn vị</th>
                        <th>Chức năng</th>
                        <th>Hành động</th>
                    </tr>
                </thead>

                <tbody>
                    {medicines.map((m) => (
                        <tr key={m.id}>
                            <td>{m.id}</td>
                            <td>{m.name}</td>
                            <td>{m.unit}</td>
                            <td>{m.function}</td>
                            <td>
                                <button className="edit-btn">Sửa</button>
                                <button className="delete-btn">Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}
