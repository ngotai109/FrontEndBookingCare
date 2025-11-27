
import "./Sidebar.scss";
import { FaHome, FaUserMd, FaUsers, FaChartPie } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function SideBar() {


  return (
    <div className="sh-sidebar">
      <ul className="sh-menu">

        <li className="sh-item">
          <FaHome className="sh-icon" />
          <span><Link to="/admin/home">Trang chủ</Link></span>
        </li>

        <li className="sh-item">
          <FaUserMd className="sh-icon" />
          <span><Link to="/admin/doctor">Bác Sĩ</Link></span>
        </li>

        <li className="sh-item">
          <FaUsers className="sh-icon" />
          <span><Link to="/admin/patient">Bệnh Nhân</Link></span>
        </li>

        <li className="sh-item">
          <FaChartPie className="sh-icon" />
          <span><Link to="/admin/medicine">Thuốc</Link></span>
        </li>

      </ul>
    </div>
  );
}
