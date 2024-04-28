// Import necessary modules from React and other components
import React, { useState, useEffect } from 'react';
import TransactionList from './TransactionList';
import TransactionForm from './TransactionForm';
import SearchBar from './SearchBar';
import './App.css'; // Import the styles

// Define the main App component
const App = () => {
  // Define state variables for transactions and search term
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch and set initial transaction data when the component mounts
  useEffect(() => {
    // Sample transaction data (can be replaced with actual API calls)
    const fetchedTransactions = [
      { date: '2023-08-15', description: 'Income Deposit', category: 'Income', amount: 100000.00 },
      { date: '2023-01-03', description: 'Online Shopping', category: 'Retail', amount: -7500.50 },
      { date: '2023-01-10', description: 'Grocery Store', category: 'Food', amount: -6550.25 },
      { date: '2023-02-05', description: 'Gas Station', category: 'Transportation', amount: -4000.00 },
      { date: '2023-02-20', description: 'Restaurant', category: 'Food', amount: -1200.75 },
      { date: '2023-03-07', description: 'Utility Bill', category: 'Bills', amount: -15350.00 },
      { date: '2023-03-18', description: 'Movie Tickets', category: 'Entertainment', amount: -3000.00 },
      { date: '2023-04-01', description: 'ATM Withdrawal', category: 'Cash', amount: -20000.00 },
      { date: '2023-04-12', description: 'Electronics Store', category: 'Retail', amount: -3050.50 },
      { date: '2023-05-02', description: 'Clothing Store', category: 'Retail', amount: -15000.00 },
      { date: '2023-05-18', description: 'Coffee Shop', category: 'Food', amount: -1000.50 },
      { date: '2023-06-05', description: 'Online Subscription', category: 'Bills', amount: -22000.00 },
      { date: '2023-06-20', description: 'Concert Tickets', category: 'Entertainment', amount: -10000.00 },
    ];
    setTransactions(fetchedTransactions);
  }, []);

  // Function to handle adding a new transaction
  const handleAddTransaction = (newTransaction) => {
    // Update transactions state with the new transaction
    setTransactions([...transactions, newTransaction]);
  };

  // Filter transactions based on search term
  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Render the main App component
  return (
    <div>
      {/* Header section */}
      <div className="header-container">
        <h1>The Royal Bank of Flatiron</h1>
      </div>
      {/* Search bar section */}
      <div className="search-bar-container" style={{ marginTop: '20px' }}>
        <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      </div>
      {/* Transaction form section */}
      <TransactionForm onAddTransaction={handleAddTransaction} />
      {/* Transaction list section */}
      <TransactionList transactions={filteredTransactions} />
    </div>
  );
};

// Export the App component as the default export
export default App;
