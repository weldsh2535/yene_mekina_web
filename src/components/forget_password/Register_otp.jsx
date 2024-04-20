
import React, { useEffect, useRef, useState, useContext } from 'react'

import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { otpVerify } from '../../api/accountSlice';
import logo from '../../assets/images/sms3.png';
const correctOTP = "1234"

function RegisterOtp() {
    const { t } = useTranslation()
    const [OTP, setOTP] = useState("");
    // const { state = {} } = useLocation();
    // const { param1 } = state;
    const [otp, setOtp] = useState(new Array(4).fill(""));
    const [otpError, setOtpError] = useState(null);
    const otpBoxReference = useRef([]);


    function handleChange(value, index) {
        let newArr = [...otp];
        newArr[index] = value;
        console.log(newArr);
        setOtp(newArr);

        if (value && index < 6 - 1 && otpBoxReference.current[index + 1]) {
            otpBoxReference.current[index + 1].focus();
        }
    }
    function handleBackspaceAndEnter(e, index) {
        if (e.key === "Backspace" && !e.target.value && index > 0) {
            otpBoxReference.current[index - 1].focus()
        }
        if (e.key === "Enter" && e.target.value && index < 6 - 1) {
            otpBoxReference.current[index + 1].focus()
        }
    }

    useEffect(() => {
        if (otp.join("") !== "" && otp.join("") !== correctOTP) {
            setOtpError("❌ Wrong OTP Please Check Again")
        } else {
            setOtpError(null)
        }
    }, [otp]);


    const dispatch = useDispatch();
    const [loginStatus, setLoginStatus] = useState("idle");

    const navigate = useNavigate();

    const [errMsg, setErrMsg] = useState();
    const [success, setSuccess] = useState(false);




    const handleSubmit = async (e) => {
        e.preventDefault();
        const otpCode = otp.reduce((val, digit) => (val * 10) + parseInt(digit, 10), 0);
        console.log('Array to Integer: ' + otpCode);

        try {
            const response = await dispatch(otpVerify({ phone_number: "0925357022", otp: otpCode }));
            console.log(`weldsh ${response.payload}`);
            if (response == "ERR_BAD_REQUEST") {
                setLoginStatus("bad_err");
            }
            if (response == "ERR_NETWORK") {
                setLoginStatus("net_err");
            }
            if (response.payload == 201) {

                setLoginStatus("idle");
                navigate("/updatePassword");
            }
        } catch (err) {
            setLoginStatus("failed");
        }
    }

    return (
        <>


            <div className='m-4 grid  gap-4 '>

                <div className='min-h-[100px] justify-self-center'>
                    <img class="inline-block h-20 w-20  ring-2 ring-white" src={logo} alt="" />
                </div>
                <p class="text-gray-600 text-center mb-0">{t("sending_sms_code_info")}</p>
                <div className='min-h-[200px] border bg-white  px-5 pt-3 pb-2 rounded justify-self-center'>

                    <form onSubmit={handleSubmit}>
                        <div className='mb-4'>
                            <div className='flex items-center gap-4'>
                                {otp.map((digit, index) => (
                                    <input key={index} value={digit} maxLength={1}
                                        onChange={(e) => handleChange(e.target.value, index)}
                                        onKeyUp={(e) => handleBackspaceAndEnter(e, index)}
                                        ref={(reference) => (otpBoxReference.current[index] = reference)}
                                        className={`border w-20 h-auto text-black p-3 rounded-md block bg-white focus:border-2 focus:outline-none appearance-none`}
                                    />
                                ))}

                            </div>
                            <p className={`text-lg text-white mt-4 ${otpError ? 'error-show' : ''}`}>{otpError}</p>

                        </div>
                        <p>
                            {t("did_receive_code")}&nbsp;&nbsp;
                            <span className='line'>
                                <Link to={'/register'} href='#' className='text-orange text-decoration-none'>{t("resend")}</Link>
                            </span>
                        </p>
                        <div className='mb-2'>
                            <button type="submit" class="w-full bg-orange text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">{t("verify")}</button>
                        </div>
                    </form>


                </div>
            </div>

        </>
    )
}

export default RegisterOtp
