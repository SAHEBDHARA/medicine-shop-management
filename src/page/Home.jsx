import React from 'react'
import Header from '../Components/Layout/Header'
import MedicineList from '../Components/Layout/MedicineList/MedicineList'
import AvailableMedicine from '../Components/Layout/MedicineList/availableMedicine'
import Input from '../Components/UI/Input'
import AddMedicine from '../Components/Layout/MedicineForm/addMedicine'

const Home = () => {
  return (
    <>
        <Header/>
        {/* <MedicineList/> */}
        <AvailableMedicine/>
      {/* <AddMedicine/> */}
    
    </>
  )
}

export default Home