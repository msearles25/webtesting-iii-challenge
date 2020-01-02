// Test away

import React from 'react';
import { render } from '@testing-library/react';

import Display from '../display/Display';
import Controls from '../controls/Controls';

it('Renders display component', () => {
   render(<Display />)
})

it('Renders controls component', () => {render(<Controls />)
    render(<Controls />)
})
