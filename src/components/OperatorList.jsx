import React, { useState } from 'react';

const OperatorList = () => {
  const [operators, setOperators] = useState([
    { id: 1, name: 'Welding robot', identifier: '6096', date: '12.09.2019 - 12:53 PM', email: 'robot1@example.com' },
    { id: 2, name: 'Welding robot', identifier: '6096', date: '12.09.2019 - 12:53 PM', email: 'robot2@example.com' },
    { id: 3, name: 'Welding robot', identifier: '6096', date: '12.09.2019 - 12:53 PM', email: 'robot3@example.com' },
    { id: 4, name: 'Welding robot', identifier: '6096', date: '12.09.2019 - 12:53 PM', email: 'robot4@example.com' },
    { id: 5, name: 'Welding robot', identifier: '6096', date: '12.09.2019 - 12:53 PM', email: 'robot5@example.com' },
  ]);

  const removeOperator = (id) => {
    setOperators(operators.filter(operator => operator.id !== id));
  };

  const modifyOperator = (id) => {
    alert(`Modify operator with ID: ${id}`);
  };

  return (
    <div className="container mx-auto my-8 p-4">
      <h2 className="text-2xl font-bold mb-6 text-left">Operators Listing</h2>
      <table className="min-w-full bg-white rounded-lg shadow-md">
        <thead className="text-left bg-gray-100">
          <tr>
            <th className="py-4 px-6">Operator Name</th>
            <th className="py-4 px-6">Identifier</th>
            <th className="py-4 px-6">Date - Time</th>
            <th className="py-4 px-6">Email Address</th>
            <th className="py-4 px-6">Actions</th>
          </tr>
        </thead>
        <tbody>
          {operators.map((operator) => (
            <tr key={operator.id} className="text-center bg-transparent">
              <td className="py-4">{operator.name}</td>
              <td className="py-4">{operator.identifier}</td>
              <td className="py-4">{operator.date}</td>
              <td className="py-4">{operator.email}</td>
              <td className="py-4">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-full mr-2 hover:bg-blue-600"
                  onClick={() => modifyOperator(operator.id)}
                >
                  Modify
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600"
                  onClick={() => removeOperator(operator.id)}
                >
                  Remove operator
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OperatorList;
