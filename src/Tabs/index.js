import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Theme from '../Theme'

const TabContainer = styled(({ className, children }) => (
  <div className={className}> {children} </div>
))`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
`
const TabListContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  background: transparent;
  width: 100%;
`
const TabListItem = styled.div`
  font-size: 14px;
  font-weight: 600;
  line-height: 21px;
  color: ${props => props.theme.grey3};
  background: transparent;
  margin-right: 24px;
  text-transform: capitalize;
  cursor: pointer;
  display: inline-block;

  ${({ selected }) =>
    selected
      ? css`
          color: ${props => props.theme.primary1};
          border-bottom: 2px solid ${props => props.theme.primary1};
        `
      : css`
          &:after {
            display: block;
            content: '';
            border-bottom: solid 2px ${props => props.theme.primary1};
            transform: scaleX(0);
            transition: transform 250ms ease-in-out;
          }
          :hover:after {
            transform: scaleX(1);
          }
        `}
`
TabListItem.defaultProps = {
  theme: Theme
}
const TabContentContainer = styled(({ className, children }) => (
  <div className={className}> {children} </div>
))`
  width: 100%;
  position: relative;
  padding: 8px;
`
class Tabs extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      index: 0
    }
    this.onTabLabelClick = this.onTabLabelClick.bind(this)
  }

  onTabLabelClick(index) {
    this.setState({
      index: index
    })
  }

  render() {
    const {
      tabList,
      className,
      labelListClassName,
      contentClassName
    } = this.props
    const labels = tabList.map(tab => tab.label)
    return (
      <TabContainer className={className}>
        <TabListContainer className={labelListClassName}>
          {labels.map((label, index) => (
            <TabListItem
              selected={index === this.state.index}
              key={label}
              onClick={() => this.onTabLabelClick(index)}
            >
              {label}
            </TabListItem>
          ))}
        </TabListContainer>
        <TabContentContainer className={contentClassName}>
          {tabList[this.state.index].tabComponent}
        </TabContentContainer>
      </TabContainer>
    )
  }
}

Tabs.propTypes = {
  className: PropTypes.string,
  labelListClassName: PropTypes.string,
  contentClassName: PropTypes.string,
  tabList: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      tabComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.element])
        .isRequired
    })
  ).isRequired
}

export default Tabs
