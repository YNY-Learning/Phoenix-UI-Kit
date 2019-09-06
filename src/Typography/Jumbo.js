import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Theme from '../Theme'

const JumboStyled = styled(({ className, ...props }) => (
  <h2 className={className} {...props} />
))`
  font-size: 20px;
  line-height: 30px;
  margin: 0;
  font-weight: ${props => props.theme.fontWeights[props.weight]};
  color: ${props => props.theme[props.color]};
`
JumboStyled.defaultProps = {
  theme: Theme
}
const Jumbo = props => {
  return (
    <JumboStyled weight={props.weight} color={props.color} {...props}>
      {props.children}
    </JumboStyled>
  )
}
Jumbo.defaultProps = {
  weight: 'regular',
  color: 'black'
}
Jumbo.propTypes = {
  weight: PropTypes.string,
  color: PropTypes.string
}
export default Jumbo
