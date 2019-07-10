import React from "react";
import { setSearching } from "../actions";
import store from "../store"
import "./SearchBox.css";

const SearchBox = () => {

  const handleChange = e => {
    store.dispatch(setSearching(e.target.value));
    console.log(store.getState());
  };

  return (
    <form className="Search">
      <input
        className="Search__input"
        onChange={handleChange}
        placeholder="Search contact..."
      />
    </form>
  );
};

export default SearchBox;