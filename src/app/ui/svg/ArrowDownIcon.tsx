import * as React from "react"
const ArrowDownIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
            strokeWidth={1}
            d="m19 9-7 7-7-7"
        />
    </svg>
)
export default ArrowDownIcon
