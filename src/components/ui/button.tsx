/**
 * @author WMXPY
 * @fileoverview Button
 */

import * as React from 'react';

import { colors } from '../styles/color';

export interface IProps {
    onClick?: () => void;
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

class IndifferentButton extends React.Component<IProps, IState> {
    public constructor(props) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <button
                style={styles.container}
            >
                {this.props.children}
            </button>
        );
    }
}

export default IndifferentButton;
