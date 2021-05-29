import React from 'react';
import ReactDOM from 'react-dom';
import LeftPanel from './LeftPanel';

it('Renderes component proberly', () => {
    const div = document.createElement('div')
    ReactDOM.render(<LeftPanel />, div)
})