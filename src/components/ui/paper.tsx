/**
 * @author WMXPY
 * @fileoverview Paper
 */

import * as React from 'react';

import { colors } from '../styles/color';

export interface IProps {
    title: string;
    style?: React.CSSProperties;
    tight?: boolean;
}

const styles: {
    [key: string]: React.CSSProperties;
} = {
    paper: {
        padding: '8px',
        boxShadow: `2px 2px 5px -1px ${colors.navyTrans}`,
        border: `2px solid ${colors.navy}`,
    },
    title: {
        position: 'relative',
        paddingBottom: '15px',
        userSelect: 'none',
        cursor: 'default',
        fontWeight: 'bolder',
        fontSize: '25px',
    },
    titleAfter: {
        position: 'absolute',
        left: '0',
        bottom: '5px',
        width: '32px',
        height: '6px',
        backgroundColor: colors.navy,
    },
};

class IndifferentContainer extends React.Component<IProps, {}> {
    public constructor(props) {
        super(props);
    }

    public render(): JSX.Element {
        return (
            <div style={{
                ...styles.paper,
                ...this.props.tight ? { margin: '0' } : {
                    margin: '3px',
                    marginTop: '12px',
                    marginBottom: '12px',
                },
                ...this.props.style,
            }}>
                <div style={styles.title}>
                    {this.props.title}
                    <div style={styles.titleAfter}>
                    </div>
                </div>
                {this.props.children}
            </div>
        );
    }
}

export default IndifferentContainer;
