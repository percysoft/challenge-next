"use client";

import { propsAnimation } from 'utils/animation';
import styles from './Title.module.css';
import { animated, useSpring } from "react-spring";
import { ReactNode } from 'react';

interface ITitle {
  children: ReactNode
}
export const Title = ({ children }: ITitle) => {
  const propsAnimate = useSpring(propsAnimation);

  return (
    <animated.div style={propsAnimate}>
      <h1 className={styles.title}>{children}</h1>
    </animated.div>
  );
};
