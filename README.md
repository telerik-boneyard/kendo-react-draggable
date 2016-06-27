[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![npm version](https://badge.fury.io/js/%40telerik%2Fkendo-react-draggable.svg)](https://badge.fury.io/js/%40telerik%2Fkendo-react-draggable)
[![Build Status](https://travis-ci.org/telerik/kendo-react-draggable.svg?branch=master)](https://travis-ci.org/telerik/kendo-react-draggable)

# Kendo UI Draggable for React

* [Overview](https://github.com/telerik/kendo-react-draggable#overview)
* [Basic Usage](https://github.com/telerik/kendo-react-draggable#basic-usage)
* [Installation](https://github.com/telerik/kendo-react-draggable#installation)
* [Browser Support](https://github.com/telerik/kendo-react-draggable#browser-support)
* [Glossary](https://github.com/telerik/kendo-react-draggable#glossary)
  * [Component](https://github.com/telerik/kendo-react-draggable#component)
  * [Package](https://github.com/telerik/kendo-react-draggable#package)

## Overview

This repository contains the source code and documentation of the Kendo UI Draggable package for React.

Currently, it includes the Draggable component.

For more information on upcoming Draggable features, refer to the [Roadmap](https://github.com/telerik/kendo-react-layout/blob/master/docs/roadmap.md).

## Basic Usage

The Draggable is a [higher-order React component](https://egghead.io/lessons/react-react-fundamentals-higher-order-components-replaces-mixins) that wraps the [Kendo UI Draggable abstraction](https://github.com/telerik/kendo-draggable).

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

For more information on the underlying Draggable implementation, check the `README.md` of the [Kendo UI Draggable](https://github.com/telerik/kendo-draggable) package.

## Installation

The Draggable is published as a [public scoped NPM package](https://docs.npmjs.com/misc/scope) in the [Telerik organization](https://www.npmjs.com/~telerik) in http://npmjs.org/.

Install it using NPM.

```sh
npm install --save @telerik/kendo-react-draggable;
```

Once installed, import the module.

```jsx
// ES2015 module syntax
import Draggable from '@telerik/kendo-react-draggable';
```

```jsx
// CommonJS format
var Draggable = require('@telerik/kendo-react-draggable');
```

> To install the npm package, it is recommended that you use Node.js 5.0.0 or later versions.

## Browser Support

The Draggable component supports the following browsers:

* Google Chrome
* Firefox
* Safari (OS X)
* Safari (iOS)
* Chrome (Android)
* IE/Edge

## Glossary

Below are explained the basic terms the suite for React applies.

### Component

A Component refers to a [React Component](https://facebook.github.io/react/docs/jsx-in-depth.html#html-tags-vs.-react-components).

### Package

A package contains one or more components, developed in a single repository and distributed in a single NPM package.
