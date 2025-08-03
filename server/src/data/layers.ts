import { v4 as uuid } from 'uuid';

export interface Layer {
    id: string;
    name: string;
    visible: boolean;
    color?: string;
    lastModified: Date;
}

export let layers: Layer[] = [
    {
        id: uuid(),
        name: 'Walls',
        visible: true,
        color: '#FF0000',
        lastModified: new Date(),
    },
    {
        id: uuid(),
        name: 'Doors',
        visible: false,
        color: '#00FF00',
        lastModified: new Date(),
    },
];
