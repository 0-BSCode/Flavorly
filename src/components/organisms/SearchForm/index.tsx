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
    <div>
      <div className='flex items-center gap-2'>
        <FaSearch className='text-lg' />
        <input
          className='flex-1 py-1'
          id='search'
          placeholder='Search recipe name'
          type='text'
          value={searchText}
          onChange={handleSearchTextChange}
        />
      </div>
    </div>
  );
};

export default SearchForm;
