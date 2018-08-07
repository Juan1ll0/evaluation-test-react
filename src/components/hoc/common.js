import { branch, renderComponent } from 'recompose';

import Spinner from 'components/kit/spinner';

export const waitForData = branch(props => props.isLoaded === false, renderComponent(Spinner));
