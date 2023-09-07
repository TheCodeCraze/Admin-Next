"use client";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";
import styles from "./lineChartBox.module.css";

const LineChartBox = ({
  title,
  number,
  color,
  dataKey,
  chartData,
  percentage,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <span>{title}</span>
        <p>{number}</p>
      </div>
      <div className={styles.mid}>
        <ResponsiveContainer width="99%" height="100%">
          <LineChart data={chartData}>
            <Tooltip
              contentStyle={{
                fontSize: "0.8rem",
                background: "none",
                border: "none",
              }}
              labelStyle={{ display: "none" }}
              position={{ x: -5, y: 40 }}
            />
            <Line
              type="monotone"
              dataKey={dataKey}
              stroke={color}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className={styles.bottom}>
        <span style={{ color: percentage > 0 ? "limegreen" : "tomato" }}>
          {`${percentage}%`}
        </span>
        <p style={{ color: `${color}` }}>View all</p>
      </div>
    </div>
  );
};

export default LineChartBox;
