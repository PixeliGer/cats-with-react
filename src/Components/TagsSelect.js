import React, { useCallback } from "react";
import "./TagsSelect.css";

const createChangeHandler = (callback) => (event) => {
  const value = event.target.value;
  callback({ value });
};

const TagSelect = (props) => {
  const { tags, onChange: _onChange } = props;
  const onChange = useCallback(createChangeHandler(_onChange), [_onChange]);

  return (
    <div className="select">
      <select
        name="slct"
        id="slct"
        onChange={onChange}
        defaultValue="Select a Category"
      >
        <option disabled value="Select a Tag">
          Select a Tag
        </option>
        {tags?.map((tag, index) => (
          <option key={index} value={tag}>
            {tag}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TagSelect;
