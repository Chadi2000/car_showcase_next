"use client";
import { useState } from "react";
import {SearchManufacturer} from "./";

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState('');
  const handleSeach = () =>{

  }

  return (
    <form className='searchbar' onSubmit={handleSeach}>
      <div className="searchbar__item">
        <SearchManufacturer
            manufacturer={manufacturer}
            setManufacturer={setManufacturer}
        />
      </div>
    </form>
  )
}

export default SearchBar
