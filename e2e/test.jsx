import React from 'react';
import ReactDOM from 'react-dom';
import draggable from '@telerik/kendo-react-draggable';
import { withRoot } from 'e2e-utils';
import * as user from './interaction';

class Component extends React.Component {
    static propTypes = {
        pageX: React.PropTypes.number,
        pageY: React.PropTypes.number,
        pressed: React.PropTypes.bool,
        stuff: React.PropTypes.string
    };

    render() {
        return (<div className={this.props.pressed ? "pressed" : ""}>
            <div className={"page-x"}>PageX: {this.props.pageX}</div>
            <div className={"page-y"}>PageY: {this.props.pageY}</div>
        </div>);
    }
}

const DraggableComponent = draggable(Component);

describe('DraggableComponent', withRoot(root => {
    let component;

    beforeEach(() => {
        ReactDOM.render(<DraggableComponent />, root[0]);
        component = root.children().eq(0);
    });

    it('does not have a pressed class by default', () => {
        component.should.not.have.class("pressed");
    });

    it('adds `pressed` when tapped', () => {
        user.mousedown(component[0], 100, 100);
        component.should.have.class("pressed");
        user.mouseup(component[0], 100, 100);
    });

    it('receives receive pageX/pageY props', () => {
        user.mousedown(component[0], 100, 100);
        user.mousemove(component[0], 150, 120);
        component.find(".page-x").should.contain("150");
        component.find(".page-y").should.contain("120");
        user.mouseup(component[0], 100, 100);
    });

    it('removes `pressed` on mouseup', () => {
        user.mousedown(component[0], 100, 100);
        user.mousemove(component[0], 150, 120);
        user.mouseup(component[0], 150, 120);
        component.should.not.have.class("pressed");
    });
}));

describe('Events', withRoot(root => {
    let component;
    let handler;

    it('calls onPress', () => {
        handler = jasmine.createSpy("callback");

        ReactDOM.render(<DraggableComponent onPress={handler} />, root[0]);
        component = root.children().eq(0);
        user.mousedown(component[0], 100, 100);
        expect(handler).toHaveBeenCalled();
        user.mouseup(component[0], 100, 100);
    });

    it('calls onDrag', () => {
        handler = jasmine.createSpy("callback");

        ReactDOM.render(<DraggableComponent onDrag={handler} />, root[0]);
        component = root.children().eq(0);
        user.mousedown(component[0], 100, 100);
        user.mousemove(component[0], 150, 120);
        expect(handler).toHaveBeenCalled();
        user.mouseup(component[0], 100, 100);
    });

    it('calls onRelease', () => {
        handler = jasmine.createSpy("callback");

        ReactDOM.render(<DraggableComponent onRelease={handler} />, root[0]);
        component = root.children().eq(0);
        user.mousedown(component[0], 100, 100);
        user.mousemove(component[0], 150, 120);
        user.mouseup(component[0], 100, 100);
        expect(handler).toHaveBeenCalled();
    });
}));
