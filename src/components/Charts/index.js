import { useCallback } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, ReferenceLine, ReferenceArea,
  ReferenceDot, Tooltip, CartesianGrid, Legend, Brush, ErrorBar, AreaChart, Area,
  Label, LabelList } from 'recharts';
import style from './index.module.scss';

const Chart = (props) => {
  const onChartReadyCallback = useCallback((p) => {
    console.log('callback:', p);
  }, [])
  const { data = [], legend } = props;
  return (
    <ResponsiveContainer className={style['line-chart']} width='100%' height='100%'>
      <LineChart
        width={400}
        height={300}
        data={data}
      >
        <XAxis dataKey="name" />
        <YAxis dataKey="v"/>
        <Tooltip />
        <Legend formatter={(p) => legend || "No legend"}/>
        {/* <CartesianGrid stroke="#f5f5f5" /> */}
        <Line type="monotone" dataKey="v" stroke="#ff7300" yAxisId={0}>
          <LabelList position="top" offset={10} dataKey="v" color='white' className='label-list'
            // content={ <div>呵呵呵</div>}
            fill='white'
            fontSize={11}
            formatter={data.labelFormat}
          />
        </Line>
      </LineChart>
    </ResponsiveContainer>
  )
}

export {
  Chart,
}
