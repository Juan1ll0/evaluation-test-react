import React from 'react';
import Modal from 'react-modal';
import { compose, withHandlers } from 'recompose';

import Header from 'components/kit/header';
import Menu from 'components/kit/menu';
import ImageViewr from 'components/kit/imageViewr';
import { setFigure } from '../../modules/tutorial/actions';

const handleChange = withHandlers({
  onChange: ({ setFigure }) => figure => {
    debugger;
    setFigure(figure);
  }
});

const TutorialModal = ({ listFigures, listColors, figure, backgroundColor, isOpen = false, onClose, onChange }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={this.closeModal}
      contentLabel="Vista modal"
      overlayClassName="App-modal-overlay"
    >
      <Header />
      <main className="App-modal-content">
        <Menu options={listFigures} onClick={onChange} selected={figure} />
        <ImageViewr figure={figure} backgroundColor={backgroundColor} />
      </main>
      <button onClick={onClose}>Skip Tutorial</button>
    </Modal>
  );
};

const decorator = compose(handleChange);
export default decorator(TutorialModal);
