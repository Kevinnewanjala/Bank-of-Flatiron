import React, { useState } from 'react';
import './TransactionList.css'; // Import the CSS file for TransactionList styles

const TransactionList = ({ transactions }) => {
  const [sortBy, setSortBy] = useState('date'); // Default sort by date

  // Function to handle sorting
  const handleSort = (sortByField) => {
    setSortBy(sortByField);
  };

  // Sort transactions based on the selected field
  const sortedTransactions = [...transactions].sort((a, b) => {
    if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    } else if (sortBy === 'description') {
      return a.description.localeCompare(b.description);
    } else {
      // Default sorting by date
      return new Date(a.date) - new Date(b.date);
    }
  });

  return (
    <div>
      <div className="sorting-buttons-container"> {/* Apply CSS class for centering */}
        <button onClick={() => handleSort('date')}>Sort by Date</button>
        <button onClick={() => handleSort('category')}>Sort by Category</button>
        <button onClick={() => handleSort('description')}>Sort by Description</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {sortedTransactions.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
