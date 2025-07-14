import * as React from "react";
import Svg, { Rect, Defs, Pattern, Use, Image } from "react-native-svg";
const Document = (props) => (
  <Svg
    width={16}
    height={17}
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Rect width={16} height={17} fill="url(#pattern0_421_27170)" />
    <Defs>
      <Pattern
        id="pattern0_421_27170"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use
          xlinkHref="#image0_421_27170"
          transform="matrix(0.00830078 0 0 0.0078125 -0.03125 0)"
        />
      </Pattern>
      <Image
        id="image0_421_27170"
        width={128}
        height={128}
        preserveAspectRatio="none"
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
);
export default Document;
