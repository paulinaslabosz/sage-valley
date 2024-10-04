import React from 'react';
import Header from './Sections/Header';
import Cabins from './Sections/Cabins';
import Content from './Sections/Content';
import Icons from './Sections/Icons';

function Homepage() {
  return (
    <>
      <Header />
      <Cabins />
      <Content />
      <Icons />
    </>
  );
}

export default Homepage;
