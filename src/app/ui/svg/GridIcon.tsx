import * as React from "react"
const GridIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={800}
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="#1C78C3"
      fillRule="evenodd"
      d="M7 1H1v6h6V1Zm0 8H1v6h6V9Zm2-8h6v6H9V1Zm6 8H9v6h6V9Z"
      clipRule="evenodd"
    />
  </svg>
)
export default GridIcon
