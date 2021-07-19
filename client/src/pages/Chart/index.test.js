import React from 'react';
import {render} from '@testing-library/react';
import Chart from './index';

jest.mock('../../components/PageLayout', () => () => <div>pageLayout</div>);

describe('Chart', () => {
    test('should render without errors', () => {
        const {container} = render(<Chart/>);

        expect(container.firstChild).toBeInTheDocument();
    });
});
