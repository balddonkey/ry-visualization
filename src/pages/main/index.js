

import React, { useCallback, useState } from 'react'
import { Chart as LineChart } from '../../components/Charts';
import EnvMonitor from '../../components/EnvMonitor';
import { GradientBGPanel, PureBGPanel } from '../../components/Panel';
import { withScaleWrapper } from '../../components/ScaleWapper';
import style from './index.module.scss';

const _MakeData = ({count, makeTitle, makeValue, makeLabel, legend}) => {
  const data = [];
  const prev = 0;
  for (let i = 0; i < count; i++) {
    const t = makeTitle(i);
    const v = makeValue(i, prev);
    const labelFormat = makeLabel ? makeLabel(i, v) : v;
    data.push({
      name: t,
      v, labelFormat,
      legend,
    });
  }
  return data;
}

const YearPowerData = _MakeData({
  count: 12,
  makeTitle: (i) => {
    return `${i + 1}月`
  }, 
  makeValue: (i, p) => {
    return 500 + Math.ceil(Math.random() * 400);
  },
});

const MonthPowerData = _MakeData({
  count: 30,
  makeTitle: (i) => {
    return `${i + 1}日`
  }, 
  makeValue: (i, p) => {
    return 30 + Math.ceil(Math.random() * 30);
  },
});

const WaterTempData = _MakeData({
  count: 24,
  makeTitle: (i) => {
    return `${i + 1}时`
  }, 
  makeValue: (i, p) => {
    return 30 + Math.ceil(Math.random() * 30);
  },
});

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
        <div className={style['item']}>
          <p className={style['title']}>热泵主机</p>
          <PureBGPanel className={style['panel']} title={"耗电量（2021年）"}>
            <LineChart data={YearPowerData} legend='度'/>
          </PureBGPanel>
        </div>
        <div className={style['item']}>
          <p className={style['title']}>环境监测</p>
          <GradientBGPanel className={style['panel-gradient']}>
            <EnvMonitor />
          </GradientBGPanel>
        </div>
        <div className={style['item']}>
          <p className={style['title']}>{' '}</p>
          <PureBGPanel className={style['panel']} title={"耗电量（2022年1月）"}>
            <LineChart data={MonthPowerData} legend='度'/>
          </PureBGPanel>
        </div>
        <div className={style['item']}>
          <p className={style['title']}>无线供回水</p>
          <PureBGPanel className={style['panel-gradient']} title={"无线供回水"}>
            <LineChart data={WaterTempData} legend='摄氏度'/>
          </PureBGPanel>
        </div>
      </div>
    </div>
  )
}

export default withScaleWrapper({width: 1920, height: 1080})(Main);