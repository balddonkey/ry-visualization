

import React from 'react'
import { withScaleWrapper } from '../../components/ScaleWapper';
import style from './index.module.scss';

const Main = (props) => {

  const { ...otherProps } = props;
  
  return (
    <div className={style['container']} {...otherProps}>
      main
    </div>
  )
}

export default withScaleWrapper({width: 1920, height: 1080})(Main);