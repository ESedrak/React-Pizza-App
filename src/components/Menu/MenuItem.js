import React from 'react';

//Pass MenuItem pros here
function MenuItem(props) {
  return (
    <div className='menuItem'>

      <img src={props.image} />
      <h3>{props.name}</h3>
      <p>${props.price}</p>



    </div>
  );
}

export default MenuItem;