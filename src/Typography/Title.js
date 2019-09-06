import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Theme from '../Theme'

const TitleStyled = styled(({ className, ...props }) => (
  <h4 className={className} {...props} />
))`
  font-size: 16px;
  line-height: 24px;
  margin: 0;
  font-weight: ${props => props.theme.fontWeights[props.weight]};
  color: ${props => props.theme[props.color]};
`
TitleStyled.defaultProps = {
  theme: Theme
}

function Title(props) {
  return (
    <TitleStyled weight={props.weight} color={props.color} {...props}>
      {props.children}
    </TitleStyled>
  )
}
Title.defaultProps = {
  weight: 'regular',
  color: 'black'
}
Title.propTypes = {
  weight: PropTypes.string,
  color: PropTypes.string
}

export default Title
