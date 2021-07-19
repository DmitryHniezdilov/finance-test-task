import React from 'react';
import {fireEvent, render} from '@testing-library/react';
import TickerItem from './index';
import {BrowserRouter} from 'react-router-dom';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useRouteMatch: () => ({ params: {ticker: 'Apple'} }),
    useHistory:    () =>({ push: mockHistoryPush }),
}));

describe('tickerItem', () => {
    const mockTicker = 'AAPL';

    const basicProps = {
        ticker:          mockTicker,
        changeDirection: 'grow',
    };

    test('should render without errors', () => {
        const {container} = render(<TickerItem { ...basicProps }/>);

        expect(container.firstChild).toBeInTheDocument();
    });

    test('should call history.push on TableRow click', () => {
        const {container} = render(<BrowserRouter><TickerItem { ...basicProps }/></BrowserRouter>);

        const element = container.querySelector('[role="row"]');
        fireEvent.click(element);

        expect(mockHistoryPush).toHaveBeenCalledWith(`/${mockTicker}`);
    });
});
