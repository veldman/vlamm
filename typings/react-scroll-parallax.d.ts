declare module "react-scroll-parallax" {
     import * as React from 'react';

     export interface IParallaxProps {
        children?: React.ReactNode;
        className?: string;
        disabled?: boolean;
        offsetXMax?: string | number;
        offsetXMin?: string | number;
        offsetYMax?: string | number;
        offsetYMin?: string | number;
        slowerScrollRate?: boolean;
        styleOuter?: React.CSSProperties;
        styleInner?: React.CSSProperties;
        tag?: string;
     }

     export type Layer = {
         amount: number,
         children: React.ReactNode,
         expanded?: boolean,
         image?: string,
         slowerScrollRate: boolean
     }

     export interface IParallaxBannerProps {
        className?: string;
        disabled?: boolean;
        layers: Layer[];
        style?: React.CSSProperties;
     }

     export class Parallax extends React.Component<IParallaxProps> {}
     export class ParallaxProvider extends React.Component {}
     export const ParallaxBanner: React.StatelessComponent<IParallaxBannerProps>;

     export function ParallaxController(): any;

}