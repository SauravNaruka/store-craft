import {getIconCommanProps} from '@helpers/iconProp.helper'
import type {IconPropType} from '../../types/interfaces'

export const FacebookIcon = (props: IconPropType) => (
  <svg
    {...getIconCommanProps(props)}
    fill="var(--color-neutral-4)"
    width="24px"
    height="24px"
    viewBox="0 180 1200 1200"
    {...props}
  >
    <g transform="matrix(1.3333333,0,0,-1.3333333,0,1365.3333)">
      <g id="g10" transform="scale(0.1)">
        <path
          fill="none"
          d="m 10240,5120 c 0,2827.7 -2292.3,5120 -5120,5120 C 2292.3,10240 0,7947.7 0,5120 0,2564.46 1872.31,446.301 4320,62.1992 V 3640 H 3020 v 1480 h 1300 v 1128 c 0,1283.2 764.38,1992 1933.9,1992 560.17,0 1146.1,-100 1146.1,-100 V 6880 H 6754.38 C 6118.35,6880 5920,6485.33 5920,6080.43 V 5120 H 7340 L 7113,3640 H 5920 V 62.1992 C 8367.69,446.301 10240,2564.46 10240,5120"
        />
        <path d="m 7113,3640 227,1480 H 5920 v 960.43 c 0,404.9 198.35,799.57 834.38,799.57 H 7400 v 1260 c 0,0 -585.93,100 -1146.1,100 C 5084.38,8240 4320,7531.2 4320,6248 V 5120 H 3020 V 3640 H 4320 V 62.1992 C 4580.67,21.3008 4847.84,0 5120,0 c 272.16,0 539.33,21.3008 800,62.1992 V 3640 h 1193" />
      </g>
    </g>
  </svg>
)

export default FacebookIcon
