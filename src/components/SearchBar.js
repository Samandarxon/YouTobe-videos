import React, { useState } from "react";

const SearchBar = ({onFormSubmit}) => {

  const [term, setTrem]=useState('');

  const onInputChange = (event) => {
    setTrem(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(term);
  };

  return (
    <div
      style={{ marginTop: `${30}px!important` }}
      className="search-bar ui segment"
    >
      <form onSubmit={onSubmit} className="ui form">
        <div className="filed">
          <label>Search For A Video</label>
          <input
            type="text"
            value={term}
            onChange={onInputChange}
          />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
