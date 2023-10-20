import * as React from "react"
import Svg, { G, Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <G
      opacity={0.8}
      style={{
        mixBlendMode: "difference",
      }}
    >
      <G
        style={{
          mixBlendMode: "darken",
        }}
      >
        <Path
          fill="#EAE6E5"
          fillOpacity={0.8}
          d="M46.763 47.362c3.359-5.038 9.71-6.997 13.074-6.997h23.545c5.382 0 6.077 3.498 3.745 6.997l-22.39 33.584H95.01c5.382 0 6.077 3.499 4.21 6.297l-11.66 17.492c-3.359 5.038-8.87 6.997-13.074 6.997H12.259c-4.71 0-6.544-2.799-4.678-5.597l39.182-58.773Z"
        />
        <Path
          stroke="#EAE6E5"
          d="M46.763 47.362c3.359-5.038 9.71-6.997 13.074-6.997h23.545c5.382 0 6.077 3.498 3.745 6.997l-22.39 33.584H95.01c5.382 0 6.077 3.499 4.21 6.297l-11.66 17.492c-3.359 5.038-8.87 6.997-13.074 6.997H12.259c-4.71 0-6.544-2.799-4.678-5.597l39.182-58.773Z"
        />
      </G>
      <G
        style={{
          mixBlendMode: "darken",
        }}
      >
        <Path
          fill="#EAE6E5"
          fillOpacity={0.8}
          d="M42.914 6.997C46.272 1.959 52.624 0 55.987 0h23.546c5.382 0 6.076 3.498 3.744 6.997L60.887 40.58H91.16c5.382 0 6.077 3.499 4.211 6.297L83.71 64.37c-3.358 5.038-8.87 6.997-13.074 6.997H8.41c-4.709 0-6.543-2.799-4.677-5.597L42.914 6.997Z"
        />
        <Path
          stroke="#EAE6E5"
          d="M42.914 6.997C46.272 1.959 52.624 0 55.987 0h23.546c5.382 0 6.076 3.498 3.744 6.997L60.887 40.58H91.16c5.382 0 6.077 3.499 4.211 6.297L83.71 64.37c-3.358 5.038-8.87 6.997-13.074 6.997H8.41c-4.709 0-6.543-2.799-4.677-5.597L42.914 6.997Z"
        />
      </G>
    </G>
  </Svg>
)
export default SvgComponent