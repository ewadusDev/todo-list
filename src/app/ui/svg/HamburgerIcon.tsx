import * as React from "react"
const HamburgerIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={800}
        height={800}
        fill="none"
        viewBox="0 0 24 24"
        {...props}
    >
        <path
            stroke="#1C274C"
            strokeLinecap="round"
            strokeWidth={1.5}
            d="M20 7H4M20 12H4M20 17H4"
        />
    </svg>
)
export default HamburgerIcon
