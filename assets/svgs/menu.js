import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none">
    <Path
      stroke="#EAE6E5"
      strokeWidth={2.01}
      d="M18 20.667c0-2.515 0-3.772.781-4.553.781-.78 2.038-.78 4.552-.78 2.515 0 3.772 0 4.553.78.78.781.78 2.038.78 4.553v2.666c0 2.515 0 3.772-.78 4.553-.781.78-2.038.78-4.553.78-2.514 0-3.77 0-4.552-.78C18 27.105 18 25.848 18 23.333v-2.666ZM2.667 11.333c0 2.514 0 3.772.78 4.553.782.78 2.039.78 4.553.78s3.771 0 4.552-.78c.781-.781.781-2.038.781-4.553V8.667c0-2.514 0-3.772-.78-4.553-.782-.78-2.039-.78-4.553-.78s-3.771 0-4.552.78c-.781.781-.781 2.039-.781 4.553v2.666Z"
    />
    <Path
      stroke="#EAE6E5"
      strokeWidth={1.5}
      d="M18 7.333c0-1.242 0-1.863.203-2.353.27-.654.79-1.173 1.443-1.444.49-.203 1.111-.203 2.354-.203h2.667c1.242 0 1.863 0 2.353.203.654.271 1.173.79 1.444 1.444.203.49.203 1.11.203 2.353s0 1.864-.203 2.354a2.667 2.667 0 0 1-1.444 1.443c-.49.203-1.11.203-2.353.203H22c-1.242 0-1.864 0-2.354-.203a2.667 2.667 0 0 1-1.443-1.443C18 9.197 18 8.576 18 7.333ZM2.667 24.667c0 1.242 0 1.863.203 2.353.27.654.79 1.173 1.443 1.444.49.203 1.111.203 2.354.203h2.666c1.243 0 1.864 0 2.354-.203a2.667 2.667 0 0 0 1.443-1.444c.203-.49.203-1.11.203-2.353s0-1.864-.203-2.354a2.667 2.667 0 0 0-1.443-1.443c-.49-.203-1.111-.203-2.354-.203H6.667c-1.243 0-1.864 0-2.354.203-.654.27-1.173.79-1.443 1.443-.203.49-.203 1.111-.203 2.354Z"
    />
  </Svg>
)
export default SvgComponent