import React from 'react';
import './searchBar.css'

const SearchBar = () => {
  return (
    <div className='search-bar'>
        <form action="" className="search-form d-flex align-items-center">
            <input type='text' placeholder='Search' title='Enter search keyword'/>
            <button title='Search'>
                <i className="bi bi-search"></i>
            </button>
        </form>
    </div>
  )
}

export default SearchBar