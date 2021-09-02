import React from 'react'

export const MenuCard = ({menuData}) => {
  // console.log(menuData)
  return (
    <div>
    <section className="main-card--cointainer">
       {menuData.map((currentElement) =>{
         const {id, name, category, image, description} =currentElement; //that's called destructing 
          return(
            <>
            <div className="card-container" key ={id}>
       <div className="card">
        <div className="card-body">
          <span className ="card-number card-circle subtle">{id}</span>
           <span className ="card-author subtle" >{category}</span>
           <h2 className ="card-title">{name}</h2>
           <span className="card-description subtle">
           {/* {currentElement.description}  if you not making destructing then writes this sentences */}
            {description}
           </span>
           <div className="card-read">Read</div>
           <div>
             <img src={image} alt="images" className="card-media" />
             <span className="card-tag subtle">Order Now</span>
           </div>
         
         </div>
       </div>
     </div>
     </>
          );  
       })};
       </section>
    </div>
  )
}
