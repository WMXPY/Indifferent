/**
 * @author WMXPY
 * @fileoverview Container
 */

import * as React from 'react';

import { colors } from '../styles/color';

const styles: {
    [key: string]: React.CSSProperties;
} = {
    container: {
        padding: '3px',
        width: '100%',
    },
};

class IndifferentContainer extends React.Component<{}, {}> {
    public constructor(props) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div style={styles.container}>
                {this.props.children}
            </div>
        );
    }
}

export default IndifferentContainer;
