import React from 'react';
import {render} from '@testing-library/react';
import { Typography } from '@material-ui/core';

jest.mock('../../components/PageLayout', () => () => <div>pageLayout</div>);

describe('NotFound', () => {
    test('should render without errors', () => {
        const {container} = render(<Typography/>);

        expect(container.firstChild).toBeInTheDocument();
    });
});
