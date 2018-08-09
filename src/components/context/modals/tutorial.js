// Deps
import { connect } from 'react-redux';

// Modules
import {
  setFigure,
  setColor,
  cleanSelection,
  getListFigures,
  getListColors,
  getSelectedFigure,
  getSelectedColor
} from 'modules/tutorial';

// Screen
import TutorialModal from 'components/modals/tutorial';

const mapStateToProps = (state, props) => {
  return {
    listFigures: getListFigures(state),
    listColors: getListColors(state),
    backgroundColor: getSelectedColor(state),
    figure: getSelectedFigure(state)
  };
};

const mapDispatchToProps = {
  setFigure: setFigure.bind(this),
  setColor: setColor.bind(this),
  cleanSelection: cleanSelection.bind(this)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TutorialModal);
