import Cat from "../Components/Cat";
import "./CatList.css";

function CatList({ cats }) {
  return (
    <ul className="cards">
      {cats?.map((cat, index) => (
        <Cat key={cat._id} cat={cat} />
      ))}
    </ul>
  );
}

export default CatList;
