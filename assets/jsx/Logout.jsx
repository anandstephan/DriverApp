import * as React from "react";
import Svg, { Path } from "react-native-svg";
const Logout = (props) => (
  <Svg
    width={17}
    height={18}
    viewBox="0 0 17 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M6.375 15.375H3.54167C3.16594 15.375 2.80561 15.2257 2.53993 14.9601C2.27426 14.6944 2.125 14.3341 2.125 13.9583V4.04167C2.125 3.66594 2.27426 3.30561 2.53993 3.03993C2.80561 2.77426 3.16594 2.625 3.54167 2.625H6.375M11.3333 12.5417L14.875 9M14.875 9L11.3333 5.45833M14.875 9H6.375"
      stroke="black"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default Logout;
