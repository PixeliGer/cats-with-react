import { useState, useEffect } from "react";
import CatList from "../Components/CatList";
import { GET_CATS, GET_TAGS } from "../Utils/ApiUrls";

function Home() {
  const [cats, setCats] = useState([]);

  const fetchCats = async (url) => {
    await fetch(url)
      .then((response) => response.json())
      .then((data) => setCats(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchCats(`${GET_CATS}?limit=20`);
  }, []);

  return (
    <div className="main">
      <h1>
        A bunch of Cats{" "}
        <span role="img" aria-label="meow">
          🐈‍🐱🙀😸✨
        </span>
      </h1>
      <CatList cats={cats} />
    </div>
  );
}

export default Home;
