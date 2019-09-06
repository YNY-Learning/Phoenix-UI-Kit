import React from 'react'

const CheckRound = props => (
  <svg
    width={props.width || '18px'}
    height={props.height || '18px'}
    viewBox='0 0 20 20'
  >
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g fillRule='nonzero'>
        <circle fill={props.color || '#4BB543'} cx='10' cy='10' r='10' />
        <circle
          fillOpacity='0'
          fill='#FFFFFF'
          opacity='0'
          cx='10'
          cy='10'
          r='10'
        />
        <path
          d='M10.7728246,12.5 L10.7728246,5.57142857 C10.7728246,5.25583729 11.0286618,5 11.3442531,5 L12.4285714,5 C12.7441627,5 13,5.25583729 13,5.57142857 L13,14.4285714 C13,14.7441627 12.7441627,15 12.4285714,15 L11.6703816,15 L7.57142857,15 C7.25583729,15 7,14.7441627 7,14.4285714 L7,13.0714286 C7,12.7558373 7.25583729,12.5 7.57142857,12.5 L10.7728246,12.5 Z'
          fill='#FFFFFF'
          transform='translate(10.000000, 10.000000) rotate(-315.000000) translate(-10.000000, -10.000000) '
        />
      </g>
    </g>
  </svg>
)

export default CheckRound
