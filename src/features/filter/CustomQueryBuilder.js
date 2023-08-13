import React from 'react';
import { QueryBuilder } from 'react-querybuilder';

const CustomQueryBuilder = ({ onSearch }) => {
  const handleQueryChange = (query) => {
    // Pass the query object to the search handler
    onSearch(query);
  };

  return (
    <QueryBuilder
      fields={[
        { name: 'river', label: 'River' },
        { name: 'elevation', label: 'Elevation' },
        { name: 'hospital', label: 'Hospital' },
        { name: 'middle town', label: 'Middle Town' },
      ]}
      onQueryChange={handleQueryChange}
    />
  );
};

export default CustomQueryBuilder;