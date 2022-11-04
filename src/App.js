import React from "react";
import { useState, useEffect } from "react";
import Tours from "./Tours";
import Button from "react-bootstrap/Button";
import Loading from "./Loading";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    setLoading(true);
    const response = await fetch(url);
    const tours = await response.json();
    setTours(tours);
    setLoading(false);
  };
  const deleteItem = (id) => {
    const newItem = tours.filter((tour) => tour.id !== id);
    setTours(newItem);
  };
  useEffect(() => {
    getData();
  }, []);
  if (tours.length === 0) {
    return (
      <div>
        <Button variant="primary" onClick={() => getData()}>
          Refresh page
        </Button>
      </div>
    );
  }
  if (loading) {
    return (
      <main>
        <Loading />;
      </main>
    );
  }
  return (
    <main>
      <Tours tours={tours} deleteItem={deleteItem}></Tours>
    </main>
  );
};

export default App;
