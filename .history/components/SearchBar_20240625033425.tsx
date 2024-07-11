"use client";
import {SearchManufacturer} from "./";

const SearchBar = () => {
  const handleSeach = () =>{

  }

  return (
    <form className='searchbar' onSubmit={handleSeach}>
      <div className="searchbar__item">
        <SearchManufacturer />
      </div>
    </form>
  )
}

export default SearchBar
