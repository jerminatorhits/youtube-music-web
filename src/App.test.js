import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
const sum = (a, b) => {
	return a + b;
}

it('renders without crashing', () => {
  shallow(<App />);
  // const div = document.createElement('div');
  // ReactDOM.render(<App />, div);
  // ReactDOM.unmountComponentAtNode(div);
});

xit('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});