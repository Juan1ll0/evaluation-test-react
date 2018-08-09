import React from 'react';
import Img from 'react-image';

import NoAvailable from 'assets/images/not-available.svg';

const getImage = filename => (filename ? require(`assets/images/${filename}`) : null);

export default ({ figure }) => {
  const imagen = getImage(figure.image);
  return (
    <div className="App-image-viewr">
      <Img src={[imagen, NoAvailable]} />
    </div>
  );
};
