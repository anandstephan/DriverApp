import * as React from "react";
import Svg, { Path } from "react-native-svg";
const CreditCard = (props) => (
  <Svg
    width={17}
    height={17}
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M1.41406 7.08366H15.5807M2.83073 3.54199H14.1641C14.9465 3.54199 15.5807 4.17626 15.5807 4.95866V12.042C15.5807 12.8244 14.9465 13.4587 14.1641 13.4587H2.83073C2.04833 13.4587 1.41406 12.8244 1.41406 12.042V4.95866C1.41406 4.17626 2.04833 3.54199 2.83073 3.54199Z"
      stroke="black"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default CreditCard;
