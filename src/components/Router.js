
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Chat from '../pages/Chat';

const Mails = lazy(() => import("../pages/Mails"));

export default () => (
    <BrowserRouter>
        <Switch >
            <Suspense fallback={<div>Carregando...</div>}>
                <Route path={'/'} component={Home} exact={true} />
                <Route path={'/mails'} component={Mails} />
                <Route path={'/chat'} component={Chat} />
            </Suspense>
        </Switch>
    </BrowserRouter>
)