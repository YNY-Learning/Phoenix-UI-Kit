import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledAvatar = styled(({ className, src, alt }) => (
  <img importance='high' className={className} src={src} alt={alt} />
))`
  width: ${props => (props.small ? '24px' : '48px')};
  height: ${props => (props.small ? '24px' : '48px')};
  max-width: ${props => (props.small ? '24px' : '48px')};
  max-height: ${props => (props.small ? '24px' : '48px')};
  border-radius: ${props =>
    props.square ? (props.small ? '2px' : '4px') : '100%'};
  box-sizing: border-box;
`
StyledAvatar.defaultProps = {
  large: true,
  square: false
}
const Avatar = props => {
  return <StyledAvatar {...props} />
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  large: PropTypes.bool,
  small: PropTypes.bool,
  square: PropTypes.bool
}

export default Avatar
