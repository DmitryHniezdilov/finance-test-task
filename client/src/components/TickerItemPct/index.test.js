import React from 'react';
import {render} from '@testing-library/react';
import TickerItemPct from './index';

describe('TickerItemPct', () => {
    test('should render without errors', () => {
        const basicProps = {
            changePCT:       '11',
            changeDirection: 'grow',
        };

        const {container} = render(<TickerItemPct{ ...basicProps }/>);

        expect(container.firstChild).toBeInTheDocument();
    });
});
