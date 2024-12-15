import { useState } from "react";
import "./Bmi.css"


const BmiCalc =()=>{

   const[weight,setWeight]= useState("")
   const[Height,setHeight]= useState("")
   const[Bmi,setBmi]= useState("")
   const[message,setMessage]= useState("")
   console.log(message);
   
   

   const calculateBmi =()=>{
      
    const Bmiweight= parseFloat(weight);
    const Bmiheight= parseFloat(Height) / 100

    if(!(Bmiweight >0 && Bmiheight >0)) {
        setBmi("");
        setMessage("");
        alert("please enter a valid value for wieght and height")
        return;
    }

     const bmiValue=(Bmiweight / (Bmiheight * Bmiheight)).toFixed(2)
     setBmi(bmiValue)
   

     let text = '';
     if(bmiValue < 18.5){
        text ="underweight";
     }else if(bmiValue > 18.5 && bmiValue < 25) {
        text ="Normal Weight";
     }else if(bmiValue >= 25 && bmiValue <30) {
        text ="Overweight";
     }else (
        text ="obese"

     )

     setMessage(text);
        
    
    };
    
   
    return(

     <div className="card">
        <h2>Bmi Calculator</h2>
        <label htmlFor="weight">Weight (kg)</label>
        <input type="number" id="weight" placeholder="Enter your Weight" value={weight} 
        onChange={(e)=>setWeight(e.target.value)}/>
        <label htmlFor="Height">Height (cm)</label>
        <input type="number" id="Height" placeholder="Enter your Height"  value={Height} 
        onChange={(e)=>setHeight(e.target.value)}/>
        <button onClick={calculateBmi}>Calculate</button>
        {Bmi && message && (
            <div className="result">
                Your BMI is {Bmi} - {message}
            </div>
        )}



     </div>

    );    
    
}
export default BmiCalc