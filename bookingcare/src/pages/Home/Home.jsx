import { Card } from "react-bootstrap";
import "./DashboardHome.scss";
import { FaUserMd, FaUserInjured, FaCalendarCheck, FaTimesCircle } from "react-icons/fa";

export default function DashboardHome() {
    return (
        <div className="dashboard-home">
            <h2 className="mb-4 fw-bold">Tổng quan hệ thống</h2>

            <div className="row g-3">

                {/* Bác sĩ */}
                <div className="col-md-3">
                    <Card className="stat-card doctor d-flex align-items-center gap-3">
                        <div className="stat-icon text-primary">
                            <FaUserMd size={32} />
                        </div>
                        <div>
                            <h5>Bác sĩ</h5>
                            <h3>120</h3>
                        </div>
                    </Card>
                </div>

                {/* Bệnh nhân */}
                <div className="col-md-3">
                    <Card className="stat-card patient d-flex align-items-center gap-3">
                        <div className="stat-icon text-success">
                            <FaUserInjured size={32} />
                        </div>
                        <div>
                            <h5>Bệnh nhân</h5>
                            <h3>1500+</h3>
                        </div>
                    </Card>
                </div>

                {/* Lịch khám hôm nay */}
                <div className="col-md-3">
                    <Card className="stat-card schedule d-flex align-items-center gap-3">
                        <div className="stat-icon text-warning">
                            <FaCalendarCheck size={32} />
                        </div>
                        <div>
                            <h5>Lịch khám hôm nay</h5>
                            <h3>87</h3>
                        </div>
                    </Card>
                </div>

                {/* Số lịch hủy */}
                <div className="col-md-3">
                    <Card className="stat-card cancel d-flex align-items-center gap-3">
                        <div className="stat-icon text-danger">
                            <FaTimesCircle size={32} />
                        </div>
                        <div>
                            <h5>Số lịch khám đã hủy</h5>
                            <h3>87</h3>
                        </div>
                    </Card>
                </div>

            </div>
        </div>
    );
}
