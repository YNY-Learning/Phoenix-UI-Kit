import React from 'react'

const CircleMinusFill = props => (
  <svg
    viewBox='0 0 20 20'
    width={props.width || '20px'}
    height={props.height || '20px'}
  >
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g fill={props.color || '#C1C1C1'} fillRule='nonzero'>
        <path d='M10,0 C4.4771525,0 2.22044605e-15,4.4771525 2.22044605e-15,10 C2.22044605e-15,15.5228475 4.4771525,20 10,20 C15.5228475,20 20,15.5228475 20,10 C20,7.3478351 18.9464316,4.80429597 17.0710678,2.92893219 C15.195704,1.0535684 12.6521649,0 10,0 Z M13,11 L7,11 C6.44771525,11 6,10.5522847 6,10 C6,9.44771525 6.44771525,9 7,9 L13,9 C13.5522847,9 14,9.44771525 14,10 C14,10.5522847 13.5522847,11 13,11 Z' />
      </g>
    </g>
  </svg>
)

export default CircleMinusFill
