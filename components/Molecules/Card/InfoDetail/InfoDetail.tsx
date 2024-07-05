"use client";
import { animated, useSpring } from "react-spring";
import styles from "./InfoDetail.module.css";
import { propsAnimation } from "utils/animation";

interface IInfoDetail {
  title: string;
  data: string[];
}

export const InfoDetail = ({ title, data }: IInfoDetail) => {
  const propsAnimate = useSpring(propsAnimation);

  return (
    <animated.div style={propsAnimate}>
      <section className={styles.section}>
        <h2>{title}</h2>
        <ul>
          {data &&
            data.map((item: any) => {
              return <li>{item}</li>;
            })}
        </ul>
      </section>
    </animated.div>
  );
};
