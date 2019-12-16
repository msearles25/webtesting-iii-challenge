// Test away!

import React from 'react';
import { render } from '@testing-library/react';

import Display from './Display';

test('Correct is rendered base on locked state', () => {
    const { getByTestId, rerender} = render(<Display locked/>);
    getByTestId('locked')

    rerender(<Display locked={true}/>)
    getByTestId('locked')
})

test('Correct is rendered base on closed state', () => {
    const { getByTestId, rerender} = render(<Display closed/>);
    getByTestId('closed')

    rerender(<Display closed={true}/>)
    getByTestId('closed')
})

