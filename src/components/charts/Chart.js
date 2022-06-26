import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const dataPointValueArray = props.dataPoints.map((element) => element.value);
  const totalMaximum = Math.max(...dataPointValueArray);

  return (
    <div className="chart">
      {props.dataPoints.map((element) => (
        <ChartBar
          key={element.label} //using months as a unique key
          value={element.value}
          maxValue={totalMaximum}
          label={element.label}
        />
      ))}
    </div>
  );
};

export default Chart;
