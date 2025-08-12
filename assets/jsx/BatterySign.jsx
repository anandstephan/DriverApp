import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";
const BatterySign = (props) => (
  <Svg
    width={25}
    height={12}
    viewBox="0 0 25 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect
      opacity={0.35}
      x={0.5}
      y={0.5}
      width={21}
      height={10.3333}
      rx={2.16667}
      stroke="#101010"
    />
    <Path
      opacity={0.4}
      d="M23 3.6665V7.6665C23.8047 7.32773 24.328 6.53964 24.328 5.6665C24.328 4.79337 23.8047 4.00528 23 3.6665Z"
      fill="#101010"
    />
    <Rect x={2} y={2} width={18} height={7.33333} rx={1.33333} fill="#34C759" />
  </Svg>
);
export default BatterySign;
