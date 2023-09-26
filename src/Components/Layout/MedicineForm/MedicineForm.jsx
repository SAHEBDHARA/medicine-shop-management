import React, { useState } from 'react';
import './MedicineForm.css'; // Import your CSS file

const MedicineForm = () => {
  const [medicineName, setMedicineName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [availableQuantity, setAvailableQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

  
    console.log({
      medicineName,
      description,
      price,
      availableQuantity,
    });

    // Clear form fields after submission
    setMedicineName('');
    setDescription('');
    setPrice('');
    setAvailableQuantity('');
  };

  return (
    <div className="medicine-form-container">
      <form className="medicine-form" onSubmit={handleSubmit}>
        <h2>Add Medicine</h2>
        <div className="form-group">
          <label>Medicine Name:</label>
          <input
            type="text"
            value={medicineName}
            onChange={(e) => setMedicineName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Available Quantity:</label>
          <input
            type="number"
            value={availableQuantity}
            onChange={(e) => setAvailableQuantity(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Medicine</button>
      </form>
    </div>
  );
};

export default MedicineForm;
