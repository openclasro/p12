import PropTypes from 'prop-types';
import { Radar, RadarChart, PolarGrid, PolarRadiusAxis, PolarAngleAxis, ResponsiveContainer } from 'recharts';
import './radarperformance.css';
/**
 * Component that display a radar
 * chart with each kind of user performance
 * @param {Object} props performancies props
 * @param {Object[]} props.performance array of object that contain performance types and their values
 * @param {number} props.performance.value user performance
 * @param {string} props.performance.kind kind of performance
 * @returns {JSX.Element}  A RadarPerformance component
 */
const RadarPerformance = ({ data }) => {
  return (
    <div className="radar">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          data={data}
          margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis
            dataKey="kind"
            tickSize={15}
            tick={{ fill: "white", fontFamily: "Roboto", fontWeight: 500, fontSize: 12 }}
          />
          <PolarRadiusAxis tickCount={6} tick={false} axisLine={false} />
          <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

RadarPerformance.propTypes = {
  performance: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.number,
      kind: PropTypes.string
    })
  ),
}

export default RadarPerformance