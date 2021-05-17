import React from 'react';
import { render } from 'react-dom';
import { StandingsPage } from '../pages';

if (window)
  render(
    <StandingsPage data={window.__DATA__} />,
    document.getElementById('app')
  );
