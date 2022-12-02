import { GET_RANDOM_CAT } from "../Utils/ApiUrls";
import "./Cat.css";

function Cat(props) {
  const cat = props.cat;
  const url = `${GET_RANDOM_CAT}/${cat._id}`;

  return (
    <li className="cards__item">
      <div className="card">
        <img src={url} alt="cat" />
      </div>
    </li>
  );
}

export default Cat;
