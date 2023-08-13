import React, { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [conditions, setConditions] = useState([{ key: '', operator: '', value: '' }]);

  const handleConditionChange = (index, key, operator, value) => {
    const updatedConditions = [...conditions];
    updatedConditions[index] = { key, operator, value };
    setConditions(updatedConditions);
  };

  const addCondition = () => {
    setConditions([...conditions, { key: '', operator: '', value: '' }]);
  };

  const removeCondition = (index) => {
    const updatedConditions = [...conditions];
    updatedConditions.splice(index, 1);
    setConditions(updatedConditions);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const query = conditions.map((condition) => `${condition.key} ${condition.operator} ${condition.value}`).join(' ');
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Search Conditions</h3>
      {conditions.map((condition, index) => (
        <div key={index}>
          <input
            type="text"
            placeholder="Condition Key"
            value={condition.key}
            onChange={(e) => handleConditionChange(index, e.target.value, condition.operator, condition.value)}
          />
          <select
            value={condition.operator}
            onChange={(e) => handleConditionChange(index, condition.key, e.target.value, condition.value)}
          >
            <option value="">Select Operator</option>
            <option value="AND">AND</option>
            <option value="OR">OR</option>
          </select>
          <input
            type="text"
            placeholder="Condition Value"
            value={condition.value}
            onChange={(e) => handleConditionChange(index, condition.key, condition.operator, e.target.value)}
          />
          <button type="button" onClick={() => removeCondition(index)}>Remove</button>
        </div>
      ))}
      <button type="button" onClick={addCondition}>Add Condition</button>
      <button type="submit">Search</button>
    </form>
  );
};


export default SearchForm;
// Rest of the code remains the same...
