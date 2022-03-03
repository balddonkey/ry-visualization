import { useCallback } from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, ReferenceLine, ReferenceArea,
  ReferenceDot, Tooltip, CartesianGrid, Legend, Brush, ErrorBar, AreaChart, Area,
  Label, LabelList } from 'recharts';
import style from './index.module.scss';

const data = [
  { name: 'Page A', uv: 300, pv: 2600, amt: 3400 },
  { name: 'Page B', uv: 400, pv: 4367, amt: 6400 },
  { name: 'Page C', uv: 300, pv: 1398, amt: 2400 },
  { name: 'Page D', uv: 200, pv: 9800, amt: 2400 },
  { name: 'Page E', uv: 278, pv: 3908, amt: 2400 },
  { name: 'Page F', uv: 189, pv: 4800, amt: 2400 },
  { name: 'Page G', uv: 189, pv: 4800, amt: 2400 },
];

const Chart = (props) => {
  const onChartReadyCallback = useCallback((p) => {
    console.log('callback:', p);
  }, [])
  return (
    <ResponsiveContainer 
    className={style['line-chart']}>
      <LineChart
        data={data}
        margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
      >
        <XAxis dataKey="name" />
        <Tooltip />
        {/* <CartesianGrid stroke="#f5f5f5" /> */}
        <Line type="monotone" dataKey="uv" stroke="#ff7300" yAxisId={0} />
        <Line type="monotone" dataKey="pv" stroke="#387908" yAxisId={1} />
      </LineChart>
    </ResponsiveContainer>
  )
}

export {
  Chart,
}
