import React, { useState } from "react";
import { moviesList } from "../data.js";
import classes from "./Home.module.css";
// import Search from "./Search.js";

export default function Home() {
  const [filteredList, setFilteredList] = new useState(moviesList);
  const filterBySearch = (event) => {
    // Access input value
    const query = event.target.value;
    // Create copy of item list
    var updatedList = [moviesList];
    // Include all elements which includes the search query
    updatedList = updatedList.filter((data) => {
      return data.toString().indexOf(query.toLowerCase()) !== -1;
    });
    // Trigger render with updated values
    setFilteredList(updatedList);
  };
  return (
    <div>
      <div className={classes.search}>
        <input type="search" className={classes.search_input}  onChange={filterBySearch} />
        <input type="button" className={classes.button} value="Search" />
      </div>
      <h2 className={classes.intro}>Sharing a few of our favourite movies</h2>
      <div className={classes.cards}>
        {filteredList.map((data, i) => (
          <article key={i} className={classes.card}>
            <header>
              <h2>{data.name}</h2>
            </header>
            <img
              className={classes.card_img}
              src={data.img}
              alt="Hot air balloons"
            />
            <div className={classes.content}>
              <p>{data.year}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
