import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://swapi.dev/api/starships";

const StarwarsList = () => {
  const [starwarslist, setStarwarsList] = useState([]);
  const fetchDataFromTheApi = () => {
    axios
      .get(API_URL)
      .then((response) => setStarwarsList(response.data.results))
      .catch((error) => console.log(error));
  };
  useEffect(fetchDataFromTheApi, []);
  function renderList() {
    const list = starwarslist.map((ship, idx) => {
      return (
        <div
          key={ship.created}
          style={{
            margin: 10,
            border: "2px solid black",
            backgroundColor: "lightblue",
            padding: "10px"
          }}
        >
          <p>{ship.names}</p>
          <p>{ship.model}</p>
          <p>{ship.manufacturer}</p>
          <p>{ship.length}</p>
          <p>{ship.cargo_capacity}</p>
          <p>{ship.crew}</p>
        </div>
      );
    });
    return list;
  }
  return <div>{renderList()}</div>;
};
export default StarwarsList;
