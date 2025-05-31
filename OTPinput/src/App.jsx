import React, { useRef, useState } from 'react'

export default function App() {

  const [otp, setOtp] = useState(new Array(6).fill(""))

  const inputRefs = useRef([])

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value.length > 1) return

    const updatedOtp = [...otp]
    updatedOtp[index] = value
    setOtp(updatedOtp)

    // Auto Move to next input
    if (value && index < otp.length - 1) {
      inputRefs.current[index + 1].focus();
    }
  }

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>Enter OTP</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        {
          otp.map((digit, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => {
                if (
                  e.key === "Backspace" &&
                  !e.target.value &&        
                  index > 0                 
                ) {
                  inputRefs.current[index - 1].focus();
                }
              }}
              ref={(e) => (inputRefs.current[index] = e)}
              style={{
                width: "40px",
                height: "40px",
                fontSize: "24px",
                textAlign: "center"
              }}
            />
          ))
        }
      </div>
    </div>
  )
}
