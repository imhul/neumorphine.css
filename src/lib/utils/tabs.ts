import Shapes from '$lib/components/Shapes/index.svelte';
import Inputs from '$lib/components/Inputs/index.svelte';
import Buttons from '$lib/components/Buttons/index.svelte';

interface Tab {
    id: number;
    title: string;
    content: any;
}

const tabs: Tab[] = [
    {
        id: 0,
        title: 'Shapes',
        content: Shapes
    },
    {
        id: 1,
        title: 'Inputs',
        content: Inputs
    },
    {
        id: 2,
        title: 'Buttons',
        content: Buttons
    }
];

export default tabs;
