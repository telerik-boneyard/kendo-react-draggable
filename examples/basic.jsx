import * as React from 'react';
import ReactDOM from 'react-dom';
import Draggable from '@telerik/kendo-react-draggable';

class Component extends React.Component {
    static propTypes = {
        pageX: React.PropTypes.number,
        pageY: React.PropTypes.number,
        pressed: React.PropTypes.bool,
        stuff: React.PropTypes.string
    };

    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.pressed) {
            return (<div {...this.props} style={{ color: "red" }}>
                <div>PageX: {this.props.pageX}</div>
                <div>PageY: {this.props.pageY}</div>
            </div>);
        }

        return <span>Press me</span>;
    }
}

const DraggableComponent = Draggable(Component);

ReactDOM.render(
    <DraggableComponent />,
        document.getElementById('app')
);
