
import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css";


function Home() {
  return (
    <div className='home'>
      {/* set backgroundImage inside of div*/}
      <div className='headerContainer'>
        <h1>Yummy Pizza 😋</h1>
        <Link to="/Menu">
          <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  );

}

export default Home;



