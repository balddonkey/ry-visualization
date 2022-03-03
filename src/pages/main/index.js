

import React from 'react'
import { Chart as LineChart } from '../../components/Charts';
import { GradientBGPanel, PureBGPanel } from '../../components/Panel';
import { withScaleWrapper } from '../../components/ScaleWapper';
import style from './index.module.scss';

const Main = (props) => {

  const { ...otherProps } = props;
  
  return (
    <div className={style['container']} {...otherProps}>
      <div className={style['top']}>
          <span className={style['image']}>
            <img src={require('../../assets/title-left.png')}/>
          </span>
          <span className={style['text']}>锐耀可视化大屏</span>
          <span className={style['image']}>
            <img src={require('../../assets/title-right.png')} />
          </span>
      </div>
      <div className={style['panel-container']}>
        <PureBGPanel className={style['panel']}>
          <LineChart />
        </PureBGPanel>
        <GradientBGPanel className={style['panel-gradient']}/>
        <PureBGPanel className={style['panel']}/>
        <GradientBGPanel className={style['panel-gradient']}/>
      </div>
    </div>
  )
}

export default withScaleWrapper({width: 1920, height: 1080})(Main);