import React, { useState, useRef, useMemo } from "react";
import "./searchbar.css";
const SearchBar = () => {
  const inputAdd = useRef();
  const [item, setItem] = useState([]);
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    return item.filter((item) => {
      return item.toLowerCase().includes(query.toLowerCase());
    });
  }, [item, query]);

  const onSubmit = (e) => {
    e.preventDefault();
    const value = inputAdd.current.value;
    if (value === "") return;
    setItem((prev) => {
      return [...prev, value];
    });
    inputAdd.current.value = "";
  };

  const onChange = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  const onClick = (i) => {
    setQuery(i);
  };
  const onSearch = () => {
    console.log("Searching Progress");
  };

  return (
    <div>
      <h3>React Search , Filter and Suggestion </h3>

      <div className=" center">
        <div className="flex">
          <input
            type="search"
            name="search"
            id="search"
            className="back"
            value={query}
            onChange={onChange}
          />
          <button className="search" onClick={onSearch}>
            Search
          </button>
        </div>

        <form onSubmit={onSubmit} className="flex">
          <input
            type="text"
            name="add"
            id="add"
            ref={inputAdd}
            className="back"
          />
          <button type="submit" className="add">
            Add
          </button>
        </form>
      </div>
      {/* Rendering */}
      <div>
        <h4>Items List :</h4>
        {filteredItems.map((i, index) => (
          <div onClick={() => onClick(i)} key={index}>
            {i}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
