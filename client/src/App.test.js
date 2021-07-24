import React from 'react';
import {render} from '@testing-library/react';
import App from './app';
import * as generalActions from './redux/actions/general';

jest.mock('./Router', () => () => <div>Router</div>);
const mockDispatch = jest.fn(fn => fn);
jest.mock('react-redux', () => ({
    useDispatch: () => mockDispatch
}));

describe('app', () => {
    test('should render without errors', () => {
        const {container} = render(<App/>);

        expect(container.firstChild).toBeInTheDocument();
    });

    test('should dispatch generalActions.receiveSocketTicker on component mounted', () => {
        const mockAction = jest.fn();
        generalActions.receiveSocketTicker = mockAction;
        render(<App/>);

        expect(mockDispatch).toHaveBeenCalled();
        expect(mockAction).toHaveBeenCalled();
    });

    test('should dispatch generalActions.disconnectSocketTicker on component unmount', () => {
        const mockAction = jest.fn();
        generalActions.disconnectSocketTicker = mockAction;
        const {unmount} = render(<App/>);
        unmount(<App/>);

        expect(mockDispatch).toHaveBeenCalled();
        expect(mockAction).toHaveBeenCalled();
    });
});