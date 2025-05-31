import React, { useState } from 'react';

export default function App() {
  const steps = ["Login", "Verify", "Payment", "Success", "Contact", "About"];
  const [currentStep, setCurrentStep] = useState(0);

  const progressPercentage = ((currentStep + 1) / steps.length) * 100;

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h2 style={{ textAlign: "center" }}>🧭 Step Progress Tracker</h2>

      {/* Responsive CSS */}
      <style>
        {`
          @media (max-width: 600px) {
            .steps-container {
              flex-direction: column;
              align-items: stretch;
            }

            .step-box {
              text-align: center;
              font-size: 14px;
            }

            .button-container {
              flex-direction: column;
              gap: 10px;
            }

            button {
              width: 100%;
              font-size: 16px;
              padding: 10px;
            }

            .progress-bar {
              height: 8px;
            }
          }
        `}
      </style>

      {/* Progress Bar */}
      <div
        className="progress-bar"
        style={{
          backgroundColor: "#eee",
          height: "10px",
          borderRadius: "5px",
          marginBottom: "20px"
        }}
      >
        <div
          style={{
            height: "100%",
            width: `${progressPercentage}%`,
            backgroundColor: "#4caf50",
            borderRadius: "5px",
            transition: "width 0.3s ease-in-out"
          }}
        />
      </div>

      {/* Steps Boxes */}
      <div
        className="steps-container"
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
          flexWrap: "wrap"
        }}
      >
        {steps.map((step, index) => (
          <div
            key={index}
            className="step-box"
            style={{
              flex: "1 1 auto",
              textAlign: "center",
              cursor: "pointer",
              padding: "10px 20px",
              borderRadius: "5px",
              backgroundColor: currentStep === index ? "#4caf50" : "#ddd",
              color: currentStep === index ? "white" : "black",
              fontWeight: currentStep === index ? "bold" : "normal",
              minWidth: "80px"
            }}
          >
            {step}
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div
        className="button-container"
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "30px"
        }}
      >
        <button
          onClick={() => setCurrentStep((p) => p - 1)}
          disabled={currentStep === 0}
        >
          ⬅️ Previous
        </button>

        <button
          onClick={() => setCurrentStep((p) => p + 1)}
          disabled={currentStep === steps.length - 1}
        >
          Next ➡️
        </button>
      </div>
    </div>
  );
}
