import React from 'react';
import { render } from 'react-dom';
import { ContestPage } from '../pages';

if (window)
  render(
    <ContestPage data={window.__DATA__} />,
    document.getElementById('app')
  );
