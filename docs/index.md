---
title: Overview
page_title: Overview | Kendo UI Draggable for React
description: "Use the Kendo UI Draggable component in a React project."
slug: overview_draggable_kendouiforreact
position: 1
---

# Draggable Overview

The Kendo UI Draggable for React is a [higher-order React component](https://egghead.io/lessons/react-react-fundamentals-higher-order-components-replaces-mixins)
that wraps the [Kendo UI Draggable abstraction](https://github.com/telerik/kendo-draggable).

The higher-order component passes three properties to the wrapped one&mdash;`pressed`, `pageX`, and `pageY`.

The Draggable is part of the [kendo-react-draggable npm package](https://www.npmjs.com/package/@telerik/kendo-react-draggable).

## Configuration

### Basic Usage

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

### Events

In addition to the properties, the component also triggers three events&mdash;`onPress`, `onDrag`, and `onRelease`.

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
<div>
    <p>Open the developer console to observe the event handler callback results.</p>
    <DraggableComponent
        onPress={e => console.log('press', e) }
        onDrag={e => console.log('drag', e) }
        onRelease={e => console.log('release', e) }
    />
</div>,

        document.getElementById('app')
);
```
