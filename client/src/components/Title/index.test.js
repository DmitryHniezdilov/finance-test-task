import React from 'react';
import {render} from '@testing-library/react';
import Title from './index';

describe('title', () => {
    test('should render without errors', () => {
        const {container} = render(<Title/>);

        expect(container.firstChild).toBeInTheDocument();
    });
});
