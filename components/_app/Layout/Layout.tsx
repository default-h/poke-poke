import React, { ReactNode } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

interface Props {
  children?: ReactNode;
  // any props that come into the component
}

const Layout = ({ children, ...props }: Props) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
