import type { Header } from "../types";

export const NAV_ITEM_LEFT: Header[] = [
    {
        id: 1,
        name: "MARKETS",
        url: '/markets'
    },
    {
        id: 2,
        name: 'WATCHLIST',
        url: '/watchlist',
    },
    {
        id: 3,
        name: 'INFO',
        url: '/info',
    },
    {
        id: 4,
        name: 'FEDBACK',
        url: '/feedback',
    },
]

export const NAV_ITEM_RIGHT: Header[] = [
    {
        id: 5,
        name: "DOCS",
        url: '/docs'
    },
    {
        id: 6,
        name: 'PRICING',
        url: '/pricing',
    },
    {
        id: 7,
        name: 'FOR ME',
        url: '/for-me',
    }
];

export const allNav = [...NAV_ITEM_LEFT, ...NAV_ITEM_RIGHT];


