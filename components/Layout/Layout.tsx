import { link } from 'fs';
import React from 'react';
import { server } from '../../config/server';
import { FooterLinks } from './Footer';
import { HeaderMenu } from './NavBar';

const Layout = ({children}) => {
    return (
        <div>
            <HeaderMenu links={[{link: 'http://google.com', label: 'Google', links : [{label: 'Google', link: 'http;//google.com'}, {label: 'About', link:`${server}/about`}]}]}  />
            {children}
            <FooterLinks data={[]} />
        </div>
    );
};

export default Layout;