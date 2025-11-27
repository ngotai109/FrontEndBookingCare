import "./Header.scss";
import Logo from "../../assets/icons/bookingcare-2020.svg";
import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function Header() {
    const navigate = useNavigate();

    function logout() {
        if (window.confirm("Bạn có chắc muốn đăng xuất không ? ")) {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            navigate("/login");
        }
    }

    const token = localStorage.getItem("accessToken");
    const decoded = token ? jwtDecode(token) : null;
    const roleKey = "http://schemas.microsoft.com/ws/2008/06/identity/claims/role";
    const userRole = decoded ? decoded[roleKey] : null;

    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <div className="header__logo">
                        <img src={Logo} alt="Logo" />
                    </div>

                    <div className="header__nav">
                        {userRole === "Patient" && (
                            <ul>
                                <li><Link to="booking">Đặt lịch khám </Link></li>
                                <li><Link to="update-infor">Cập nhật thông tin cá nhân</Link></li>
                            </ul>
                        )}
                        {
                            userRole === "Doctor" && (
                                <>
                                    <li><Link to="appointmentwork" >Lịch làm việc hôm nay</Link></li>
                                </>
                            )
                        }
                    </div>
                    <button className="logout-link" onClick={logout}>
                        Đăng xuất
                    </button>
                </div>
            </div>
        </header>
    );
}
