import React from 'react';
import {render} from '@testing-library/react';
import { TestableWithTickersData as withTickersData} from './withTickersData';

describe('withTickersData', () => {
    const receiveSocketTickerMock = jest.fn();
    const disconnectSocketTickerMock = jest.fn();
    const MockComponent = () => <div/>;
    const basicProps = {
        receiveSocketTicker:    receiveSocketTickerMock,
        disconnectSocketTicker: disconnectSocketTickerMock,
    };

    afterEach(() => jest.clearAllMocks());

    test('should render without errors', () => {
        const WrappedComponent = withTickersData(MockComponent);
        const {container} = render(<WrappedComponent { ...basicProps }/>);

        expect(container).toBeInTheDocument();
    });

    test('should dispatch generalActions.receiveSocketTicker on component mounted', () => {
        const WrappedComponent = withTickersData(MockComponent);
        render(<WrappedComponent { ...basicProps }/>);

        expect(receiveSocketTickerMock).toHaveBeenCalled();
    });

    test('should dispatch generalActions.disconnectSocketTicker on component unmount', () => {
        const WrappedComponent = withTickersData(MockComponent);
        const {unmount} = render(<WrappedComponent { ...basicProps }/>);
        unmount(<WrappedComponent { ...basicProps }/>);

        expect(disconnectSocketTickerMock).toHaveBeenCalled();
    });
});
