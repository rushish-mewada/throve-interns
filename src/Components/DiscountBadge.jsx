import React from 'react';

const DiscountBadge = ({ value, isNew }) => {
  return (
    <div className={`discount ${isNew ? 'new' : ''}`}>
      {isNew ? 'New' : `-${value}%`}
    </div>
  );
};

export default DiscountBadge;