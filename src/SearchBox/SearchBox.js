import React from 'react'
import cx from 'classnames'

import Icon from '../Icon'
import fabricComponent from '../fabricComponent'

import style from './SearchBox.scss'

class SearchBox extends React.Component {
  static displayName = 'SearchBox'
  static propTypes = {
    active: React.PropTypes.bool,
    className: React.PropTypes.string,
    onChange: React.PropTypes.func,
    onMouseOver: React.PropTypes.func,
    onMouseOut: React.PropTypes.func,
    placeholder: React.PropTypes.string,
    value: React.PropTypes.string
  }
  static defaultProps = {
    active: false,
    placeholder: 'Search',
    value: ''
  }

  state = { hover: false }

  handleMouseOver = (...args) => {
    this.setState({
      ...this.state,
      hover: true
    })

    if (this.props.onMouseOver) {
      this.props.onMouseOver(...args)
    }
  }

  handleMouseOut = (...args) => {
    this.setState({
      ...this.state,
      hover: false
    })

    if (this.props.onMouseOut) {
      this.props.onMouseOut(...args)
    }
  }

  render() {
    const {
      active,
      className,
      onChange,
      placeholder,
      styles,
      value,
      ...props
    } = this.props

    return (
      <div data-fabric="SearchBox"
        {...props}
        onMouseOver={::this.handleMouseOver}
        onMouseOut={::this.handleMouseOut}
        className={className}
        styleName={cx('ms-SearchBox', {
          'is-active': active
        })}>
        <input {...props}
          value={value}
          onChange={onChange}
          styleName={cx('ms-SearchBox-field', {
            'hovering': this.state.hover
          })} />
        { !value && <label styleName="ms-SearchBox-label">
          <Icon styleName="ms-SearchBox-icon" glyph="search" />
          { placeholder }
        </label> }
        <button styleName="ms-SearchBox-closeButton" onMouseDown={onChange}>
          <Icon glyph="x" />
        </button>
      </div>
    )
  }
}

export default fabricComponent(SearchBox, style)
