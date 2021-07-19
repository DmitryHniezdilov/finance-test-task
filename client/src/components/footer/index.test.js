import React from 'react';
import {render} from '@testing-library/react';
import Footer from './index';

describe('footer', () => {
    test('should render without errors', () => {
        const {container} = render(<Footer/>);

        expect(container.firstChild).toBeInTheDocument();
    });
});
