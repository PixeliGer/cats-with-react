import { useState, useEffect } from "react";
import CatList from "../Components/CatList";
import TagSelect from "../Components/TagsSelect";
import { GET_CATS, GET_TAGS } from "../Utils/ApiUrls";

function Cats() {
  const [tags, setTags] = useState([]);
  const [cats, setCats] = useState([]);

  let [tag, setTag] = useState("Select a Tag");

  const fetchCats = async (url) => {
    await fetch(url)
      .then((response) => response.json())
      .then((data) => setCats(data))
      .catch((error) => console.log(error));
  };

  const fetchTags = async (url) => {
    await fetch(url)
      .then((response) => response.json())
      .then((data) => setTags(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    fetchTags(GET_TAGS);
  }, []);

  const handleCategory = (data) => {
    tag = data.value;
    setTag(tag);

    fetchCats(`${GET_CATS}?tags=${tag}&limit=40`);
  };

  return (
    <div className="main">
      <h1>
        Get Cats by selecting a Tag{" "}
        <span role="img" aria-label="sparks">
          🔮✨
        </span>
      </h1>
      <TagSelect onChange={(data) => handleCategory(data)} tags={tags} />
      <CatList cats={cats} />
    </div>
  );
}

export default Cats;
