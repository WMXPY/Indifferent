/**
 * @author WMXPY
 * @fileoverview Container
 */

import * as React from 'react';

import { colors } from '../styles/color';

export interface IProps {
    row?: boolean;
    col?: boolean;
}

const styles: {
    [key: string]: React.CSSProperties;
} = {
    container: {
        width: '100%',
        display: 'flex',
    },
};

class IndifferentContainer extends React.Component<IProps, {}> {
    public constructor(props) {
        super(props);

        this.getDirection = this.getDirection.bind(this);
    }

    public render(): JSX.Element {
        return (
            <div style={{
                ...styles.container,
                ...this.getDirection(),
            }}>
                {this.props.children}
            </div>
        );
    }

    protected getDirection(): React.CSSProperties {
        if (this.props.row) {
            return {
                flexDirection: 'row',
            };
        } else if (this.props.col) {
            return {
                flexDirection: 'column',
            };
        } else {
            return {

            };
        }
    }
}

export default IndifferentContainer;
