import React, { ReactChild, ReactChildren } from 'react';

type PageProps = {
    readonly children: ReactChild | ReactChildren;
}

export default function Page({ children }: PageProps) {
    return (
        <div>
            <p>I'm the Page component</p>
            { children }
        </div>
    );
}