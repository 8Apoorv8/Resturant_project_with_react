import React from 'react'

const Navbar = ({filterItem,menuList}) => {
    return (
        <>
            <nav className='navbar'>
                <div className='btn-group'>
                    {
                        menuList.map((curElem)=>
                        {
                          return(
                            <button className='btn-group__item' onClick={() => filterItem(curElem)}>{curElem}</button>         
                          );  
                        })
                    }
                    {/* <button className='btn-group__item' onClick={() => filterItem("breakfast")}>Breakfast</button>
                    <button className='btn-group__item' onClick={() => filterItem("lunch")}>lunch</button>
                    <button className='btn-group__item' onClick={() => filterItem("evening")}>evening</button>
                    <button className='btn-group__item' onClick={() => filterItem("dinner")}>dinner</button> */}
                    

                </div>
            </nav>
        </>
    )
}
//<button className='btn-group__item' onClick={() => setMenuData(Menu)}>ALL</button>

export default Navbar;