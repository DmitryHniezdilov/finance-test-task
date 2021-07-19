import React from 'react';
import {render} from '@testing-library/react';
import Header from './index';
import {BrowserRouter} from 'react-router-dom';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
}));

describe('header', () => {
    test('should render without errors', () => {
        const {container} = render(<BrowserRouter><Header/></BrowserRouter>);

        expect(container.firstChild).toBeInTheDocument();
    });
});
