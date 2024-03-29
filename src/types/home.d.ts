import * as React from 'react';
import { SiderProps } from './Sider';
export interface BasicProps {
    style?: React.CSSProperties;
    prefixCls?: string;
    className?: string;
    hasSider?: boolean;
}
declare const Layout: React.ComponentClass<BasicProps> & {
    Header: React.ComponentClass<BasicProps>;
    Footer: React.ComponentClass<BasicProps>;
    Content: React.ComponentClass<BasicProps>;
    Sider: React.ComponentClass<SiderProps>;
};
export default Layout;
