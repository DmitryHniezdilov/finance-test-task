import React from 'react';
import {render} from '@testing-library/react';
import TickerItemPct from './index';

describe('tickerItemPct', () => {
    const basicProps = {
        changePCT:       '11',
        changeDirection: 'grow',
    };

    test('should render without errors', () => {
        const {container} = render(<TickerItemPct{ ...basicProps }/>);

        expect(container.firstChild).toBeInTheDocument();
    });

    test('should render ExpandLessIcon if changeDirection equals grow', () => {
        const {container} = render(<TickerItemPct{ ...basicProps }/>);

        expect(container.querySelector('[data-test="icon-grow"]')).toBeInTheDocument();
    });

    test('should render ExpandMoreIcon if changeDirection equals drop', () => {
        // const props = {
        //     ...basicProps,
        //     changeDirection: 'drop',
        // };
        const {container} = render(<TickerItemPct{ ...basicProps } changeDirection = 'drop'/>);

        expect(container.querySelector('[data-test="icon-drop"]')).toBeInTheDocument();
    });
});
