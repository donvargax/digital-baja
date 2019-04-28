import React from 'react';
import { render } from 'react-testing-library'

import { Toolkit } from "storm-react-diagrams"

import { BracketNodeModel } from './BracketNodeModel';
import { BracketNodeWidget } from './BracketNodeWidget'

Toolkit.TESTING = true;
window.focus = function() { };

it('renders correctly', () => {
    console.log(process.env.NODE_ENV)
    const nodeModel = new BracketNodeModel()
    const { asFragment } = render(<BracketNodeWidget node={nodeModel} />)
    expect(asFragment()).toMatchSnapshot()
});
