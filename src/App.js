import React, {useState} from 'react'
import './index.css'

function App() {
  const [weight, setWeight] = useState(0)
  const [squat, setSquat] = useState(0)
  const [bench, setBench] = useState(0)
  const [deadlift, setDeadlift] = useState(0)
  const [wilks, setWilks] = useState('')
  const [message, setMessage] = useState('')
  const[gender, setGender] = useState("")
  const[units, setUnits] = useState("")

  let imgSrc = ''
  let calcWilks = (event) => {
      event.preventDefault()

      if (weight === 0 || squat === 0 || bench === 0 || deadlift === 0) {
        alert('Please provide weight squat, bench and deadlift values')
      }
      if (gender === "Male" && units === "lb") {
       let wilks = (+squat / 2.205 + +bench /2.205+ +deadlift / 2.205) 
       * (500) /
       ((- 0.00000001291 * weight/2.205*weight/2.205*weight/2.205
       *weight/2.205*weight/2.205) +
       (0.00000701863 * weight/2.205*weight/2.205*
       weight/2.205*weight/2.205)+
       (- 0.00113732 * weight/2.205*weight/2.205*weight/2.205) +
       (-0.002388645 * weight/2.205*weight/2.205) + (16.2606339 * weight/2.205) 
       + (-216.0475144)
       )
        setWilks(wilks.toFixed(1))
      }
      else if (gender === "Female" && units === "lb") {
        let wilks = (+squat / 2.205 + +bench /2.205 + +deadlift / 2.205) 
        * (500) /
        ((- 0.00000009054 * weight/2.205*weight/2.205*weight/2.205
        *weight/2.205*weight/2.205) +
        (0.00004731582 * weight/2.205*weight/2.205*
        weight/2.205*weight/2.205)+
        (- 0.00930733913 * weight/2.205*weight/2.205*weight/2.205) +
        (0.82112226871 * weight/2.205*weight/2.205) + (-27.23842536447 * weight/2.205) 
        + (594.31747775582)
        )
         setWilks(wilks.toFixed(1))
       }
       else if (gender === "Male" && units === "kg") {
        let wilks = (+squat+ +bench+ +deadlift) * 
        (500) /
        ((- 0.00000001291 * weight*weight*weight
        *weight*weight) +
        (0.00000701863 * weight*weight*
        weight*weight)+
        (- 0.00113732 * weight*weight*weight) +
        (-0.002388645 * weight*weight) + (16.2606339 * weight) 
        + (-216.0475144)
        )
         setWilks(wilks.toFixed(1))
       }
       else if (gender === "Female" && units === "kg") {
         let wilks = (+squat+ +bench +deadlift) 
         * (500) /
         ((- 0.00000009054 * weight*weight*weight
         *weight*weight) +
         (0.00004731582 * weight*weight*
         weight*weight)+
         (- 0.00930733913 * weight*weight*weight) +
         (0.82112226871 * weight*weight) + (-27.23842536447 * weight) 
         + (594.31747775582)
         )
          setWilks(wilks.toFixed(1))
        }

  }

  return (
    <div className="App">
     <div className = 'container'>

      <h2 className = 'center'>Wilks Calculator</h2>
      <p className = 'disclaimer'>Disclaimer: You must click submit after adjusting any numbers, or the wilks score will not update.</p>
      <div>
        <h2 className = 'genderlabel'>Gender</h2>
        </div>

        <div class="male">
        <input type = "radio" name = "gender" value = "Male" 
        onChange = {e=> {setGender("Male")}} /> Male
        </div>
        
        <div class="female">
        <input type = "radio" name = "gender" value = "Female" 
        onChange = {e=>{setGender("Female")}} /> Female
       </div>
       <div>
        <h2 className = 'genderlabel'>Enter Units:</h2>
        </div>
       <div class = "kg">
       <input type = "radio" name = "units" value = "kg" 
        onChange = {e=>{setUnits("kg")}} /> Kgs
       </div>
       <div class = "lbs">
       <input type = "radio" name = "units" value = "lb" 
        onChange = {e=>{setUnits("lb")}} /> Lbs
       </div>

      <form className = 'form' onSubmit = {calcWilks}>
        Enter your Numbers:
        <div>
          <label>weight (lbs)</label>
          <input value = {weight} onChange={(event) => setWeight(event.target.value)}/>
        </div>
        <div>
          <label> squat (lbs)</label>
          <input value = {squat} onChange={(event) => setSquat(event.target.value)}/>
        </div>
        <div>
          <label> bench (lbs)</label>
          <input value = {bench} onChange={(event) => setBench(event.target.value)}/>
        </div>
        <div>
          <label> deadlift (lbs)</label>
          <input value = {deadlift} onChange={(event) => setDeadlift(event.target.value)}/>
        </div>

        
        <div>
          <button className = 'btn' type= 'submit'>Submit</button>
        </div>
      </form>

      <div className = 'result'>
        <h3>Your wilks is: {wilks}</h3>
        <p>{message}</p>
      </div>

      <div className = 'img-container'>
        <img src = {imgSrc} alt = ''></img>
      </div>
 
     </div>
    </div>
  );
}

export default App;
