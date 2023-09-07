"use client";
import LineChartBox from "@/components/LineChartBox/LineChartBox";
import styles from "./page.module.css";
import {
  areaChartRevenue,
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
  pieChartdata,
  topDealUsers,
} from "@/lib/data";
import BarChartBox from "@/components/BarChartBox/BarChartBox";
import AreaChartBox from "@/components/AreaChartBox/AreaChartBox";
import PieChartBox from "@/components/PieChartBox/PieChartBox";
import TopDealBox from "@/components/TopDealBox/TopDealBox";
import { useContext } from "react";
import { UserContext } from "@/context/UserContext";
import Link from "next/link";

const Home = () => {
  const { user } = useContext(UserContext);
  return user ? (
    <div className={styles.userContainer}>
      <div className={`${styles.box} ${styles.box1}`}>
        <TopDealBox data={topDealUsers} />
      </div>
      <div className={`${styles.box} ${styles.box2}`}>
        <LineChartBox {...chartBoxUser} />
      </div>
      <div className={`${styles.box} ${styles.box3}`}>
        <LineChartBox {...chartBoxProduct} />
      </div>
      <div className={`${styles.box} ${styles.box4}`}>
        <PieChartBox data={pieChartdata} />
      </div>
      <div className={`${styles.box} ${styles.box5}`}>
        <LineChartBox {...chartBoxConversion} />
      </div>
      <div className={`${styles.box} ${styles.box6}`}>
        <LineChartBox {...chartBoxRevenue} />
      </div>
      <div className={`${styles.box} ${styles.box7}`}>
        <BarChartBox {...barChartBoxVisit} />
      </div>
      <div className={`${styles.box} ${styles.box8}`}>
        <AreaChartBox data={areaChartRevenue} />
      </div>
      <div className={`${styles.box} ${styles.box9}`}>
        <BarChartBox {...barChartBoxRevenue} />
      </div>
    </div>
  ) : (
    <div className={styles.noUserContainer}>
      <Link href="/login" className={styles.noUser}>
        Kindly Log in to see the Dashboard!
      </Link>
    </div>
  );
};

export default Home;
