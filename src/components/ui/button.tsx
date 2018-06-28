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
    flex?: number;
    dark?: boolean;
    disabled?: boolean;
}

export interface IState {
    hover: boolean;
}

const styles: {
    [key: string]: React.CSSProperties;
} = {
    container: {
        padding: '3px',
        backgroundColor: 'white',
        cursor: 'pointer',
        minHeight: '40px',
        fontSize: '18px',
        transition: '0.3s all',
    },
    hover_normal: {
        backgroundColor: 'lightblue',
    },
    hover_dark: {
        border: `5px solid ${colors.navy}`,
        backgroundColor: colors.white,
        color: colors.navy,
    },
    dark: {
        border: `5px solid ${colors.trans}`,
        backgroundColor: colors.navy,
        color: colors.white,
    },
    normal: {
        border: `5px solid ${colors.navy}`,
    },
    disabled_dark: {
        border: `5px solid ${colors.navy}`,
        backgroundColor: colors.white,
        color: colors.gray,
    },
    disabled_normal: {
        border: `5px solid ${colors.navy}`,
        backgroundColor: colors.white,
        color: colors.gray,
    },
};

class IndifferentButton extends React.Component<IProps, IState> {
    public readonly state = {
        hover: false,
    };

    public constructor(props) {
        super(props);

        this.getStyle = this.getStyle.bind(this);
        this.getSizeInfo = this.getSizeInfo.bind(this);
        this.getHoverStyle = this.getHoverStyle.bind(this);

        this.handleMouseIn = this.handleMouseIn.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }

    public render(): JSX.Element {
        return (
            <button
                style={{
                    ...styles.container,
                    ...this.getSizeInfo(),
                    ...this.getStyle(),
                    ...this.props.style,
                }}
                className={this.props.className}

                onMouseEnter={this.handleMouseIn}
                onMouseLeave={this.handleMouseOut}

                onClick={this.props.onClick}

                disabled={this.props.disabled}
            >
                {this.props.children}
            </button>
        );
    }

    protected getStyle(): React.CSSProperties {
        if (this.props.disabled) {
            return {
                ...this.props.dark ? styles.disabled_dark : styles.disabled_normal,
            };
        } else {
            return {
                ...this.props.dark ? styles.dark : styles.normal,
                ...this.state.hover ? this.getHoverStyle() : {},
            };
        }
    }

    protected getHoverStyle(): React.CSSProperties {
        if (this.props.dark) {
            return styles.hover_dark;
        } else {
            return styles.hover_normal;
        }
    }

    protected getSizeInfo(): React.CSSProperties {
        if (this.props.flex) {
            return {
                flex: this.props.flex,
            };
        } else {
            return {
                width: '100%',
            };
        }
    }

    protected handleMouseIn(): void {
        this.setState({
            hover: true,
        });
    }

    protected handleMouseOut(): void {
        this.setState({
            hover: false,
        });
    }
}

export default IndifferentButton;
