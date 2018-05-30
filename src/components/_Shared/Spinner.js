import React from "react";

export const Spinner = ({ float, size }) => (
  <div
    className={"loader " + float}
    style={{ width: size, height: size }}
  />
);
