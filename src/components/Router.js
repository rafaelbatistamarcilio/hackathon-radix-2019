
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';

const Mails = lazy(() => import("../pages/Mails"));
const Chat = lazy(() => import("../pages/Chat"));
const Scanner = lazy(() => import("../pages/Scanner"));

export default () => (
    <BrowserRouter>
        <Switch >
            <Suspense fallback={<div>Carregando...</div>}>
                <Route path={'/'} component={Home} exact={true} />
                <Route path={'/mails'} component={Mails} />
                <Route path={'/chat'} component={Chat} />
                <Route path={'/scan'} component={Scanner} />
            </Suspense>
        </Switch>
    </BrowserRouter>
)