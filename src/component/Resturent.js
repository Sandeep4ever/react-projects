import React ,{useState} from "react";
import { MenuCard } from "./MenuCard";
// import "./component/Basic/style.css";
import Menu from "./menuApi";
import Navbar from "./Navbar";

const uniqeList =[
  ...new Set(Menu.map((curElem) =>{ // use new set() for unique category & returns object and use spread operatior for value returns in arrays 
      return curElem.category;
})
),
"All"
]
console.log(uniqeList);

 const Resturent = () =>{
   const [menuData, setMenuData] = useState(Menu);
   const [menuList] = useState(uniqeList);
  
   const filterItem =(category)=> {
     if(category==="All"){
       setMenuData(Menu);
       return;
     }
      const updatedList =Menu.filter((curEle) =>{
         
         return curEle.category===category;
        
       })  
       setMenuData(updatedList);
   }
  return (
    <>
      <Navbar filterItem ={filterItem} menuList ={menuList}/>
      <MenuCard menuData ={menuData}/>
    </>
  );

};

export {Resturent};