import {
    Home,
    Box,
    DollarSign,
    Tag,
    Clipboard,
    Camera,
    AlignLeft,
    UserPlus,
    Users,
    Chrome,
    BarChart, Settings, Archive, LogIn
} from 'react-feather';

export const MENUITEMS = [
    {
        path: '/dashboard', title: 'Dashboard', icon: Home, type: 'link', badgeType: 'primary', active: false
    },
    {
        title: 'Sales', icon: DollarSign, type: 'sub', active: false, children: [
            { path: '/sales/transactions', title: 'Transactions', type: 'link' },
        ]
    },
    {
        title: 'Media', path: '/media', icon: Camera, type: 'link', active: false
    },
    {
        title: 'Clients', icon: UserPlus, type: 'sub', active: false, children: [
            { path: '/clients/list-clients', title: 'Clients List', type: 'link' },
            { path: '/clients/create-clients', title: 'Create Clients', type: 'link' },
        ]
    },
    {
        title: 'Containers', icon: Users, type: 'sub', active: false, children: [
            { path: '/containers/list_containers', title: 'Container List', type: 'link' },
            { path: '/containers/create-containers', title: 'Create Container', type: 'link' },
        ]
    },
    {
        title: 'Localization', icon: Chrome, type: 'sub', children: [
            { path: '/localization/transactions', title: 'Translations', type: 'link' },
            { path: '/localization/currency-rates', title: 'Currency Rates', type: 'link' },
            { path: '/localization/taxes', title: 'Taxes', type: 'link' }
        ]
    },
    {
        title: 'Reports', path: '/reports/report', icon: BarChart, type: 'link', active: false
    },
    {
        title: 'Settings', icon: Settings, type: 'sub', children: [
            { path: '/settings/profile', title: 'Profile', type: 'link' },
        ]
    },
    {
        title: 'Invoice', path: '/invoice', icon: Archive, type: 'link', active: false
    },
    {
        title: 'Login', path: '/auth/login', icon: LogIn, type: 'link', active: false
    }
]
