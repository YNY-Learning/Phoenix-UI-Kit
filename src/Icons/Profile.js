import React from 'react'

const Profile = props => (
  <svg
    width={props.width || '48px'}
    height={props.height || '48px'}
    viewBox='0 0 22 22'
  >
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g fillRule='nonzero'>
        <circle stroke={props.color || '#C1C1C1'} cx='11' cy='11' r='10.5' />
        <path
          d='M3.62046283,19.1574693 C4.460314,16.4136153 7.44581801,14.3846154 11,14.3846154 C14.554182,14.3846154 17.539686,16.4136153 18.3795372,19.1574693 C16.4279907,20.9239971 13.8396523,22 11,22 C8.16034766,22 5.57200926,20.9239971 3.62046283,19.1574693 Z'
          fill={props.color || '#C1C1C1'}
        />
        <circle
          fill={props.color || '#C1C1C1'}
          cx='11'
          cy='8.46153846'
          r='4.23076923'
        />
      </g>
    </g>
  </svg>
)

export default Profile
