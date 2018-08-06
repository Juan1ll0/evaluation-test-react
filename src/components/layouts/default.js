import React, { Fragment } from 'react';

import Header from 'components/kit/header';
import Footer from 'components/kit/footer';
import Menu from 'components/kit/menu';

export default ({ children }) => (
  <Fragment>
    <Header />
    <Menu />
    {children}
    <Footer />
  </Fragment>
);
