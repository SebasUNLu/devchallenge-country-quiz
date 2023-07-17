'use client'

import React from 'react';
import MainDiv from '../components/MainDiv';
import Loading from '../components/loading/Loading';

const loading = () => {
  return (
    <MainDiv adventureSvg>
      <Loading text='Generating a question for you...' />
    </MainDiv>
  );
};

export default loading;