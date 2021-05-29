import React from 'react';
import NoteListItem from './NoteListItem';
import {render, screen} from '@testing-library/react';

it('Renderes component proberly', () => {
    const note = {
        title: 'test title',
        body: 'text text text',
        createdDate: Date.now
    }

    render(<NoteListItem note={note}/>)
    expect(screen.getByTestId('noteItem')).toHaveTextContent('test title');
})


