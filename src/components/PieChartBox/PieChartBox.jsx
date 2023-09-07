"use client";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import styles from "./pieChartBox.module.css";

const PieChartBox = ({ data }) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <span>Leads By Source</span>
      </div>
      <div className={styles.mid}>
        <ResponsiveContainer width="99%" height="100%">
          <PieChart>
            <Tooltip
              contentStyle={{
                background: "#fff",
                fontSize: "0.8rem",
                borderColor: "rgba(50,50,50,0.25)",
                borderRadius: "5px",
              }}
            />
            <Pie
              data={data}
              innerRadius={70}
              outerRadius={85}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className={styles.bottom}>
        <div className={styles.infos}>
          {data.map((item) => {
            return (
              <div className={styles.info} key={item.name}>
                <div
                  style={{ background: item.color }}
                  className={styles.color}
                ></div>
                <p className={styles.text}>{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PieChartBox;
