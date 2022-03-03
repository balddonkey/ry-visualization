


import React from 'react'
import styles from './index.module.scss';

const PureBGPanel = (props) => {
  const { title = '一个标题', className, children, ...otherProps } = props;
  return (
    <div className={`${styles['container']} ${className}`} {...otherProps}>
      <i className='tl'></i>
      <i className='tr'></i>
      <i className='bl'></i>
      <i className='br'></i>
      <div className={styles['title-container']}>
        <b className={styles['title-square-brackets']}>[</b>
        <span className={styles['title']}>{title}</span>
        <b className={styles['title-square-brackets']}>]</b>
      </div>
      <div className={styles['chart-container']}>
        {children}
      </div>
    </div>
  )
}

const GradientBGPanel = (props) => {
  
  const { title = '一个标题', className, children, ...otherProps } = props;
  return (
    <div className={`${styles['container']} ${styles['container-gradient-bg']} ${className}`} {...otherProps}>
      <i className='tl'></i>
      <i className='tr'></i>
      <i className='bl'></i>
      <i className='br'></i>
      <div className={styles['title']}>{title}</div>
      <div className={styles['chart-container']}>
        {children}
      </div>
    </div>
  )
}

export {
  PureBGPanel,
  GradientBGPanel,
}