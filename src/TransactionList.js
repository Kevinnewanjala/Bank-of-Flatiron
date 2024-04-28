// Import React module
import React from 'react';

// Define TransactionList component as a functional component
const TransactionList = ({ transactions }) => {
  return (
    <table> {/* Table element */}
      <thead> {/* Table header */}
        <tr> {/* Table row */}
          {/* Table header cells */}
          <th>Date</th> {/* Date column */}
          <th>Description</th> {/* Description column */}
          <th>Category</th> {/* Category column */}
          <th>Amount</th> {/* Amount column */}
        </tr>
      </thead>
      <tbody> {/* Table body */}
        {/* Map through transactions array and generate table rows */}
        {transactions.map((transaction, index) => (
          <tr key={index}> {/* Table row with unique key */}
            {/* Table data cells with transaction data */}
            <td>{transaction.date}</td> {/* Date */}
            <td>{transaction.description}</td> {/* Description */}
            <td>{transaction.category}</td> {/* Category */}
            <td>{transaction.amount}</td> {/* Amount */}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// Export the TransactionList component as the default export
export default TransactionList;
