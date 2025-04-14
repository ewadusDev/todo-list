import * as React from "react"
const CheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
            d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0Z"
        />
    </svg>
)
export default CheckIcon
