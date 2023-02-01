import React from "react";
import { Data } from "../../data";
import Masonry from "react-masonry-css";
import "./box.css";

const Box = () => {
  return (
    <div>
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {Data.map((item) => (
          <div key={item.id}>
            <img src={item.profilePicture} alt="" />
            <div>
              <h3>{item.username}</h3>
              <p style={{ color: "22c38a" }}>${item.price}</p>
              <button className="sell">Sell</button>
              <input className="inp" type="text" />
              <button className="buy">Buy</button>
            </div>
          </div>
        ))}
      </Masonry>
    </div>
  );
};

export default Box;
