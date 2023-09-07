"use client";
import { Bar, BarChart, ResponsiveContainer, Tooltip } from "recharts";
import styles from "./barChartBox.module.css";

const BarChartBox = ({ title, color, dataKey, chartData }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <span>{title}</span>
      </div>
      <div className={styles.bottom}>
        <ResponsiveContainer width="99%" height="100%">
          <BarChart data={chartData}>
            <Tooltip
              contentStyle={{
                background: "#fff",
                fontSize: "0.8rem",
                borderColor: "rgba(50,50,50,0.25)",
                borderRadius: "5px",
              }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <Bar dataKey={dataKey} fill={color}></Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;
