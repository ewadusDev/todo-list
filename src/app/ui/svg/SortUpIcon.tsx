import * as React from "react"
const SortUpIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
            d="M4 17h12M4 12h9M4 7h6m8 6V5m0 0 3 3m-3-3-3 3"
        />
    </svg>
)
export default SortUpIcon
