import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Theme from '../Theme'
import NextChevron from '../Icons/NextChevron'

const BreadCrumbsContainer = styled(({ className, children }) => (
  <div className={className}> {children} </div>
))`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
`
const RoutesContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`
const RouteTitle = styled.h1`
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  color: ${props => props.theme.black};
  margin: 8px 0px;
`

RouteTitle.defaultProps = {
  theme: Theme
}
const RouteArrow = styled.div`
  width: auto;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin: 0px 8px;
`
const Route = styled.h1`
  font-size: 12px;
  font-weight: ${props => (props.active ? 600 : 400)};
  line-height: 18px;
  color: ${props => (props.active ? props.theme.black : props.theme.grey3)};
`
Route.defaultProps = {
  theme: Theme
}
const BreadCrumbs = props => {
  return (
    <BreadCrumbsContainer>
      <RouteTitle>{props.routes[props.routes.length - 1]}</RouteTitle>
      <RoutesContainer>
        {props.routes.map((route, index) => {
          if (index !== 0) {
            return (
              <React.Fragment key={index}>
                <RouteArrow>
                  <NextChevron
                    width='8px'
                    height='12px'
                    color={
                      index === props.routes.length - 1 ? '#000' : '#9296B3'
                    }
                  />
                </RouteArrow>
                <Route active={index === props.routes.length - 1}>
                  {route}
                </Route>
              </React.Fragment>
            )
          } else {
            return <p key={index}>{route}</p>
          }
        })}
      </RoutesContainer>
    </BreadCrumbsContainer>
  )
}

BreadCrumbs.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.string).isRequired,
  className: PropTypes.string
}

export default BreadCrumbs
