import React, { useRef, useState } from 'react';

const Password = () => {
    const DIGIT_COUNT = 4;
    const [otp, setOtp] = useState(new Array(DIGIT_COUNT).fill(''));
    const inputsRef = useRef([]);

    const handleChange = (value, idx) => {
        if (isNaN(value)) {
            return
        }
        const newArray = [...otp];
        newArray[idx] = value.slice(-1);
        setOtp(newArray)

        if (value && idx < DIGIT_COUNT - 1 )  {
            inputsRef.current[idx + 1].focus();
        }
    }


    const handleKeyDown = (e, idx) => {
        console.log(e.key)
        if(e.key === 'Backspace' && !otp[idx]) {
            inputsRef.current[idx - 1].focus();
        }
    }

    return (
        <>
            <h4 className='otp-head'>ENTER OTP</h4>
            <div className='otp-box'>
                {otp.map((digit, idx) => (
                    <input
                        key={idx}
                        className='box-input'
                        type='text'
                        onChange={(e) => handleChange(e.target.value, idx)}
                        value={otp[idx]}
                        maxLength={1}
                        ref={(el) => (inputsRef.current[idx] = el)}
                        onKeyDown={(e) => handleKeyDown(e, idx)}
                    />
                ))}
            </div>
        </>
    );
};

export default Password;
