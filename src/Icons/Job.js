import React from 'react'
import PropTypes from 'prop-types'
import { CenteredColumn } from 'Theme/Layout'

const Job = props => (
  <CenteredColumn>
    <svg width='28px' height='24px' viewBox='0 0 28 24'>
      <g
        id='onboarding'
        stroke='none'
        strokeWidth='1'
        fill='none'
        fillRule='evenodd'
      >
        <g
          id='onboarding_1'
          transform='translate(-173.000000, -399.000000)'
          fillRule='nonzero'
        >
          <g id='Group' transform='translate(16.000000, 222.000000)'>
            <g id='job' transform='translate(114.000000, 173.000000)'>
              <g
                id='icons/indicators/job'
                transform='translate(41.000000, 0.000000)'
              >
                <rect id='bounds' x='0' y='0' width='32' height='32' />
                <path
                  d='M21.7142857,8.36363636 L21.7142857,4 L10.2857143,4 L10.2857143,8.36363636 L2.66666667,8.36363636 L2.66666667,28 L29.3333333,28 L29.3333333,8.36363636 L21.7142857,8.36363636 Z M11.9183673,5.63636364 L20.0816327,5.63636364 L20.0816327,8.36363636 L11.9183673,8.36363636 L11.9183673,5.63636364 Z M27.7006803,26.3636364 L4.29931973,26.3636364 L4.29931973,14.2322364 L13.0068027,17.9068545 L13.0068027,22 L18.9931973,22 L18.9931973,17.9068545 L27.7006803,14.2322364 L27.7006803,26.3636364 Z M14.6394558,20.3636364 L14.6394558,16.5454545 L17.3605442,16.5454545 L17.3605442,20.3636364 L14.6394558,20.3636364 Z M27.7006803,12.4567818 L18.9931973,16.1314 L18.9931973,14.9090909 L13.0068027,14.9090909 L13.0068027,16.1314 L4.29931973,12.4567818 L4.29931973,10 L27.7006803,10 L27.7006803,12.4567818 Z'
                  id='🎨-color'
                  fill={props.color || '#5F6FEE'}
                />
                <rect
                  id='state'
                  fillOpacity='0'
                  fill='#FFFFFF'
                  opacity='0'
                  x='2.66666667'
                  y='2.66666667'
                  width='26.6666667'
                  height='26.6666667'
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
    <span
      style={{
        color: props.color || '#5F6FEE'
      }}
    >
      {props.label}
    </span>
  </CenteredColumn>
)

Job.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string
}

export default Job
