/**
 * @author WMXPY
 * @fileoverview Container
 */

import * as React from 'react';

import { colors } from '../styles/color';

export interface IProps {
}

export interface IState {
}

const styles: {
    [key: string]: React.CSSProperties;
} = {
    container: {
        padding: '3px',
        width: '100%',
    },
};

class IndifferentContainer extends React.Component<IProps, IState> {
    public constructor(props) {
        super(props);
    }

    public render() {
        return (
            <div style={styles.container}>
                {this.props.children}
            </div>
        );
    }
}

export default IndifferentContainer;
