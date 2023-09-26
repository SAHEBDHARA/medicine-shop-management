// MedicineFormContext.js
import React, { createContext, useContext, useState } from 'react';

const MedicineFormContext = createContext();

export function MedicineFormProvider({ children }) {
  const [medicineFormData, setMedicineFormData] = useState([]);
  return (
    <MedicineFormContext.Provider value={{ medicineFormData, setMedicineFormData }}>
      {children}
    </MedicineFormContext.Provider>
  );
}

export function useMedicineFormContext() {
  return useContext(MedicineFormContext);
}
