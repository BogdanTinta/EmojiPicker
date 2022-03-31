import { activities } from '../emojis/Activities'
import { flags } from '../emojis/Flags'
import { food } from '../emojis/Food'
import { nature } from '../emojis/Nature'
import { objects } from '../emojis/Objects'
import { people } from '../emojis/People'
import { smileys } from '../emojis/Smileys'
import { symbols } from '../emojis/Symbols'
import { travel } from '../emojis/Travel'

export const emojis = [
    {
        title: 'Smileys & Emotions',
        data: [{ list: smileys }]
    },
    {
        title: 'People & Body',
        data: [{ list: people, }]
    },
    {
        title: 'Animals & Nature',
        data: [{ list: nature, }]
    },
    {
        title: 'Food & Drinks',
        data: [{ list: food, }]
    },
    {
        title: 'Objects',
        data: [{ list: objects, }]
    },
    {
        title: 'Activities',
        data: [{ list: activities, }]
    },
    {
        title: 'Travel & Places',
        data: [{ list: travel, }]
    },
    {
        title: 'Symbols',
        data: [{ list: symbols, }]
    },
    {
        title: 'Flags',
        data: [{ list: flags, }]
    },
]

export const emojiCategories = [
    {
        index: 0,
        image: require('../../assets/images/category_list/smileys.png'),
    },
    {
        index: 1,
        image: require('../../assets/images/category_list/people.png'),
    },
    {
        index: 2,
        image: require('../../assets/images/category_list/animals.png'),
    },
    {
        index: 3,
        image: require('../../assets/images/category_list/food.png'),
    },
    {
        index: 4,
        image: require('../../assets/images/category_list/objects.png'),
    },
    {
        index: 5,
        image: require('../../assets/images/category_list/activities.png'),
    },
    {
        index: 6,
        image: require('../../assets/images/category_list/travel.png'),
    },
    {
        index: 7,
        image: require('../../assets/images/category_list/symbols.png'),
    },
    {
        index: 8,
        image: require('../../assets/images/category_list/flags.png'),
    },
]
