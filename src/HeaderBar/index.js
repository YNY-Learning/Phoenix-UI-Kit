import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import Theme from '../Theme'
import Avatar from '../Avatar'
import DownChevron from '../Icons/DownChevron'
import Body from '../Typography/Body'

const HeaderBarContainer = styled(({ className, children }) => (
  <div className={className}> {children} </div>
))`
  height: 80px;
  max-height: 80px;
  width: auto;
  min-width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
  padding: 16px 64px 16px 24px;
  background: ${props => props.theme.white};
  box-sizing: border-box;
`
HeaderBarContainer.defaultProps = {
  theme: Theme
}
const ProfileBox = styled.div`
  flex: 1 0 0;
  height: 100%;
  background: transparent;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: flex-start;
`
const ProfileContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-end;
  height: 100%;
  padding: 4px 16px;
  box-sizing: border-box;
`
const ProfileNameContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`
const ProfileName = styled(Body)`
  margin-left: 8px;
`
const ProfileStatus = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`
const StatusText = styled(Body)`
  margin-left: 8px;
  text-transform: capitalize;
`
const StatusCircle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background: ${props => {
    switch (props.onlineStatus) {
      case 'online':
        return props.theme.green1
      case 'busy':
        return props.theme.yellow1
      case 'away':
        return props.theme.red1
      case 'offline':
        return props.theme.grey1
    }
  }};
`
StatusCircle.defaultProps = {
  theme: Theme
}
const ContentBox = styled.div`
  flex: 5 0 0;
  height: 100%;
`

const HeaderBar = props => {
  return (
    <HeaderBarContainer>
      <ContentBox>{props.contentComponent}</ContentBox>
      <ProfileBox>
        <ProfileContent>
          <ProfileNameContainer>
            <DownChevron color='#000' width='8px' height='8px' />
            <ProfileName weight='regular' color='black'>
              {props.profile.fullName}
            </ProfileName>
          </ProfileNameContainer>
          <ProfileStatus>
            <StatusCircle onlineStatus={props.profile.onlineStatus} />
            <StatusText weight='regular' color='grey3'>
              {props.profile.onlineStatus}
            </StatusText>
          </ProfileStatus>
        </ProfileContent>
        <Avatar
          src={props.profile.imageURl}
          alt=' profile avatar photo'
          square
          large
        />
      </ProfileBox>
    </HeaderBarContainer>
  )
}

HeaderBar.propTypes = {
  profile: PropTypes.shape({
    imageURl: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
    onlineStatus: PropTypes.oneOf(['online', 'busy', 'away', 'offline'])
  }),
  contentComponent: PropTypes.oneOfType([PropTypes.node, PropTypes.element])
}

export default HeaderBar
