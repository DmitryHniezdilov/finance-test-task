import React from 'react';
import {render} from '@testing-library/react';
import TickerItemChange from './index';

describe('tickerItemChange', () => {
    const basicProps = {
        change:          '111',
        changeDirection: 'grow',
    };

    test('should render without errors', () => {
        const {container} = render(<TickerItemChange{ ...basicProps }/>);

        expect(container.firstChild).toBeInTheDocument();
    });

    test('should render in text value grow symbol if changeDirection equals grow', () => {
        const { getByText } = render(<TickerItemChange{ ...basicProps }/>);
        const changeDirectionValue =  getByText(/[\+]/i);

        expect(changeDirectionValue).toBeInTheDocument();
    });

    test('should render in text value drop symbol if changeDirection equals drop', () => {
        const { getByText } = render(<TickerItemChange{ ...basicProps } changeDirection = 'drop'/>);
        const changeDirectionValue =  getByText(/[\-]/i);

        expect(changeDirectionValue).toBeInTheDocument();
    });
});
