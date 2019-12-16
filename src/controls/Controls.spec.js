// Test away!

import React from 'react';
import { render, fireEvent} from '@testing-library/react';


import Dashboard from '../dashboard/Dashboard';

test('button renders closed/opened', () => {
  const { getByText } = render(<Dashboard />);
  const button = getByText(/close gate/i);
  fireEvent.click(button);
  getByText(/open gate/i);
})

test('button renders lock/unlock gate', () => {
    const { getByText } = render(<Dashboard />);
    const lockButton = getByText(/lock gate/i);
    const closeButton = getByText(/close gate/i)
    fireEvent.click(closeButton);
    fireEvent.click(lockButton)
    getByText(/unlock gate/i);
})