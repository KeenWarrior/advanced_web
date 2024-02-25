'use client';

import { useCookies } from 'next-client-cookies';
import { useEffect } from 'react';

export default function CookieCounter() {

    const cookies = useCookies();

    useEffect(() => {
        if(cookies.get('count') === undefined){
            cookies.set('count', 0);
        } else {
            cookies.set('count', parseInt(cookies.get('count')) + 1);
        }
    }, [cookies]);

    return (
        <div>
        <p>Count: {cookies.get('count') || 0}</p>
        </div>
    );
}