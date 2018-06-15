/**
 * @author WMXPY
 * @fileoverview Button
 */

import * as React from 'react';

import { colors } from '../styles/color';

export interface IProps {
    onClick?: () => void;
    style?: React.CSSProperties;
    className?: string;
}

export interface IState {
    hover: boolean;
}

const styles: {
    [key: string]: React.CSSProperties;
} = {
    container: {
        padding: '3px',
        width: '100%',
        border: '0',
        backgroundColor: 'white',
        cursor: 'pointer',
    },
    hover: {
        backgroundColor: 'red',
    },
};

class IndifferentButton extends React.Component<IProps, IState> {
    public constructor(props) {
        super(props);
        this.state = {
            hover: false,
        };

        this.handleMouseIn = this.handleMouseIn.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }

    public render(): JSX.Element {
        return (
            <button
                style={{
                    ...styles.container,
                    ...this.state.hover ? styles.hover : {},
                    ...this.props.style,
                }}
                className={this.props.className}

                onMouseEnter={this.handleMouseIn}
                onMouseLeave={this.handleMouseOut}
            >
                {this.props.children}
            </button>
        );
    }

    protected handleMouseIn() {
        this.setState({
            hover: true,
        });
    }

    protected handleMouseOut() {
        this.setState({
            hover: false,
        });
    }
}

export default IndifferentButton;
