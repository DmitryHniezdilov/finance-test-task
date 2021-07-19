import React from 'react';
import {render} from '@testing-library/react';
import * as redux from 'react-redux';
import TickerList from './index';

describe('TickerList', () => {
    beforeEach(() => {
        redux.useSelector = jest.fn(() => ({tickers: []}));
    });

    afterEach(() => jest.clearAllMocks());

    test('should render without errors', () => {
        const {container} = render(<TickerList/>);

        expect(container.firstChild).toBeInTheDocument();
    });

    test('should render text if no data', () => {
        const {container} = render(<TickerList/>);
        const element = container.querySelector('[data-test="no-data-text"]');

        expect(element.innerHTML).toEqual('Please run server to give data');
    });

    test('should render text if data exists', () => {
        redux.useSelector = jest.fn(() => ({tickers: [[{ticker: 'AAPL', price: 0}]]}));
        const {container} = render(<TickerList/>);
        const element = container.querySelector('h2');

        expect(element.innerHTML).toEqual('Interested Promotions');
    });
});
