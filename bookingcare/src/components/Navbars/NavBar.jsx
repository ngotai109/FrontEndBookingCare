import "./NavBar.scss";
import { FaBell, FaUserCircle, FaSearch } from "react-icons/fa";
import logo from "../../assets/icons/logo-smarthealth.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark smarthealth-navbar">
            <div className="container-fluid">

                {/* Logo */}
                <div className="d-flex align-items-center">
                    <img
                        src={logo}
                        alt="logo"
                        className="sh-logo"
                    />
                </div>
                {/* Toggle (Mobile) */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Content */}
                <div className="collapse navbar-collapse" id="navbarContent">

                    {/* Search box */}
                    <div className="search-box ms-auto">
                        <FaSearch className="search-icon" />
                        <input
                            type="text"
                            placeholder="Tìm kiếm..."
                            className="search-input"
                        />
                    </div>

                    {/* Right icons */}
                    <ul className="navbar-nav ms-3 align-items-center">

                        {/* Notification */}
                        <li className="nav-item me-3 position-relative">
                            <FaBell className="nav-icon" />
                            <span className="badge rounded-pill bg-danger noti-badge">3</span>
                        </li>

                        {/* User */}
                        <li className="nav-item">
                            <FaUserCircle className="nav-icon user-icon" />
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
}
