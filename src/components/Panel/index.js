


import React from 'react'
import styles from './index.module.scss';

const PureBGPanel = (props) => {
  const { className, ...otherProps } = props;
  return (
    <div className={`${styles['container']} ${className}`} {...otherProps}>
      <i className='tl'></i>
      <i className='tr'></i>
      <i className='bl'></i>
      <i className='br'></i>
    </div>
  )
}

const GradientBGPanel = (props) => {
  
  const { className, ...otherProps } = props;
  return (
    <div className={`${styles['container']} ${styles['container-gradient-bg']} ${className}`} {...otherProps}>
      <i className='tl'></i>
      <i className='tr'></i>
      <i className='bl'></i>
      <i className='br'></i>
    </div>
  )
}

export {
  PureBGPanel,
  GradientBGPanel,
}