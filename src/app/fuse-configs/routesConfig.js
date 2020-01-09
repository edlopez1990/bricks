import React from 'react';
import {Redirect} from 'react-router-dom';
import {FuseUtils} from '@fuse';
import {ExampleConfig} from 'app/main/example/ExampleConfig';

const routeConfigs = [
    ExampleConfig
];

const routes = [
    ...FuseUtils.generateRoutesFromConfigs(routeConfigs),
    {
        path     : '/',
        component: () => <Redirect to="/example"/>
    },
    {
        path     : '/ui',
        component: () => <Redirect to="/ui"/>
    }
];

export default routes;
