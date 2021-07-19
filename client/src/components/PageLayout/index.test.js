import React from 'react';
import {render} from '@testing-library/react';
import PageLayout from './index';
import {BrowserRouter} from 'react-router-dom';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
}));

describe('pageLayout', () => {
    test('should render without errors', () => {
        const {container} = render(<BrowserRouter><PageLayout/></BrowserRouter>);

        expect(container.firstChild).toBeInTheDocument();
    });
});
