import React from 'react';
import { compose } from 'recompose';

import ModalHandlers from 'components/hoc/modals';

import TutorialModal from 'components/context/modals/tutorial';

const MainScreen = ({ isOpen, onCloseModal, showModal }) => (
  <main className="App-center-screen">
    <button className="App-start-button" onClick={showModal}>
      Start
    </button>
    <TutorialModal isOpen={isOpen} onClose={onCloseModal} />
  </main>
);

const decorator = compose(ModalHandlers);
export default decorator(MainScreen);
