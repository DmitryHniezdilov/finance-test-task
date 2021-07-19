import React from 'react';
import {render} from '@testing-library/react';
import * as redux from 'react-redux';
import TickerChart from './index';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useRouteMatch: () => ({ params: {ticker: 'Apple'} }),
}));

describe('TickerChart', () => {
    beforeEach(() => {
        redux.useSelector = jest.fn(() => ({tickers: []}));
    });

    afterEach(() => jest.clearAllMocks());

    test('should render without errors', () => {
        const {container} = render(<TickerChart/>);

        expect(container.firstChild).toBeInTheDocument();
    });
});
