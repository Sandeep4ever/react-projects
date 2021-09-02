import React ,{useState} from 'react'
// import "./style.css"
function UseState() {
  // const initial =14;
 const [state, setstate] =useState(0)
  
  return (
    <div>
       <div className ="center_div">
        <p>{state}</p>
         <div class="button2" onClick={() => setstate(state+1)}> 
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCREMENT
         </div>
         <div class="button2" onClick={() => state >0 ? setstate(state-1):setstate(0)}> 
          <span></span>
          <span></span>
          <span></span>
          <span></span>
           DECRIMENT
         </div>

       </div>
    </div>
  )
}

export default UseState
