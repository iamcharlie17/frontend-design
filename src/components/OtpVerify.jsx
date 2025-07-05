import { useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import circle_bg from '../assets/images/circle-bg.png';
import { FaChevronLeft } from 'react-icons/fa';

const OtpVerify = () => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const [timeLeft, setTimeLeft] = useState(118);
    const timerRef = useRef(null);
    const [newOtp, setNewOtp] = useState(null)

    const { type, phone, email, otp: otpParam } = useParams();
    const serverOtp = otpParam?.split('') || [];

    useEffect(() => {
        timerRef.current = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(timerRef.current);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timerRef.current);
    }, []);

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    const handleOtpChange = (index, value) => {
        if (/^\d*$/.test(value) && value.length <= 1) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
            if (value && index < 3) {
                document.getElementById(`otp-input-${index + 1}`).focus();
            }
        }
    };

    const handleKeyDown = (index, e) => {
        if (e.key === 'Backspace') {
            if (otp[index] === '' && index > 0) {
                document.getElementById(`otp-input-${index - 1}`).focus();
            }
        }
    };

    const handleVerify = () => {
        const code = otp.join('');
        console.log('Verifying code:', code);
    };

    const getInputBorderClass = (index) => {
        if (otp[index] === '') return 'border-[#045EC9]';
        if (!serverOtp[index]) return 'border-gray-400';
        return otp[index] == serverOtp[index] ? 'border-green-500' : 'border-red-500';
    };

    const handleResend = () => {
        setOtp(['', '', '', '']);
        setNewOtp(Math.floor(1000, Math.random() * 1000));
        setTimeLeft(118);
        clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(timerRef.current);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    };

    return (
        <div
            className="min-h-screen relative flex justify-center items-center bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${circle_bg})` }}
        >
            <Link to={'/create-account'} className='top-22 left-8 absolute md:hidden text-[#045EC9] text-xl'><FaChevronLeft /></Link>
            <div className="p-8 space-y-8 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-16 text-[#045EC9]">Enter verification code ({newOtp ? newOtp : otpParam})</h1>

                <div className="text-center space-y-6">
                    <p className='text-[#045EC9]'>We sent the code to</p>
                    <div className='flex items-center gap-8 justify-center'>
                        <span className="font-semibold ml-1">{type === 'Phone number' ? phone : email}</span>
                        <Link to="/create-account" className="text-blue-500 ml-2">Edit</Link>
                    </div>
                </div>

                <div className="flex justify-center space-x-2 mb-6">
                    {[0, 1, 2, 3].map((index) => (
                        <input
                            key={index}
                            id={`otp-input-${index}`}
                            type="text"
                            maxLength={1}
                            value={otp[index]}
                            onChange={(e) => handleOtpChange(index, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            className={`w-12 h-12 border-2 ${getInputBorderClass(index)} rounded-md text-white text-center text-xl focus:outline-none focus:bg-[#045EC9] ${otp[index] && "bg-[#045EC9] text-white"}`}
                        />
                    ))}
                </div>

                <p className="text-center text-gray-600 mb-6">
                    Code expires in <span className="font-semibold text-[#045EC9]">{formatTime(timeLeft)}</span>
                </p>

                <div className="flex justify-between md:gap-12 gap-8">
                    <button
                        onClick={handleResend}
                        className="px-6 w-full border-2 border-[#045EC9] py-2 text-[#045EC9] hover:text-white hover:bg-[#045EC9] transition duration-200 font-medium rounded-sm"
                    >
                        Send again
                    </button>
                    <button
                        onClick={handleVerify}
                        className="px-6 w-full py-2 bg-[#045EC9] text-white font-medium rounded-sm"
                        disabled={otp.some((digit, i) => digit !== newOtp ? newOtp[i] : serverOtp[i])}
                    >
                        Verify
                    </button>
                </div>

                <Link to={'/create-account'}>
                    <div className='md:flex hidden justify-center items-center'>
                        <h1 className='underline text-[#045EC9]'>Back</h1>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default OtpVerify;
