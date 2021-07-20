import React from 'react';
import {render} from '@testing-library/react';
import TickerItemChange from './index';

describe('tickerItemChange', () => {
    test('should render without errors', () => {
        const basicProps = {
            change:          '111',
            changeDirection: 'grow',
        };

        const {container} = render(<TickerItemChange{ ...basicProps }/>);

        expect(container.firstChild).toBeInTheDocument();
    });
});
