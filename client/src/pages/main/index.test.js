import React from 'react';
import {render} from '@testing-library/react';
import Main from './index';

jest.mock('../../components/pageLayout', () => () => <div>pageLayout</div>);

describe('main', () => {
    test('should render without errors', () => {
        const {container} = render(<Main/>);

        expect(container.firstChild).toBeInTheDocument();
    });
});
