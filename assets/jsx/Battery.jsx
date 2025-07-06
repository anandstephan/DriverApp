import * as React from "react";
import Svg, { Rect, Defs, Pattern, Use, Image } from "react-native-svg";
const Battery = (props) => (
  <Svg
    width={48}
    height={43}
    viewBox="0 0 48 43"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Rect width={48} height={43} fill="url(#pattern0_128_19)" />
    <Defs>
      <Pattern
        id="pattern0_128_19"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use
          xlinkHref="#image0_128_19"
          transform="matrix(0.0078125 0 0 0.00872093 0 -0.0581395)"
        />
      </Pattern>
      <Image
        id="image0_128_19"
        width={128}
        height={128}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
);
export default Battery;
