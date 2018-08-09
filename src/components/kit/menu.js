import React from 'react';
import ListItems from 'components/kit/listItems';

export default props => (
  <aside className="App-menu">
    <nav>
      <ul>
        <ListItems {...props} />
      </ul>
    </nav>
  </aside>
);
