/**
 * @author WMXPY
 * @fileoverview Container test
 */

import { expect } from 'code';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';

import Container from '../../src/components/ui/container';

configure({ adapter: new Adapter() });

describe('test render paper', () => {

    let renderedContainer: ShallowWrapper;

    beforeEach(() => {
        renderedContainer = shallow(
            <Container>
                Continer example
            </Container>,
        );
    });

    it('test medium shall have correct style', () => {
        expect((renderedContainer.prop('style') as any).padding).to.be.equal('3px');
    });

    it('test medium shall have correct display', () => {
        expect(renderedContainer.text()).to.be.equal('Continer example');
    });

});
