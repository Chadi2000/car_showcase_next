"use client";
import { useState } from "react";
import { SearchManufacturer } from "./";
import Image from "next/image";

// Define the SearchButton component to return JSX
const SearchButton = ({ otherClasses }: { otherClasses: string }) => {
  return (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
      <Image
        src="/maginfying-glass.svg"
        alt="magnifying glass"
        width={40}
        height={40}
        className="object-contain"
      />
    </button>
  );
};

// Define the SearchBar component
const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState('');

  // Handle the form submission
  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    // Add search functionality here
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
    </form>
  );
};

export default SearchBar;
