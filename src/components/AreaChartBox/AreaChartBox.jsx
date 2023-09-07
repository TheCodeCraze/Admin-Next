"use client";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import styles from "./areaChartBox.module.css";

const AreaChartBox = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <span>Revenue</span>
      </div>
      <div className={styles.bottom}>
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart data={data}>
            <Tooltip
              contentStyle={{
                background: "#fff",
                fontSize: "0.8rem",
                borderColor: "rgba(50, 50, 50,0.25)",
                borderRadius: "5px",
              }}
              labelStyle={{ display: "none" }}
            />
            <XAxis dataKey="name" fontSize="0.75rem" />
            <YAxis fontSize="0.75rem" />
            <Area
              type="monotone"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
              dataKey="books"
            />
            <Area
              type="monotone"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
              dataKey="shoes"
            />
            <Area
              type="monotone"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
              dataKey="electronic"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default AreaChartBox;
