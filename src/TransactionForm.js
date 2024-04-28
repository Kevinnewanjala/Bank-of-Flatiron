// Import React module and useState hook
import React, { useState } from 'react';

// Define TransactionForm component as a functional component
const TransactionForm = ({ onAddTransaction }) => {
  // Define state variables for date, description, category, and amount
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  // Function to handle adding a new transaction
  const handleAddClick = () => {
    // Create a new transaction object
    const newTransaction = {
      date: date,
      description: description,
      category: category,
      amount: parseFloat(amount) // Convert amount to float
    };
    // Call the onAddTransaction function with the new transaction object
    onAddTransaction(newTransaction);
    // Clear the input fields after adding the transaction
    setDate('');
    setDescription('');
    setCategory('');
    setAmount('');
  };

  // Render the TransactionForm component
  return (
    <div className="transaction-form">
      {/* Heading */}
      <h2>Add New Transaction</h2>
      {/* Input fields for date, description, category, and amount */}
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} /> {/* Date input */}
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} /> {/* Description input */}
      <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} /> {/* Category input */}
      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} /> {/* Amount input */}
      {/* Button to add the transaction */}
      <button onClick={handleAddClick}>Add</button>
    </div>
  );
};

// Export the TransactionForm component as the default export
export default TransactionForm;
