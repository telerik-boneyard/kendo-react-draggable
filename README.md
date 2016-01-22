[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![npm version](https://badge.fury.io/js/%40telerik%2Fkendo-react-draggable.svg)](https://badge.fury.io/js/%40telerik%2Fkendo-react-draggable)
[![Build Status](https://travis-ci.org/telerik/kendo-react-draggable.svg?branch=master)](https://travis-ci.org/telerik/kendo-react-draggable)

# Kendo UI Draggable React Component

A [higher-order react component](https://egghead.io/lessons/react-react-fundamentals-higher-order-components-replaces-mixins) that wraps the [Kendo Draggable abstraction](https://github.com/telerik/kendo-draggable).

## Installation

The library is published as a [public scoped NPM package](https://docs.npmjs.com/misc/scope) in the [Telerik organization](https://www.npmjs.com/~telerik) in `http://npmjs.org/`.

Install it using NPM:

```sh
npm install --save @telerik/kendo-react-draggable;
```

Once installed, import the module:

```jsx
// ES2015 module syntax
import Draggable from '@telerik/kendo-react-draggable';
```

```jsx
// CommonJS format
var Draggable = require('@telerik/kendo-react-draggable');
```

## Basic Usage

```html-preview
  <div id="app"></div>
```
```jsx
import * as React from 'react';
import ReactDOM from 'react-dom';
import Draggable from '@telerik/kendo-react-draggable';

class Component extends React.Component {
    static propTypes = {
        pageX: React.PropTypes.number,
        pageY: React.PropTypes.number,
        pressed: React.PropTypes.bool
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
```

For more information about the underlying draggable implementation, check the [kendo draggable](https://github.com/telerik/kendo-draggable) package README.
