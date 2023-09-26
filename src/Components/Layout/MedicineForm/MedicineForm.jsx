import React, { useState } from 'react';
import './MedicineForm.css';
import { useNavigate } from 'react-router-dom';
import { useMedicineFormContext } from '../../../Context/MedicineCnotext';

const MedicineForm = () => {
  const { medicineFormData, setMedicineFormData } = useMedicineFormContext();

  const navigate = useNavigate();

  // Initialize the local state to manage form inputs
  const [medicineInputs, setMedicineInputs] = useState({
    medicineName: '',
    description: '',
    price: '',
    availableQuantity: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newMedicine = {
      medicineName: medicineInputs.medicineName,
      description: medicineInputs.description,
      price: medicineInputs.price,
      availableQuantity: medicineInputs.availableQuantity,
    };
    setMedicineFormData([...medicineFormData, newMedicine]);
   
    setMedicineInputs({
      medicineName: '',
      description: '',
      price: '',
      availableQuantity: '',
    });

    // Navigate to the desired page
    navigate('/');
  };

  return (
    <div className="medicine-form-container">
      <form className="medicine-form" onSubmit={handleSubmit}>
        <h2>Add Medicine</h2>
        <div className="form-group">
          <label>Medicine Name:</label>
          <input
            type="text"
            value={medicineInputs.medicineName}
            onChange={(e) =>
              setMedicineInputs({
                ...medicineInputs,
                medicineName: e.target.value,
              })
            }
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            value={medicineInputs.description}
            onChange={(e) =>
              setMedicineInputs({
                ...medicineInputs,
                description: e.target.value,
              })
            }
            required
          />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            value={medicineInputs.price}
            onChange={(e) =>
              setMedicineInputs({
                ...medicineInputs,
                price: e.target.value,
              })
            }
            required
          />
        </div>
        <div className="form-group">
          <label>Available Quantity:</label>
          <input
            type="number"
            value={medicineInputs.availableQuantity}
            onChange={(e) =>
              setMedicineInputs({
                ...medicineInputs,
                availableQuantity: e.target.value,
              })
            }
            required
          />
        </div>
        <button type="submit">Add Medicine</button>
      </form>
    </div>
  );
};

export default MedicineForm;
