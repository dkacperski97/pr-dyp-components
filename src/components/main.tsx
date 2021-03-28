import React from 'react';
import Component from '../types/component';
import { useDrop } from 'react-dnd'
import Props from '../types/props';

const Main: React.FC<Props> = ({ children, setChild }) => {
    const [, drop] = useDrop(() => ({
        accept: 'component',
        drop: (item: any) => setChild(item.id, 0)
    }))

    return (
        <div style={{"height": "40px"}} ref={drop}>
            {children}
        </div>
    )
}

const main: Component = {
    id: 'main',
    options: [],
    component: Main,
    template: ''
}

export default main;
