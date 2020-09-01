'use strict'

import title from './app'

import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
    React.createElement(title),
    document.querySelector('[data-js="app"]')
)