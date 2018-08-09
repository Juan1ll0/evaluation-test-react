import React from 'react';
import { compose, withHandlers, withProps } from 'recompose';
import classNames from 'classnames';

const styles = withProps(({ item, selected }) => ({
  itemClassNames: classNames({
    'App-list-item': true,
    'App-list-item-highlight': item.id === selected.id
  })
}));

const handleClick = withHandlers({
  onItemClick: ({ onClick, item }) => e => {
    e.preventDefault();
    onClick(item);
  }
});

const Item = ({ item, onItemClick, selected, itemClassNames }) => (
  <li className={itemClassNames}>
    <a href="javascript(0);" onClick={onItemClick}>
      {item.label}
    </a>
  </li>
);

const decorator = compose(
  handleClick,
  styles
);
export default decorator(Item);
