import React from 'react';
import Item from './Item';

const ItemList = ({ itemLists, children }) => {
  return (
    <>
      {itemLists.map((v, i) => {
        return <Item number={i + 1} key={i} />;
      })}
      {children}
    </>
  );
};

export default ItemList;
