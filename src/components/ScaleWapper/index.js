
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
  console.log("网页可见区域宽(body)", document.body.clientWidth);        //网页可见区域宽(body)

  console.log("网页可见区域高(body)", document.body.clientHeight);       //网页可见区域高(body)

  console.log("网页可见区域宽(body)，包括border、margin等", document.body.offsetWidth);       //网页可见区域宽(body)，包括border、margin等

  console.log("网页可见区域宽(body)，包括border、margin等", document.body.offsetHeight);      //网页可见区域宽(body)，包括border、margin等

  console.log("网页正文全文宽，包括有滚动条时的未见区域", document.body.scrollWidth);        //网页正文全文宽，包括有滚动条时的未见区域

  console.log("网页正文全文高，包括有滚动条时的未见区域", document.body.scrollHeight);       //网页正文全文高，包括有滚动条时的未见区域

  console.log("网页被卷去的Top(滚动条)", document.body.scrollTop);           //网页被卷去的Top(滚动条)

  console.log("网页被卷去的Left(滚动条)", document.body.scrollLeft);           //网页被卷去的Left(滚动条)

  console.log("浏览器距离Top", window.screenTop);                     //浏览器距离Top

  console.log("浏览器距离Left", window.screenLeft);                     //浏览器距离Left

  console.log("屏幕分辨率的高", window.screen.height);                //屏幕分辨率的高

  console.log("屏幕分辨率的宽", window.screen.width);                 //屏幕分辨率的宽

  console.log("屏幕可用工作区的高", window.screen.availHeight);          //屏幕可用工作区的高

  console.log("屏幕可用工作区的宽", window.screen.availWidth);           //屏幕可用工作区的宽
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
      const [scale, setScale] = useState(w / width);

      useEffect(() => {
        console.log('use layout effect')
        window.addEventListener('resize', (ev) => {
          console.log('resize:', ev);
          const w = window.innerWidth
          || document.documentElement.clientWidth
          || document.body.clientWidth;
          setScale(w / width);
        })
        return () => {
          window.removeEventListener('resize')
        };
      }, [])

      return (
        <div className={styles['wrapper']} style={{width, height, transform: `scale(${scale})`, transformOrigin: "0 0"}}>
          <WrappedComponent {...otherProps}/>
        </div>
      );
    }
  };
}

export {
  withScaleWrapper
}