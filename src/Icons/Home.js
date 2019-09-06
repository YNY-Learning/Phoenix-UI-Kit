import React from 'react'

const Home = props => (
  <svg
    width={props.width || '48px'}
    height={props.height || '48px'}
    viewBox='0 0 22 21'
  >
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g fill={props.color || '#C1C1C1'} fillRule='nonzero'>
        <path d='M21.72437,10.2459714 C22.1231722,9.81351651 22.0846617,9.15069235 21.6383848,8.76589514 L11.8063084,0.28338633 C11.3600314,-0.101410884 10.6445397,-0.093350082 10.2076574,0.301558488 L0.342162175,9.21814853 C-0.0947201931,9.6130571 -0.116162712,10.2750328 0.294687433,10.6961036 L0.542029405,10.9500895 C0.952377552,11.3711604 1.61566137,11.4213636 2.02256724,11.0618801 L2.75986002,10.4108643 L2.75986002,19.941843 C2.75986002,20.5266047 3.24041628,21 3.8330617,21 L7.67865923,21 C8.27130465,21 8.75186091,20.5266047 8.75186091,19.941843 L8.75186091,13.2740045 L13.6569627,13.2740045 L13.6569627,19.941843 C13.6484287,20.5261804 14.0724743,20.9995757 14.6651197,20.9995757 L18.7404892,20.9995757 C19.3331347,20.9995757 19.8136909,20.5261804 19.8136909,19.9414188 L19.8136909,10.5450696 C19.8136909,10.5450696 20.017359,10.7209931 20.2685735,10.9387054 C20.5193578,11.1559935 21.0460979,10.9817671 21.4449001,10.5488879 L21.72437,10.2459714 Z' />
      </g>
    </g>
  </svg>
)

export default Home
