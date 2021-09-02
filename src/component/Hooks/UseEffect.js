import React ,{useState,useEffect} from 'react'
// import "./style.css"
function UseEffect() {
  // const initial =14;
 const [state, setstate] =useState(0)

 useEffect (() => {
  document.title =`chats(${state})`
 },[]);
  
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
        

       </div>
    </div>
  )
}

export default UseEffect