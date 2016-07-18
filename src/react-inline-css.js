/**
 * @copyright © 2015, Rick Wong. All rights reserved.
 */
import React, { PropTypes, Component } from 'react'

/**
 * @module InlineCss
 */
export default class InlineCss extends Component {

  static propTypes = {
    namespace: PropTypes.string,
    componentName: PropTypes.string,
    stylesheet: PropTypes.string.isRequired,
    wrapper: PropTypes.string
  }

  static defaultProps = {
    namespace: `inlineCss`,
    componentName: '&',
    wrapper: 'div'
  }

  _transformSheet(stylesheet, componentName, namespace) {
    return stylesheet.
    replace(/}\s*/ig, '\n}\n'). // Regular rules are namespaced.
    replace(/(^|{|}|;|,)\s*([&a-z0-9\-_\.:#\(\),>*\s]+)\s*(\{)/ig, matched => matched.replace(new RegExp(componentName, 'g'), '#' + namespace))
  }

  render() {
    const { namespace, componentName, stylesheet, wrapper, ...wrapperProps } = this.props
    const id = namespace !== 'inlineCss' ? namespace : `${namespace}-${(Math.random().toString(36) + '00000000000000000').slice(2, 7 + 2)}`

    return React.createElement(
      wrapper, { id, ...wrapperProps },
      this.props.children,
      React.createElement('style', {
        scoped: true,
        dangerouslySetInnerHTML: {
          __html: ::this._transformSheet(stylesheet, componentName, id)
        }
      })
    )
  }
}
