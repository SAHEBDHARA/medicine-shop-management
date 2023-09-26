import React from "react";
import MedicineList from "./MedicineList";
import Card from "./../../UI/Card"
import classes from './availableMedicine.module.css'


const AvailableMedicine = ()=>{
    return(
        <section className={classes.meals} >
            <Card>
            <ul>
            <MedicineList/>
            </ul>
            </Card>
        </section>
    )
}

export default AvailableMedicine; 