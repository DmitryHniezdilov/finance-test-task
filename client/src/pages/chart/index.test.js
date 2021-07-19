import React from 'react';
import {render} from '@testing-library/react';
import Chart from './index';

jest.mock('../../components/pageLayout', () => () => <div>pageLayout</div>);

describe('chart', () => {
    test('should render without errors', () => {
        const {container} = render(<Chart/>);

        expect(container.firstChild).toBeInTheDocument();
    });
});
