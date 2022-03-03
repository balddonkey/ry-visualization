
import React, {useState, useLayoutEffect, useEffect} from 'react'
import { connect } from 'react-redux';
import { curry } from '../../utils/util';
import styles from './index.module.scss';

/**
 * 使 WappedComponent 组件支持缩放
 * @param {{width: Number, height: Number}} s 容器宽高，固定宽高，等比缩放
 */
const withScaleWrapper = (size) => {
  
  const { width, height } = size;
  /**
   * @param {T} WrappedComponent 组件
   * @returns {(props: React.HTMLAttributes) => T} 
   */
  return (WrappedComponent) => {
    return (props) => {
      const { ...otherProps } = props;
      const w = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;
      const h = window.innerHeight
      || document.documentElement.clientHeight
      || document.body.clientHeight;
      const [scale, setScale] = useState(Math.min(w / width, h / height));

      useEffect(() => {
        console.log('use layout effect')
        window.addEventListener('resize', (ev) => {
          console.log('resize:', ev);
          const w = window.innerWidth
          || document.documentElement.clientWidth
          || document.body.clientWidth;
          const h = window.innerHeight
          || document.documentElement.clientHeight
          || document.body.clientHeight;
          setScale(Math.min(w / width, h / height));
        })
        return () => {
          window.removeEventListener('resize')
        };
      }, [])

      return (
        <div className={styles['wrapper']} style={{width, height, transform: `scale(${scale})`, transformOrigin: "50% 0"}}>
          <WrappedComponent {...otherProps}/>
        </div>
      );
    }
  };
}

export {
  withScaleWrapper
}