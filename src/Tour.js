import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Tour = ({ id, info, name, image, price, deleteItem }) => {
  return (
    <Card className="tour-card-main col-md-5 mx-auto">
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{info}</Card.Text>
        <p>{price}$</p>
        <div className="tour-button col-md-1 mx-auto">
          <Button variant="outline-danger" onClick={() => deleteItem(id)}>
            Not interested
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Tour;
