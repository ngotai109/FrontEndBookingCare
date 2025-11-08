
import "./Footer.scss";
export default function Footer() {
    return (
        <footer className="footer">
            <div className="container footer__content">
                <div className="footer__logo">
                    <h2>BookingCare</h2>
                    <p>Hệ thống đặt lịch khám bệnh uy tín hàng đầu Việt Nam</p>
                </div>
                <div className="footer__links">
                    <h4>Liên kết nhanh</h4>
                    <ul>
                        <li><a href="/">Trang chủ</a></li>
                        <li><a href="/about">Giới thiệu</a></li>
                        <li><a href="/contact">Liên hệ</a></li>
                        <li><a href="/support">Hỗ trợ</a></li>
                    </ul>
                </div>
                <div className="footer__contact">
                    <h4>Liên hệ</h4>
                    <p>📍 28 Thành Thái, Quận 10, TP. Hồ Chí Minh</p>
                    <p>📞 0123 456 789</p>
                    <p>✉️ support@bookingcare.vn</p>
                </div>
            </div>
            <div className="footer__bottom">
                <p>© 2025 BookingCare. All rights reserved.</p>
            </div>
        </footer>
    );
}
