import React from 'react';
import {render} from '@testing-library/react';
import Chart from './index';

describe('Chart', () => {
    test('should render without errors', () => {
        const basicProps = {
            data: [
                {
                    time:   '00:00',
                    amount: 132,
                },
            ],
        };

        const {container} = render(<Chart{ ...basicProps }/>);

        expect(container.firstChild).toBeInTheDocument();
    });
});
