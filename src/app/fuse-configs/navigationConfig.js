const navigationConfig = [
    {
        'id'      : 'dashboard',
        'title'   : '',
        'type'    : 'group',
        'icon'    : 'apps',
        'children': [
            {
                'id'   : 'dashboard',
                'title': 'Dashboard',
                'type' : 'item',
                'icon' : 'web',
                'url'  : '/example'
            },
            {
                'id'   : 'clients',
                'title': 'Clients',
                'type' : 'item',
                'icon' : 'assignment_ind',
                'url'  : '/clients'
            },
            {
                'id'   : 'employees',
                'title': 'Employees',
                'type' : 'item',
                'icon' : 'group',
                'url'  : '/employees'
            },
            {
                'id'   : 'playrool Profiles',
                'title': 'Playroll Profiles',
                'type' : 'item',
                'icon' : 'receipt',
                'url'  : '/playroolprofiles'
            },
            {
                'id'   : 'ui',
                'title': 'Ui Element',
                'type' : 'item',
                'icon' : 'web_asset',
                'url'  : '/ui'
            }
        ]
    },
    {
        'id'      : 'tracking',
        'title'   : 'TRACKING',
        'type'    : 'group',
        'icon'    : 'apps',
        'children': [
            {
                'id'   : 'timesheep',
                'title': 'Time sheep',
                'type' : 'item',
                'icon' : 'date_range',
                'url'  : '/timesheep'
            },
            {
                'id'   : 'managements',
                'title': 'Managements',
                'type' : 'item',
                'icon' : 'assignment',
                'url'  : '/managements'
            }
        ]
    }
];

export default navigationConfig;
