// import React from "react"

// export function PendingApprovalIcon({
//   color="#02C0DA", 
//   width, 
//   mr,
//   mt
// }: React.PropsWithChildren<{
//   color?:string, 
//   width?:string, 
//   mr?:number,
//   mt?:number
// }>) {
//   return (
//     <svg
//     viewBox="0 0 195 195"
//     fillRule="evenodd"
//     clipRule="evenodd"
//     strokeLinejoin="round"
//     strokeMiterlimit={2}
//     fill={color}
//     width={width}
//     style={{display:"inline-block", verticalAlign: "top", marginRight: mr, marginTop: mt }}
//     >
//       <path fill="none" d="M.006.003h194.447V194.45H.006z" />
//       <path
//         d="M32.623 153.72h-7.245a23.606 23.606 0 01-23.61-23.612V27.152a23.612 23.612 0 0123.61-23.61h141.956a23.612 23.612 0 0123.612 23.61v102.956a23.606 23.606 0 01-23.611 23.611H75.928l-31.09 36.3a6.942 6.942 0 01-12.217-4.522V153.72zm13.889 12.994l20.944-24.456a6.954 6.954 0 015.278-2.428h94.6a9.717 9.717 0 009.723-9.722V27.152a9.723 9.723 0 00-2.85-6.872 9.723 9.723 0 00-6.873-2.85H25.378a9.717 9.717 0 00-9.722 9.722v102.956a9.73 9.73 0 002.845 6.878 9.74 9.74 0 006.877 2.844h14.19a6.947 6.947 0 016.944 6.945v19.939zm4.194-105.956c8.761 0 15.878 7.111 15.878 15.878 0 8.766-7.117 15.883-15.878 15.883-8.766 0-15.883-7.117-15.883-15.883 0-8.767 7.117-15.878 15.883-15.878zm45.65 0c8.762 0 15.878 7.111 15.878 15.878 0 8.766-7.116 15.883-15.878 15.883-8.766 0-15.883-7.117-15.883-15.883 0-8.767 7.117-15.878 15.883-15.878zm45.65 0c8.762 0 15.878 7.111 15.878 15.878 0 8.766-7.116 15.883-15.877 15.883-8.767 0-15.884-7.117-15.884-15.883 0-8.767 7.117-15.878 15.884-15.878z"
//         fill={color}
//       />
//     </svg>
//   )
// }

// export default PendingApprovalIcon



import React from 'react';
import SVG, { SVGIconProps } from './SvgIcon';
import { teal } from '../colors';

type PendingApprovalIconProps = SVGIconProps;
export default function PendingApprovalIcon({
    color=teal[60],
    size="medium",
    altText="Pending Approval",
    ...props
}: PendingApprovalIconProps) {
    return <SVG size={size} aria-labelledby="PendingApprovalIcon" {...props}>
        <title id="PendingApprovalIcon" >{altText}</title>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.94 18.31h-.69A2.25 2.25 0 0 1 3 16.06V6.25A2.25 2.25 0 0 1 5.25 4h13.526a2.25 2.25 0 0 1 2.25 2.25v9.81a2.25 2.25 0 0 1-2.25 2.25h-8.71l-2.962 3.459a.662.662 0 0 1-1.164-.43V18.31Zm1.324 1.238 1.995-2.33a.663.663 0 0 1 .503-.231h9.014a.926.926 0 0 0 .927-.927V6.25a.926.926 0 0 0-.927-.927H5.25a.929.929 0 0 0-.927.927v9.81a.927.927 0 0 0 .927.927h1.352c.365 0 .662.296.662.661v1.9Zm.4-10.096a1.514 1.514 0 1 1-.002 3.027 1.514 1.514 0 0 1 .001-3.027Zm4.35 0a1.514 1.514 0 1 1-.002 3.027 1.514 1.514 0 0 1 .001-3.027Zm4.349 0a1.514 1.514 0 1 1-.001 3.027 1.514 1.514 0 0 1 .001-3.027Z"
          fill={color}
        />
    </SVG>
}
