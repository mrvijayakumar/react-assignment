import '@testing-library/jest-dom'
import React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import PreLoader from './index';

test('render correctly' , () => {
    render(<PreLoader />)
})