# Kendo React Draggable Overview

The Kendo React Draggable is a [higher-order react component](https://egghead.io/lessons/react-react-fundamentals-higher-order-components-replaces-mixins)
that wraps the [Kendo Draggable abstraction](https://github.com/telerik/kendo-draggable).

The higher-order component passes three properties to the wrapped one - `pressed`, `pageX` and `pageY`.

## Basic Usage

```html-preview
  <div id="app"></div>
```
```jsx
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
            return (<div {...this.props} style={{ color: "red", border: "1px solid black" }}>
                <div>PageX: {this.props.pageX}</div>
                <div>PageY: {this.props.pageY}</div>
            </div>);
        }

        return <div style={{border: "1px solid black"}}>Press me</div>;
    }
}

const DraggableComponent = KendoReactDraggable(Component);

ReactDOM.render(
    <DraggableComponent />,
        document.getElementById('app')
);
```
