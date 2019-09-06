import React from 'react'

const LogoutOutline = props => (
  <svg
    viewBox='0 0 17 16'
    width={props.width || '17px'}
    height={props.height || '16px'}
  >
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g fill={props.color || '#C1C1C1'} fillRule='nonzero'>
        <path d='M3,2 L2,2 L2,14 L3,14 C3.55228475,14 4,14.4477153 4,15 C4,15.5522847 3.55228475,16 3,16 L1,16 C0.44771525,16 0,15.5522847 0,15 L0,1 C0,0.44771525 0.44771525,0 1,0 L3,0 C3.55228475,0 4,0.44771525 4,1 C4,1.55228475 3.55228475,2 3,2 Z M16.82,7.42 C17.0708853,7.77575809 17.0627974,8.25294839 16.8,8.6 L13.8,12.6 C13.6111456,12.8518058 13.3147573,13 13,13 C12.7836298,13 12.5730962,12.9298221 12.4,12.8 C12.1878268,12.6408701 12.0475578,12.4039723 12.0100505,12.1414214 C11.9725432,11.8788704 12.0408701,11.6121732 12.2,11.4 L14,9 L6,9 C5.44771525,9 5,8.55228475 5,8 C5,7.44771525 5.44771525,7 6,7 L14.09,7 L12.37,4.58 C12.2150095,4.3629079 12.1531749,4.09289119 12.1982446,3.82998479 C12.2433143,3.56707839 12.3915524,3.33307413 12.61,3.18 C13.0604485,2.86393305 13.6816174,2.97118524 14,3.42 L16.82,7.42 Z' />
      </g>
    </g>
  </svg>
)

export default LogoutOutline
