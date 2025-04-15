import * as React from "react"
const SortDownIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke={props.stroke || "#000"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 17h6m-6-5h9m5-1v8m0 0 3-3m-3 3-3-3M4 7h12"
    />
  </svg>
)
export default SortDownIcon
