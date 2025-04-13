import * as React from "react"
const CheckedIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={800}
        height={800}
        fill="#1C78C3"
        stroke="#000"
        viewBox="0 0 64 64"
        {...props}
    >
        <circle cx={32} cy={32} r={24} />
        <path d="M44 24 28 40l-8-8" />
    </svg>
)
export default CheckedIcon
