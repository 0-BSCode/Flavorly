"use client";
import { RecipesContext } from "@/context/RecipesContext";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchForm = () => {
  const { allRecipes, setFilteredRecipes } = useContext(RecipesContext);
  const [searchText, setSearchText] = useState("");

  const handleSearchTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    if (searchText.length) {
      setFilteredRecipes(allRecipes.filter((recipe) => recipe.name.toLowerCase().includes(searchText.toLowerCase())));
    } else {
      setFilteredRecipes(allRecipes);
    }
  }, [searchText]);

  return (
    <div className='mb-2 flex items-center gap-1 rounded-xl border-2 border-neutral-gray-2 px-4 py-1 focus:border-red-400 md:py-2'>
      <FaSearch className='text-lg md:text-xl' />
      <input
        className='flex-1 rounded-lg px-4 py-1 text-md focus:outline-none md:text-lg'
        id='search'
        placeholder='Search recipe name'
        type='text'
        value={searchText}
        onChange={handleSearchTextChange}
      />
    </div>
  );
};

export default SearchForm;
