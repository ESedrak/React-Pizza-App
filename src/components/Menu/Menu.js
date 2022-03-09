import React from 'react';
import MenuItem from "./MenuItem";
import "./Menu.css";
import { MenuList } from './MenuList';


//Create a props here for MenuItem.js
function Menu() {
  return (

    <div className='menu'>
      <h1 className="menuTitle">Pizza Menu</h1>


      {/*use map()function to pass data from MenuList*/}
      <div className='menuList'>
        {MenuList.map((item, key) => {
          return (
            <MenuItem
              key={key}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          );
        })}

      </div>

    </div>
  );
}

export default Menu;