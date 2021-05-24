import React from 'react';
import LineItem from './LineItem';
import filterLines from './utils/filterLines';

const LineItems = ({data}) => {
  if (!data || !Array.isArray(data)) return null;
  const filteredLines = filterLines(data);
  return (
    filteredLines.map((item, i) => (
      <LineItem key={i} item={item} />
    ))
  );
};

export default LineItems;
