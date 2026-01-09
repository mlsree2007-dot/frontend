import React from "react";

export default function Emergency() {
  const handleEmergency = () => {
    alert("🚨 Emergency alert triggered! (Mock flow for demo)");
  };

  return (
    <div style={{ padding: 20, textAlign: "center" }}>
      <h2 style={{ color: "#b22222" }}>Emergency Mode</h2>
      <p>If you are outside a hospital, press the button below to connect to nearby facilities.</p>
      <button
        onClick={handleEmergency}
        style={{
          backgroundColor: "#ff0000",
          color: "white",
          padding: "16px 24px",
          fontSize: "1.1rem",
          fontWeight: "bold",
          borderRadius: 10,
          border: "none",
          marginTop: 20,
          cursor: "pointer"
        }}
      >
        🚨 Trigger Emergency Alert
      </button>
    </div>
  );
}
