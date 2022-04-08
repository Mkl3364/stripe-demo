import React from 'react';
import Head from 'next/head'

interface HeaderInterface {
    title: string,
    description?: string,
    content? : string,
}

const Header = (props: HeaderInterface) => {

    const { title, description, content } = props;

    return (
        <div>
        <Head>
            <title>{title}</title>
            <meta name={description} content={content} />
            <link rel="icon" href="/favicon.ico" />
      </Head>
        </div>
    );
};

export default Header;