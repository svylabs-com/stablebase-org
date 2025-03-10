import { Box } from "@mantine/core";
import clsx from "clsx";
import React from "react";
import styles from "./GradientBackgroundContainer.module.scss";
type Props = {
  children: React.ReactNode;
  colorLeft?: string;
  colorRight?: string;
  bgImage?: string;
  radius?: number;
};

const GradientBackgroundContainer = ({
  children,
  colorLeft,
  colorRight,
  bgImage,
  radius = 20,
}: Props) => {
  return (
    <Box className={styles.root} style={{ borderRadius: radius }}>
      <div className={styles.layer}></div>
      <div
        className={clsx(styles.gradientLayer, styles.left)}
        style={{ background: colorLeft }}
      ></div>
      <div
        className={clsx(styles.gradientLayer, styles.right)}
        style={{ background: colorRight }}
      ></div>
      <div style={{ position: "relative", zIndex: 3 }}>{children}</div>
    </Box>

  );
};

export default GradientBackgroundContainer;
