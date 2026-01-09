import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Emergency from "./components/Emergency";
import Home from "./pages/Home";
import Guidelines from "./pages/Guidelines";
import AdminDashboard from "./pages/AdminDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import GuardianDashboard from "./pages/GuardianDashboard";
import PatientDashboard from "./pages/PatientDashboard";

export default function App() {
  const [session, setSession] = useState(null);

  return (
    <div>
      <Nav session={session} setSession={setSession} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/guidelines" element={<Guidelines />} />
        <Route path="/Admin" element={<AdminDashboard />} />
        <Route path="/Doctor" element={<DoctorDashboard />} />
        <Route path="/Guardian" element={<GuardianDashboard />} />
        <Route path="/Patient" element={<PatientDashboard />} />
      </Routes>
    </div>
  );
}
