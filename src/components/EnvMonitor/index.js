
import React from 'react'
import styles from './index.module.scss'

const configs = [
  { src: 'u10.png', title: '温度', unit: '℃', value: 3 },
  { src: 'u13.png', title: '湿度', unit: '%RH', value: 60 },
  { src: 'u16.png', title: '噪音', unit: 'dB', value: 20 },
  { src: 'u19.png', title: '甲醛', unit: 'mg/m3', value: 0.08 },
  { src: 'u22.png', title: 'PM2.5', unit: 'mg/m3', value: 8 },
  { src: 'u25.png', title: '二氧化碳浓度', unit: 'PPM', value: 400 },
  { src: 'u28.png', title: 'TVOC浓度', unit: 'mg/m3', value: 1.2 },
]

const EnvMonitor = (props) => {
  return (
    <div className={styles['container']}>
      { configs.map(v => {
        return (
          <div className={styles['item']}>
            <img className={styles['icon']} src={require(`../../assets/${v.src}`)}/>
            <p className={styles['text']}>{v.title}: {v.value} {v.unit}</p>
          </div>
        )
      })}
    </div>
  )
}

export default EnvMonitor