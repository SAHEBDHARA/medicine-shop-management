import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./Components/Layout/Header";
import MedicineForm from "./Components/Layout/MedicineForm/MedicineForm";
import { MedicineFormProvider } from "./Context/MedicineCnotext";
import MedicineList from "./Components/Layout/MedicineList/MedicineList";
import Home from "./page/Home";

function App() {
  return (
 <MedicineFormProvider>
    <BrowserRouter>
      <Routes>
        {/* <Route path="/list" element={<MedicineList/>}/> */}
        <Route path="/" element={<Home/>}/>
        <Route path="/add-medicine" element={<MedicineForm/>}/>
      </Routes>
      </BrowserRouter>
      </MedicineFormProvider>
  );
}

export default App;
