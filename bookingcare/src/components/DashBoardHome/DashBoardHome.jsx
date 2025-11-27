import { Card } from "react-bootstrap";
import { FaUserMd, FaUserInjured, FaCalendarCheck } from "react-icons/fa";

export default function DashboardHome() {
    return (
        <div>
            <h2 className="mb-4 fw-bold">Tổng quan hệ thống</h2>

            <div className="row g-3">

                {/* Bác sĩ */}
                <div className="col-md-4">
                    <Card className="p-3 shadow-sm d-flex flex-row align-items-center gap-3">
                        <FaUserMd size={30} className="text-primary" />
                        {/* <div>
                            <h5>Bác sĩ</h5>
                            <h3>120</h3>
                        </div> */}
                    </Card>
                </div>

                {/* Bệnh nhân */}
                <div className="col-md-4">
                    <Card className="p-3 shadow-sm d-flex flex-row align-items-center gap-3">
                        <FaUserInjured size={30} className="text-success" />
                        <div>
                            <h5>Bệnh nhân</h5>
                            <h3>1500+</h3>
                        </div>
                    </Card>
                </div>

                {/* Lịch khám hôm nay */}
                <div className="col-md-4">
                    <Card className="p-3 shadow-sm d-flex flex-row align-items-center gap-3">
                        <FaCalendarCheck size={30} className="text-warning" />
                        <div>
                            <h5>Lịch khám hôm nay</h5>
                            <h3>87</h3>
                        </div>
                    </Card>
                </div>

            </div>
        </div>
    );
}
