import PropTypes from "prop-types";
import styles from "./Statistics.module.scss";
import React from "react";
import { ColorGenerator } from "./ColorGenerator";

export const Statistics = ({ title = "Upload stats", stats, color }) => (
  <section className={styles.statistics}>
    <h2 className={styles.title}>{title}</h2>
    <ul className={styles.statsList}>
      <li className={styles.item} style={{ backgroundColor: color }}>
        <span className={styles.label}>{stats[0].label}</span>
        <span className={styles.percentage}> {stats[0].percentage}%</span>
      </li>
      <li className={styles.item}>
        <span className={styles.label}>{stats[1].label}</span>
        <span className={styles.percentage}> {stats[1].percentage}%</span>
      </li>
      <li className={styles.item}>
        <span className={styles.label}>{stats[2].label}</span>
        <span className={styles.percentage}> {stats[2].percentage}%</span>
      </li>
      <li className={styles.item}>
        <span className={styles.label}>{stats[3].label}</span>
        <span className={styles.percentage}> {stats[3].percentage}%</span>
      </li>
      <li className={styles.item}>
        <span className={styles.label}>{stats[4].label}</span>
        <span className={styles.percentage}> {stats[4].percentage}%</span>
      </li>
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
