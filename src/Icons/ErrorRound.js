import React from 'react'

const ErrorRound = props => (
  <svg
    width={props.width || '18px'}
    height={props.height || '18px'}
    viewBox='0 0 20 20'
  >
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g transform='translate(-2.000000, -2.000000)' fillRule='nonzero'>
        <circle fill={props.color || '#eb5e55'} cx='12' cy='12' r='10' />
        <path
          d='M13,11 L16,11 C16.5522847,11 17,11.4477153 17,12 C17,12.5522847 16.5522847,13 16,13 L13,13 L13,16 C13,16.5522847 12.5522847,17 12,17 C11.4477153,17 11,16.5522847 11,16 L11,13 L8,13 C7.44771525,13 7,12.5522847 7,12 C7,11.4477153 7.44771525,11 8,11 L11,11 L11,8 C11,7.44771525 11.4477153,7 12,7 C12.5522847,7 13,7.44771525 13,8 L13,11 Z'
          fill='#FFFFFF'
          transform='translate(12.000000, 12.000000) rotate(-315.000000) translate(-12.000000, -12.000000) '
        />
      </g>
    </g>
  </svg>
)

export default ErrorRound
