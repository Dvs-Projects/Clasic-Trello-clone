import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import App from './App';

describe('<App /> Test', () => {
  const wrapper = shallow(<App />);
  test('Should take snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
