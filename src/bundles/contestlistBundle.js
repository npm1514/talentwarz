import React from 'react';
import { render } from 'react-dom';
import { ContestListPage } from '../pages';

if (window)
  render(
    <ContestListPage data={window.__DATA__} />,
    document.getElementById('app')
  );
