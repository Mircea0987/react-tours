import React from "react";
import Tour from "./Tour";

const Tours = ({ tours, deleteItem }) => {
  return (
    <div>
      <h2 className="col-md-1 mx-auto">Our Tours</h2>
      <div>
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} deleteItem={deleteItem}></Tour>;
        })}
      </div>
    </div>
  );
};

export default Tours;
