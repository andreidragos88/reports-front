/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import Paginator from './Paginator';

describe('Paginator component', () => {
    test('render next button', () => {
        const { getByTestId } = render(<Paginator onNext={() => { }} onPrevious={() => { }} currentPage={0} totalPages={3} />);
        const button = getByTestId('next-btn');

        expect(button).toBeTruthy();
    })

    test('not render prev button', () => {
        const { queryByTestId } = render(<Paginator onNext={() => { }} onPrevious={() => { }} currentPage={0} totalPages={3} />);
        const button = queryByTestId('prev-btn');

        expect(button).toBeFalsy();
    })
})

