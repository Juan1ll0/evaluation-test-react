import { compose, withState, withHandlers, branch, renderNothing } from 'recompose';
import { isFunction } from 'lodash';

const handleVisibility = withState('isOpen', 'setShowModal', false);
const handleModalData = withState('modalData', 'setModalData', {});

const handlers = withHandlers({
  showModal: ({ setShowModal, setModalData }) => item => {
    setModalData(item);
    setShowModal(true);
  },
  hideModal: ({ setShowModal }) => e => {
    setShowModal(false);
  },
  onCloseModal: ({ setShowModal }) => callback => {
    if (isFunction(callback)) callback();
    setShowModal(false);
  }
});

export default compose(
  handleVisibility,
  handleModalData,
  handlers
);
