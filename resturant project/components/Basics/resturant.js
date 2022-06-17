import React, {useState} from 'react';
import "./resturant.css";
import Menu from "./menuAPI";
import MenuCard from './menuCard';
import Navbar from './Navbar';

const uniqueList=[...new Set(Menu.map((curElem)=>
{
  return curElem.category;
})),"All"];
console.log(uniqueList);





const Resturant = () => {
  const [menuData,setMenuData]=useState(Menu);

  //menuList is created to passs filtered category of result to navbar
  const [menuList,setmenuList]=useState(uniqueList);
  //console.log(menuData);


  //filterItem is a onlick function that runs it basically takes a argument and to store that arguments passed we use category parameter.
  //we also used arrow function with onclick event so that it doesnt keep calling itself again and again in future.
  const filterItem=(onclickcategory)=>
  {
    if(onclickcategory==="All")
    {
      setMenuData(Menu);
      return;
    }
    const updatedList=Menu.filter((curElem)=>
    {
      return curElem.category=== onclickcategory;
    })
    setMenuData(updatedList);
  };


  return(
    <>
    <Navbar filterItem={filterItem} menuList={menuList} />
    
    <MenuCard menuData={menuData}/>
    </>
  );
};

export default Resturant;