// Deps
import { connect } from 'react-redux';

// Modules
import { fetchTodos, getIsLoaded, getTodos, getError } from 'modules/todos';

// Screen
import Page1Screen from 'components/pages/page1';

const mapStateToProps = (state, props) => {
  return {
    isLoaded: getIsLoaded(state),
    todos: getTodos(state, props),
    error: getError(state)
  };
};

const mapDispatchToProps = {
  fetchTodos: fetchTodos.bind(this)
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page1Screen);
