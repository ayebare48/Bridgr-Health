import React from "react";
import { useTheme } from "@mui/material";

const BoxSvg = () => {
  const theme = useTheme();
  return (
    <div>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <mask
          id="mask0_1648_12040"
          style="mask-type:alpha"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="20"
          height="20"
        >
          <rect width="20" height="20" fill="url(#pattern0)" />
        </mask>
        <g mask="url(#mask0_1648_12040)">
          <rect
            x="-1.25"
            y="-2.1875"
            width="21.25"
            height="24.2188"
            fill={theme.palette.primary.main}
          />
        </g>
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_1648_12040" transform="scale(0.0078125)" />
          </pattern>
          <image
            id="image0_1648_12040"
            width="128"
            height="128"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    </div>
  );
};

export default BoxSvg;
