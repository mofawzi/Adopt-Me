import React, { Component } from 'react'
import {Link, Redirect} from '@reach/router'

export class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false}
  static getDerivedStateFromError() {
    return {hasError: true}
  }

  componentDidCatch(error, info) {
    console.error("ErrorBoundary caugth an error", error, info);
    if(this.state.hasError){
      setTimeout(() => this.setState({redirect: true}), 5000)
    }
  }


  render() {
    // Redirect to home page after 5 seconds
    if(this.state.redirect){
      return <Redirect to="/" />
    }

    if(this.state.hasError){
      return (
      <h1>
        There was an error with this listing. <Link to="/">Back Home</Link> or wait five seconds.
      </h1>
    )}

    return this.props.children
  }
}

export default ErrorBoundary
