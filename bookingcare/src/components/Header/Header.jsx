import "./Header.scss";
import Logo from "../../assets/icons/bookingcare-2020.svg";

export default function Header() {
    return (
        <header className="header">
            <div className="header__content">
                <div className="header__logo">
                    <img src={Logo} alt="Logo" />
                </div>
                <button className="logout-link">Đăng xuất</button>
            </div>
        </header>
    );
}
