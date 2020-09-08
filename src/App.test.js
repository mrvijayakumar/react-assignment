import '@testing-library/jest-dom'
import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import App from './App';


test('render correctly' , () => {
    const { asFragment } = render(<App />);
    expect(asFragment( <App />)).toMatchSnapshot();
});