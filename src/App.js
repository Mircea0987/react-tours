import React from "react";
import { useState, useEffect } from "react";
import Tours from "./Tours";

const url = "https://course-api.com/react-tours-project";

const App = () => {
  const [tours, setTours] = useState([]);

  const getData = async () => {
    const response = await fetch(url);
    const tours = await response.json();
    setTours(tours);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <main>
      <Tours tours={tours}></Tours>
    </main>
  );
};

export default App;
