import { FaPepperHot as icon } from 'react-icons/fa';

export default {
    name: 'topping',
    title: 'Toppings',
    type: 'document',
    icon,
    fields: [
        {
            name: 'name',
            title: 'Topping name',
            type: 'string',
            description: 'Name of the topping'
        },
        {
            name: 'vegetarian',
            title: 'Vegetarian',
            type: 'boolean',
            description: 'Is topping vegetarian'
        }
    ],
    preview: {
        select: {
            name: 'name',
            vegetarian: 'vegetarian'
        },
        prepare: ({name, vegetarian}) => ({
            title: `${name} ${vegetarian ? '🌱 ' : ''}`
        })
    }
};
