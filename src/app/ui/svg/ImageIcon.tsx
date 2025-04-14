import * as React from "react"
const ImageIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={800}
        height={800}
        fill="none"
        viewBox="0 0 24 24"
        {...props}
    >
        <path fill="#fff" d="M0 0h24v24H0z" />
        <path
            stroke="#000"
            strokeLinejoin="round"
            d="M21 16v4a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2m18-2V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v14m18-2-5.517-3.678a1 1 0 0 0-1.002-.063L3 18"
        />
        <circle cx={8} cy={9} r={2} stroke="#000" strokeLinejoin="round" />
    </svg>
)
export default ImageIcon
