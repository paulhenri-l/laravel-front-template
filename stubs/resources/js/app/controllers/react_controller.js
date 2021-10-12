import { Controller } from '@hotwired/stimulus'
import React from 'react'
import ReactDOM from 'react-dom'
import Hello from '../components/Hello'

const components = {
  Hello,
}

export default class extends Controller {
  static values = {
    component: String,
    props: Object,
  }

  connect () {
    const Component = this.getComponent()
    ReactDOM.render(<Component {...this.propsValue} />, this.element)
  }

  disconnect () {
    ReactDOM.unmountComponentAtNode(this.element)
  }

  getComponent () {
    const name = this.componentValue
    const component = components[name] || null

    if (!component) {
      throw new Error(`Unknown component ${name}`)
    }

    return component
  }
}
