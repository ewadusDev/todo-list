import * as React from "react"
const BentoIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    viewBox="0 0 24 24"
    {...props}
  >
    <title>{"Bento-Menu"}</title>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <rect width={4} height={4} x={16} y={4} fill="#030819" rx={1} />
      <rect width={4} height={4} x={10} y={4} fill="#030819" rx={1} />
      <rect width={4} height={4} x={16} y={10} fill="#030819" rx={1} />
      <rect width={4} height={4} x={10} y={10} fill="#030819" rx={1} />
      <rect width={4} height={4} x={16} y={16} fill="#030819" rx={1} />
      <rect width={4} height={4} x={10} y={16} fill="#030819" rx={1} />
      <rect width={4} height={4} x={4} y={4} fill="#030819" rx={1} />
      <rect width={4} height={4} x={4} y={10} fill="#030819" rx={1} />
      <rect width={4} height={4} x={4} y={16} fill="#030819" rx={1} />
    </g>
  </svg>
)
export default BentoIcon
