import Example from './Example';
import Ui from './elementsui/Ui';
import Pageone from './elementsui/Pageone';

export const ExampleConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/example',
            component: Example
        },
        {
            path     : '/ui',
            component: Ui
        },
        {
            path     : '/pageone',
            component: Pageone
        }
    ]
};

/**
 * Lazy load Example
 */
/*
import React from 'react';

export const ExampleConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/example',
            component: React.lazy(() => import('./Example'))
        }
    ]
};
*/
