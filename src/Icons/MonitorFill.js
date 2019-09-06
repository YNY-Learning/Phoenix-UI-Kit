import React from 'react'

const MonitorFill = props => (
  <svg
    viewBox='0 0 20 18'
    width={props.width || '20px'}
    height={props.height || '18px'}
  >
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g fill={props.color || '#C1C1C1'} fillRule='nonzero'>
        <path d='M17,0 C18.6568542,0 20,1.34314575 20,3 L20,8 L0,8 L0,3 C0,1.34314575 1.34314575,0 3,0 L17,0 Z M0,11 L0,10 L20,10 L20,11 C20,12.6568542 18.6568542,14 17,14 L11,14 L11,16 L15,16 C15.5522847,16 16,16.4477153 16,17 C16,17.5522847 15.5522847,18 15,18 L5,18 C4.44771525,18 4,17.5522847 4,17 C4,16.4477153 4.44771525,16 5,16 L9,16 L9,14 L3,14 C1.34314575,14 0,12.6568542 0,11 Z' />
      </g>
    </g>
  </svg>
)

export default MonitorFill
