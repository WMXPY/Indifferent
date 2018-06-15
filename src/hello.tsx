/**
 * @overview generated by ghoti-cli
 * @fileoverview Router
 */

import * as React from 'react';
import * as Components from './components/import';

class Hello extends React.Component<{}, {}> {
    public constructor(props) {
        super(props);
    }

    public render() {
        return (
            <React.Fragment>
                <Components.Container>
                    Container Exmaple
                </Components.Container>
                <Components.Paper title="paper">
                    Paper example
                    <Components.Button>
                        123
                    </Components.Button>
                </Components.Paper >
            </React.Fragment>
        );
    }
}

export default Hello;
