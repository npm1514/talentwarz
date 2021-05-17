import React from 'react';
import { render } from 'react-dom';
import { SubmissionPage } from '../pages';

if (window)
  render(
    <SubmissionPage data={window.__DATA__} />,
    document.getElementById('app')
  );
