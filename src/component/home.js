import React from 'react'
import {Link} from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Welome to the app</h1>
      <h2><Link to="/restorent">Restorent</Link></h2>
      <h2><Link to="/todo-list">Todo-List</Link></h2>
    </div>
  )
}

export default Home
