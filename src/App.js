import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
function App() {
  const [weight,setWeight]=useState(0);
  const [height ,setHeight]=useState(0);
  const [bmi,setbmi]=useState();
  const [message,setmessage]=useState();
  const weightHandler =(e)=>{
    setWeight(e.target.value)

  }
 
  const heightHandler =(e)=>{
    setHeight(e.target.value)

  }
  function calculateBMI(){
    if(weight==0 || height==0){
      alert("All field are require");
    }
    else{
      let healthbmi =weight / (height * height);
      setbmi(healthbmi.toFixed(1));
      if(bmi<18.5){
        setmessage("you are underweight")
      }
      else if(bmi>=18.5 && bmi<24.9){
        setmessage("you are normal weight");
      }
      else{
        setmessage("you are overweight");
      }
    }
  }
  function reload(){
    window.location.reload();
  }
  return (
  <>
  <div className="Container">
   
    
      <div className="section ">
        <div class="row">
          <div className='col-md-2'>
          <label>Weight</label>
          </div>
         
        
          <div className='col-md-8'>
        <input type="text" className="form-control" id="weight" onChange={(e) =>weightHandler(e)}></input>
        </div>
        </div>
        <div class="row" style={{marginTop:30}}>
        <div className='col-md-2'>
          <label>Height</label>
          </div>
          <div className='col-md-8'>
        <input type="text" className="form-control" id="height" onChange={(e) =>heightHandler(e)}></input>
        </div>
        </div>
        <h3  style={{marginTop:30}}>your bmi is :{bmi} </h3>
        <p  style={{marginTop:30}}> {message}</p>
        <button id="submit" class="btn btn-primary" onClick={calculateBMI}>Submit</button>
        <button id="reload" class="btn btn-danger" style={{marginLeft:20}} onClick={reload}>Reload</button>
      </div>
     
  </div>
  </> 
  );
}

export default App;
