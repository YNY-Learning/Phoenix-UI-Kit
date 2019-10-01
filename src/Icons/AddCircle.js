import React from 'react'

const AddCircle = props => (
  <svg
    viewBox='0 0 20 20'
    width={props.width || '20px'}
    height={props.height || '20px'}
  >
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g transform='translate(-2.000000, -2.000000)'>
        <g>
          <rect fillRule='nonzero' x='0' y='0' width='24' height='24' />
          <g strokeWidth='1' fillRule='evenodd'>
            <rect
              fill='#000000'
              fillRule='nonzero'
              opacity='0'
              x='0'
              y='0'
              width='24'
              height='24'
            />
            <path
              d='M12,2 C14.6521649,2 17.195704,3.0535684 19.0710678,4.92893219 C20.9464316,6.80429597 22,9.3478351 22,12 C22,17.5228475 17.5228475,22 12,22 C6.4771525,22 2,17.5228475 2,12 C2,6.4771525 6.4771525,2 12,2 Z M12,20 C14.1217319,20 16.1565632,19.1571453 17.6568542,17.6568542 C19.1571453,16.1565632 20,14.1217319 20,12 C20,7.581722 16.418278,4 12,4 C7.581722,4 4,7.581722 4,12 C4,16.418278 7.581722,20 12,20 Z M15,11 C15.5522847,11 16,11.4477153 16,12 C16,12.5522847 15.5522847,13 15,13 L13,13 L13,15 C13,15.5522847 12.5522847,16 12,16 C11.4477153,16 11,15.5522847 11,15 L11,13 L9,13 C8.44771525,13 8,12.5522847 8,12 C8,11.4477153 8.44771525,11 9,11 L11,11 L11,9 C11,8.44771525 11.4477153,8 12,8 C12.5522847,8 13,8.44771525 13,9 L13,11 L15,11 Z'
              fill='#333333'
              fillRule='nonzero'
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
)

export default AddCircle