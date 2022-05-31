import React from 'react';
import SVG, { SVGIconProps } from './SvgIcon';
import { teal } from '../colors';

type GridIconProps = SVGIconProps;
export default function GridIcon({
    color=teal.main,
    size="medium",
    altText="Grid",
    ...props
}: GridIconProps) {
    return <SVG size={size} aria-labelledby="GridIcon" {...props}>
        <title id="GridIcon" >{altText}</title>
        <path
            d="M20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2ZM8 20H4v-4h4v4Zm0-6H4v-4h4v4Zm0-6H4V4h4v4Zm6 12h-4v-4h4v4Zm0-6h-4v-4h4v4Zm0-6h-4V4h4v4Zm6 12h-4v-4h4v4Zm0-6h-4v-4h4v4Zm0-6h-4V4h4v4Z"
            fill={color}
        />
    </SVG>
}
