


import React from 'react'
import styles from './index.module.scss';

const Title = (props) => {
  const { title } = props;
  return (
    <div className={styles['title-container']}>
      <b className={styles['title-square-brackets']}>[</b>
      <span className={styles['title']}>{title}</span>
      <b className={styles['title-square-brackets']}>]</b>
    </div>
  )
}

const Corner = (_) => {
  return (
    <>
      <i className='tl'></i>
      <i className='tr'></i>
      <i className='bl'></i>
      <i className='br'></i>
    </>
  )
}

const PureBGPanel = (props) => {
  const { title, className, children, ...otherProps } = props;
  return (
    <div className={`${styles['container']} ${className}`} {...otherProps}>
      <Corner />
      { title && <Title title={title}/>}
      <div className={styles['chart-container']}>
        {children}
      </div>
    </div>
  )
}

const GradientBGPanel = (props) => {
  
  const { title, className, children, ...otherProps } = props;
  return (
    <div className={`${styles['container']} ${styles['container-gradient-bg']} ${className}`} {...otherProps}>
      <Corner />
      { title && <Title title={title}/>}
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