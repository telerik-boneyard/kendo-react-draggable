/* eslint no-invalid-this: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import DomDraggable from '@telerik/kendo-draggable';

export default function(Component) {
    return class extends React.Component {
        state = {
            pressed: false,
            pageX: NaN,
            pageY: NaN
        };

        onPress = (e) =>
            this.setState({ pressed: true, ...e });

        onDrag = (e) =>
            this.setState({ pageX: e.pageX, pageY: e.pageY });

        onRelease = () =>
            this.setState({ pressed: false, pageX: NaN, pageY: NaN });

        draggable = new DomDraggable({
            press: this.onPress,
            drag: this.onDrag,
            release: this.onRelease
        });

        getRef = (child) =>
            this.childRef = child;

        componentDidMount() {
            this.draggable.bindTo(ReactDOM.findDOMNode(this.childRef));
        }

        componentDidUpdate() {
            this.draggable.bindTo(ReactDOM.findDOMNode(this.childRef));
        }

        render() {
            return <Component {...this.props} {...this.state} ref={this.getRef} />;
        }
    };
}
