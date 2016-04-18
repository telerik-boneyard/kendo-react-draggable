/* eslint no-invalid-this: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import DomDraggable from '@telerik/kendo-draggable';

function noop() { }

export default function(Component) {
    return class extends React.Component {
        constructor(props) {
            super(props);
            const { onPress = noop, onDrag = noop, onRelease = noop } = props;
            this.onPressHandler = onPress;
            this.onDragHandler = onDrag;
            this.onReleaseHandler = onRelease;
        }

        state = {
            pressed: false,
            pageX: NaN,
            pageY: NaN
        };

        onPress = (e) => {
            this.onPressHandler(e);
            this.setState({ pressed: true, ...e });
        };

        onDrag = (e) => {
            this.onDragHandler(e);
            this.setState({ pageX: e.pageX, pageY: e.pageY });
        };

        onRelease = (e) => {
            this.onReleaseHandler(e);
            this.setState({ pressed: false, pageX: NaN, pageY: NaN });
        };

        draggable = new DomDraggable({
            press: this.onPress,
            drag: this.onDrag,
            release: this.onRelease
        });

        static propTypes = {
            onDrag: React.PropTypes.func,
            onPress: React.PropTypes.func,
            onRelease: React.PropTypes.func
        };

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
