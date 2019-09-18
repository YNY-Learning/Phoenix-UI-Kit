import React from 'react'

const CheckBoxOutline = props => (
  <svg
    viewBox='0 0 18 18'
    width={props.width || '18px'}
    height={props.height || '18px'}
  >
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g fill={props.color || '#000'} fillRule='nonzero'>
        <path d='M15,0 L3,0 C1.34314575,0 0,1.34314575 0,3 L0,15 C0,16.6568542 1.34314575,18 3,18 L15,18 C16.6568542,18 18,16.6568542 18,15 L18,3 C18,1.34314575 16.6568542,0 15,0 Z M16,15 C16,15.5522847 15.5522847,16 15,16 L3,16 C2.44771525,16 2,15.5522847 2,15 L2,3 C2,2.44771525 2.44771525,2 3,2 L15,2 C15.5522847,2 16,2.44771525 16,3 L16,15 Z' />
      </g>
    </g>
  </svg>
)

export default CheckBoxOutline
