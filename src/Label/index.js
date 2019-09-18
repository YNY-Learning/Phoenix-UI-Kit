import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Theme from '../Theme'

const LabelContainer = styled(({ className, children }) => (
  <div className={className}> {children} </div>
))`
  font-size: 12px;
  line-height: 21px;
  font-weight: 600;
  color: ${props => props.theme.black};
  padding: 8px;
  text-transform: uppercase;
  border-radius: 2px;
  background: ${props => {
    switch (props.state) {
      case 'success':
        return props.theme.green1
      case 'error':
        return props.theme.red1
      case 'warning':
        return props.theme.yellow1
      case 'info':
        return props.theme.primary2
    }
  }};
`
LabelContainer.defaultProps = {
  theme: Theme
}

const Label = props => {
  return <LabelContainer {...props} />
}

Label.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.element
  ]).isRequired,
  state: PropTypes.oneOf(['success', 'error', 'warning', 'info']).isRequired,
  className: PropTypes.string
}

export default Label
