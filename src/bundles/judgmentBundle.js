import React from 'react';
import { render } from 'react-dom';
import { JudgmentPage } from '../pages';

if (window)
  render(
    <JudgmentPage data={window.__DATA__} />,
    document.getElementById('app')
  );
