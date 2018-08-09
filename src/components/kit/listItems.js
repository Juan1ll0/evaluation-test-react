import React from 'react';
import Item from 'components/kit/item';

const ListItems = ({ options, onClick, selected }) =>
  options.map(option => <Item key={option.id} item={option} onClick={onClick} selected={selected} />);

export default ListItems;
