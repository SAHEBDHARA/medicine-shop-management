import React from 'react';
import { useMedicineFormContext } from '../../../Context/MedicineCnotext';
// import './MedicineList.css'; // Import your CSS file for styling
import classes from './MedicineList.module.css'
import AddMedicine from '../MedicineForm/addMedicine';

const MedicineList = () => {
  const { medicineFormData } = useMedicineFormContext();

  return (
  <div>
    <h1 className={classes.heading}>Medicine List </h1>
    {medicineFormData.map((medicine, index) =>(
      <li key={index} className={classes.meal}>
      <div>
        <h3>{medicine.medicineName}</h3>
        <div className={classes.description}>{medicine.description}</div>
        <div className={classes.price}>${parseInt(medicine.price)}</div>
      </div>
      <div>
      <strong>Available Quantity:</strong> {medicine.availableQuantity}
      </div>
      <div> 
        {/* <MealItemForm onAddtoCart={addToCartHandler}/> */}
        <AddMedicine/>
      </div>
    </li>
    ))}
  </div>
  );
};

export default MedicineList;
