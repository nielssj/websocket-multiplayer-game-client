import React, { Component, PropTypes } from 'react'
import { browserHistory } from 'react-router'

export default class App extends Component {
    componentDidMount() {
      if (!this.props.children) {
        browserHistory.push('/lobby')
      }
    }

    render() {
      return <div>{this.props.children}</div>
    }
}
