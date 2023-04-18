import React from "react";
import classes from "./Search.module.css"

function Search() {
    return (
      <div className={classes.search}>
        <input type="search" className={classes.search_input}/>
        <input type="button" className={classes.button} value="Search"/>
      </div>
    );
  }
export default Search;
