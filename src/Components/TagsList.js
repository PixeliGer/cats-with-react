import React from "react";
import "./TagsList.css";

function TagsList({ tags }) {
  return (
    <div className="tags-row">
      {tags.map((tag, index) => (
        <span key={index} className="chip primary">
          {tag}
        </span>
      ))}
    </div>
  );
}

export default TagsList;
