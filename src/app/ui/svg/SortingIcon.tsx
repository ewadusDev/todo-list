import * as React from "react"
const SoringIcon = (props: React.SVGProps<SVGSVGElement>) => (
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
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M16 18V6m0 0 4 4.125M16 6l-4 4.125M8 6v12m0 0 4-4.125M8 18l-4-4.125"
        />
    </svg>
)
export default SoringIcon
