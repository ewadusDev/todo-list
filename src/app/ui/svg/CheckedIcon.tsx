import * as React from "react"
const CheckedIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
            d="m15 10-4 4-2-2m3 9a9 9 0 1 1 0-18 9 9 0 0 1 0 18Z"
        />
    </svg>
)
export default CheckedIcon
