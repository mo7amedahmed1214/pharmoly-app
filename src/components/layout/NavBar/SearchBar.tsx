'use client';

import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  const [query, setQuery] = useState('');


  return (
    <div className="flex-1 max-w-2xl mx-4">
      <form className="relative">
        <div className="relative flex items-center">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Search for every thing you want...'
            className="w-full pl-10 pr-12 py-3  bg-blue-100 rounded-full
             focus:outline-none  focus:ring-0 focus:border-transparent text-gray-700 placeholder:text-xs placeholder-gray-400"
          />

          <Search
            className="text-lg absolute left-2  text-blue-500 "
          />

          <button
            className="text-xs absolute right-2 p-2 bg-blue-500 text-white rounded-3xl hover:bg-blue-400 transition-colors duration-200"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;

