import React from "react";
import "./Featured.css";

const Featured: React.FC = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Mysore</h1>
          <h2>23 properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Bengaluru</h1>
          <h2>53 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/10/Munnar.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Ooty</h1>
          <h2>12 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;