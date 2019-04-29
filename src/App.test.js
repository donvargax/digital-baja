import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

window.focus = function() { }; // prevent nasty console.error that doesn't affect anything

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
