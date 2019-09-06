import React from 'react'

const PlusOutline = props => (
  <svg
    viewBox='0 0 16 16'
    width={props.width || '26px'}
    height={props.height || '16px'}
  >
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g fill={props.color || '#C1C1C1'} fillRule='nonzero'>
        <path d='M15,7 L9,7 L9,1 C9,0.44771525 8.55228475,0 8,0 C7.44771525,0 7,0.44771525 7,1 L7,7 L1,7 C0.44771525,7 0,7.44771525 0,8 C0,8.55228475 0.44771525,9 1,9 L7,9 L7,15 C7,15.5522847 7.44771525,16 8,16 C8.55228475,16 9,15.5522847 9,15 L9,9 L15,9 C15.5522847,9 16,8.55228475 16,8 C16,7.44771525 15.5522847,7 15,7 Z' />
      </g>
    </g>
  </svg>
)

export default PlusOutline
