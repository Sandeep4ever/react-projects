// Three things are mendatiory for creare component 
// 1 - import react from "React"
// 2-functional component create
// 3- return in jsx  
// import React from "react";

import {Resturent} from "./component/Resturent";
import "./component/style.css";

import {BrowserRouter, Switch, Route} from "react-router-dom";
import UseState from "./component/Hooks/UseState";
// import "./component/Hooks/style.css"; 
import UseEffect from "./component/Hooks/UseEffect";
import UseReducer from "./component/Hooks/UseReducer";
import Todo from "./component/TodoProject/Todo";
import Home from "./component/home";



const App = ()=>{
  return  (
  <div>
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/restorent" component={Resturent} />
      <Route exact path="/todo-list" component={Todo} />
    </Switch>
  </BrowserRouter>
   </div>);
}


export default App;
