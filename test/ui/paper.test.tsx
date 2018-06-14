/**
 * @author WMXPY
 * @fileoverview Paper test
 */

import { expect } from 'code';
import { configure, shallow, ShallowWrapper } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';

import Paper from '../../src/components/ui/paper';

configure({ adapter: new Adapter() });

describe('test render paper', () => {

    let renderedPaper: ShallowWrapper;

    beforeEach(() => {
        renderedPaper = shallow(
            <Paper title="paper">
                Paper example
            </Paper>,
        );
    });

    it('test medium shall have correct style', () => {
        expect((renderedPaper.prop('style') as any).padding).to.be.equal('8px');
    });

    it('test medium shall have correct display', () => {
        expect(renderedPaper.text()).to.be.equal('paperPaper example');
    });

});
