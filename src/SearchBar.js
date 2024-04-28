// Import React module
import React from 'react';
// Import CSS file for SearchBar styles
import './SearchBar.css';

// Define SearchBar component as a functional component
const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="search-bar-container"> {/* Container div */}
      {/* Input field for searching transactions */}
      <input
        type="text" // Input type is text
        value={searchTerm} // Value of the input field is set to searchTerm
        onChange={(e) => onSearchChange(e.target.value)} // onChange event handler to update search term
        placeholder="Search transactions by Description..." // Placeholder text for the input field
        className="search-input" // CSS class for styling the input field
      />
    </div>
  );
};

// Export the SearchBar component as the default export
export default SearchBar;
