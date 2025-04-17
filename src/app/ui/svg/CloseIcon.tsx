import * as React from "react"
const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
            d="m18 18-6-6m0 0L6 6m6 6 6-6m-6 6-6 6"
        />
    </svg>
)
export default CloseIcon
