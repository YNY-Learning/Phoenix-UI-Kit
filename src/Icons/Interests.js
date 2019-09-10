import React from 'react'
import PropTypes from 'prop-types'
import { CenteredColumn } from 'Theme/Layout'

const Interests = props => (
  <CenteredColumn>
    <svg width='28px' height='28px' viewBox='0 0 28 28'>
      <g
        id='onboarding'
        stroke='none'
        strokeWidth='1'
        fill='none'
        fillRule='evenodd'
      >
        <g
          id='onboarding_1'
          transform='translate(-287.000000, -318.000000)'
          fillRule='nonzero'
        >
          <g id='Group' transform='translate(16.000000, 222.000000)'>
            <g id='interests' transform='translate(228.000000, 94.000000)'>
              <g
                id='icons/indicators/interests'
                transform='translate(41.000000, 0.000000)'
              >
                <rect id='bounds' x='0' y='0' width='32' height='32' />
                <path
                  d='M8.18424479,9.28531901 C7.75354005,9.28531901 7.40340167,9.63566083 7.40340167,10.0661621 L5.84191896,10.0661621 C5.84191896,8.77465823 6.89253745,7.72383625 8.18424479,7.72383625 C9.4757487,7.72383625 10.5265706,8.77465823 10.5265706,10.0661621 L8.96488443,10.0661621 C8.96488443,9.63566083 8.61474609,9.28531901 8.18424479,9.28531901 Z M14.4303792,9.28531901 C13.9998779,9.28531901 13.6495361,9.63566083 13.6495361,10.0661621 L12.0880534,10.0661621 C12.0880534,8.77465823 13.1388753,7.72383625 14.4303792,7.72383625 C15.7218831,7.72383625 16.7727051,8.77465823 16.7727051,10.0661621 L15.2112223,10.0661621 C15.2112223,9.63566083 14.8608805,9.28531901 14.4303792,9.28531901 Z M23.7996826,17.6715495 C22.5081787,17.6715495 21.4573568,16.6207276 21.4573568,15.3292236 L23.0188395,15.3292236 C23.0188395,15.7597249 23.3691813,16.1098633 23.7996826,16.1098633 C24.2301839,16.1098633 24.5805257,15.7597249 24.5805257,15.3292236 L26.1420084,15.3292236 C26.1420084,16.6207276 25.0911865,17.6715495 23.7996826,17.6715495 Z M15.2112223,12.408488 L15.2112223,13.189331 C15.2112223,15.3418376 13.4599203,17.0931396 11.3072103,17.0931396 C9.15470375,17.0931396 7.40340167,15.3418376 7.40340167,13.189331 L7.40340167,12.408488 L8.96488443,12.408488 L8.96488443,13.189331 C8.96488443,14.4808349 10.0157064,15.5316569 11.3072103,15.5316569 C12.5989177,15.5316569 13.6495361,14.4808349 13.6495361,13.189331 L13.6495361,12.408488 L15.2112223,12.408488 Z M24.5445557,23.7598063 L22.9828695,23.7598063 L22.9828695,22.9789632 C22.9828695,21.6874593 21.932251,20.6366374 20.6405436,20.6366374 C19.3490397,20.6366374 18.2982178,21.6874593 18.2982178,22.9789632 L18.2982178,23.7598063 L16.736735,23.7598063 L16.736735,22.9789632 C16.736735,20.8264567 18.4880371,19.0751546 20.6405436,19.0751546 C22.7932536,19.0751546 24.5445557,20.8264567 24.5445557,22.9789632 L24.5445557,23.7598063 Z M28.2462972,10.5904541 L29.3172607,10.1621907 L29.3172607,17.4070638 C29.3172607,19.9190674 28.561849,22.3515218 27.1328125,24.4411621 C25.7102865,26.5212402 23.7215576,28.1152751 21.3814697,29.0513509 L20.6765136,29.3333333 L19.971761,29.0513509 C16.4968261,27.661377 13.8352865,24.7890625 12.6951497,21.2589925 C12.276652,21.4555257 12.0536703,21.5393473 11.3072103,21.8378093 L10.6024577,21.5558268 C8.26236979,20.6199544 6.2734375,19.0257161 4.8511149,16.945638 C3.42207844,14.8559977 2.66666667,12.4235433 2.66666667,9.91153969 L2.66666667,2.66666667 L3.73742677,3.09493 C8.53153484,5.01265464 14.0308024,5.01265464 18.8249105,3.09493 L19.8956706,2.66666667 L19.8956706,9.91153969 C19.8956706,10.621582 19.836263,11.324707 19.7194824,12.0154216 C22.628418,12.1529541 25.5587158,11.6654867 28.2462972,10.5904541 Z M11.3072103,20.1560872 C15.847819,18.3402914 18.3341878,14.2301839 18.3341878,9.91153969 L18.3341878,4.94124349 C16.0681559,5.71354167 13.7010091,6.1043701 11.2811686,6.1043701 C8.86153156,6.1043701 6.49438479,5.71354167 4.22814943,4.94124349 L4.22814943,9.91153969 C4.22814943,14.3453369 7.02294922,18.4422201 11.1824951,20.1060384 L11.1822917,20.1060384 L11.3072103,20.1560872 Z M27.7555745,17.4068604 L27.7555745,12.4357503 C25.0712484,13.3470052 22.2001546,13.7315267 19.3555094,13.5592041 C18.9927572,14.7528483 18.450765,15.8919678 17.739502,16.9425862 C16.7698568,18.3748779 15.5308431,19.5762532 14.0922445,20.4911703 C15.0356445,23.7132161 17.4152018,26.3468831 20.5517985,27.6015625 L20.6765136,27.6514079 C25.2112223,25.8372396 27.7555745,21.6195068 27.7555745,17.4068604 Z'
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

Interests.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string
}

export default Interests