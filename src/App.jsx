import { CircularProgress, useMediaQuery } from '@mui/material';
import React from 'react';
import Header from './components/header/Header';
import Sections from './components/sections/Sections';

export default function App() {
  const media = useMediaQuery('(max-width: 750px)');
  return (
    <>
      {/* Loading */}
      <div className="loading">
        <CircularProgress className='loading__progress' />
      </div>

      <Header media={media} />
      <Sections media={media} />
    </>
  )
}
