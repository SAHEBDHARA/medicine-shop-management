import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./Components/Layout/Header";
import MedicineForm from "./Components/Layout/MedicineForm/MedicineForm";

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header/>}/>
        <Route path="/add-medicine" element={<MedicineForm/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
