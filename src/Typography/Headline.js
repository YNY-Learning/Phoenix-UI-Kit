import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Theme from '../Theme'

const HeadlineStyled = styled(({ className, ...props }) => (
  <h3 className={className} {...props} />
))`
  font-size: 18px;
  line-height: 27px;
  margin: 0;
  font-weight: ${props => props.theme.fontWeights[props.weight]};
  color: ${props => props.theme[props.color]};
`
HeadlineStyled.defaultProps = {
  theme: Theme
}

function Headline(props) {
  return (
    <HeadlineStyled weight={props.weight} color={props.color} {...props}>
      {props.children}
    </HeadlineStyled>
  )
}
Headline.defaultProps = {
  weight: 'regular',
  color: 'black'
}
Headline.propTypes = {
  weight: PropTypes.string,
  color: PropTypes.string
}
export default Headline
