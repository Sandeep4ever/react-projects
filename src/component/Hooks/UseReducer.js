import React ,{useReducer} from 'react'
// import "./style.css"
function UseReducer() {

const reducer = (state,action) =>{
  if(action.type==="INCREMENT"){
    state =state +1;
  }
  if( state >0 && action.type ==="DECRIMENT"){
    state =state-1;
  }
  return state;
}
// const initial =0;

 const [state, dispatch] = useReducer(reducer, 0)
 // useReducer and useState are same working but in samall project use of usestate and for  big project use of UseReducer
  
  return (
    <div>
       <div className ="center_div">
        <p>{state}</p>
         <div class="button2" onClick={()=>{dispatch({type:"INCREMENT"})}}> 
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCREMENT
         </div>
         <div class="button2" onClick={()=>{dispatch({type:"DECRIMENT"})} }> 
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

export default UseReducer