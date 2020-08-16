export default {
    items: [
        {
            id: 'navigation',
            title: 'Home',
            type: 'group',
            icon: 'icon-navigation',
            children: [
                {
                    id: 'dashboard',
                    title: 'Dashboard',
                    type: 'item',
                    url: '/dashboard/default',
                    icon: 'feather icon-home',
                }
            ]
        },
        {
            id: 'ui-forms',
            title: 'Compare',
            type: 'group',
            icon: 'icon-group',
            children: [
                {
                    id: 'form-basic',
                    title: 'Compare Docs',
                    type: 'item',
                    url: '/forms/compare-docs',
                    icon: 'feather icon-file-text'
                }
            ]
        },
        {
            id: 'chart-maps',
            title: 'History',
            type: 'group',
            icon: 'icon-charts',
            children: [
                {
                    id: 'charts',
                    title: 'History',
                    type: 'item',
                    icon: 'feather icon-rewind',
                    url: '/forms/history'
                },
                {
                    id: 'users',
                    title: 'Users',
                    type: 'item',
                    icon: 'feather icon-user',
                    url: '/forms/users'
                }
            ]
        },
    ]
}