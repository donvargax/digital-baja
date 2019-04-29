import React from 'react';
import { render } from 'react-testing-library'

import { LabCard } from './LabCard';

it('renders without crashing', () => {
    const { asFragment } = render(
        <LabCard
            title="Lorem Ipsum 1"
            rating={4}
            price={49.99}
            distance={7.23}
            description="Description, Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
        />
    )
    expect(asFragment()).toMatchSnapshot()
});
