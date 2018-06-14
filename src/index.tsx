/**
 * @overview generated by ghoti-cli
 * @fileoverview Entry
 */

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import Hello from './hello';

declare const module: any;
declare const require: any;

const render = (App: any) => {
    ReactDOM.render(
        <AppContainer>
            <App />
        </AppContainer>,
        document.getElementById('container'));
};

render(Hello);
if (module.hot) {
    module.hot.accept('./hello', () => {
        render(require('./hello').default);
    });
}
