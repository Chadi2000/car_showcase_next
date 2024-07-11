"use client";
import { useState } from "react";
import {SearchManufacturer} from "./";
import Image from "next/image";

const SearchButton = ({otherClasses}:{otherClasses:string}) =>{
  <button type="submit" className={`-ml-3 z-10  ${otherClasses}`}>
    <Image src="/maginfying-glass.svg" alt="magnifying glass" width={40}
    height={40} className="object-contain" />
  </button>
}

const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState('');
 

  return (
    <form className='searchbar' onSubmit={handleSeach}>
      <div className="searchbar__item">
        <SearchManufacturer
            manufacturer={manufacturer}
            setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
    </form>
  )
}

export default SearchBar
