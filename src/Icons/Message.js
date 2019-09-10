import React from 'react'

const Message = props => (
  <svg
    viewBox='0 0 20 16'
    width={props.width || '24px'}
    height={props.height || '24px'}
  >
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g fill={props.color || '#C1C1C1'} fillRule='nonzero'>
        <path d='M18.0288462,4.0239521 L18.0288462,2.01197605 L10,7.01796407 L1.97115385,2.01197605 L1.97115385,4.0239521 L10,8.98203593 L18.0288462,4.0239521 Z M18.0288462,0 C18.5737207,0 19.0384596,0.199598802 19.4230769,0.598802395 C19.8076942,0.998005988 20,1.46905916 20,2.01197605 L20,13.988024 C20,14.5309408 19.8076942,15.001994 19.4230769,15.4011976 C19.0384596,15.8004012 18.5737207,16 18.0288462,16 L1.97115385,16 C1.42627933,16 0.961540385,15.8004012 0.576923077,15.4011976 C0.192305769,15.001994 0,14.5309408 0,13.988024 L0,2.01197605 C0,1.46905916 0.192305769,0.998005988 0.576923077,0.598802395 C0.961540385,0.199598802 1.42627933,0 1.97115385,0 L18.0288462,0 Z' />
      </g>
    </g>
  </svg>
)

export default Message