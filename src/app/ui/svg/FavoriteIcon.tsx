import * as React from "react"
const FavoriteIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
  xmlns="http://www.w3.org/2000/svg"
  width={800}
  height={800}
  fill="none"
  viewBox="0 0 24 24"
  {...props}
>
  <path
    stroke="#000"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={1}
    d="M12 7.694C10 3 3 3.5 3 9.5s9 11 9 11 9-5 9-11-7-6.5-9-1.806Z"
  />
</svg>
)
export default FavoriteIcon
