import { useEffect, useState } from "react";
import Step1 from "../../components/Register/Step1/Step1Crendentials";
import Step2 from "../../components/Register/Step2/Step2OTP";
import Step3 from "../../components/Register/Step3/Step3Profile";
export default function Register() {
    const [step, setStep] = useState(1);

    useEffect(() => {
        console.log("Step hiện tại:", step);
    }, [step]);

    return (
        <>
            {step === 1 && <Step1 nextStep={() => setStep(2)} />}
            {step === 2 && <Step2 nextStep={() => setStep(3)} />}
            {step === 3 && <Step3 />}
        </>
    );
}
