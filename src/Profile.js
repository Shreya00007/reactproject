import React from 'react';

export default function Profile(prop)
{
    return(
        <div>
        <h1>{prop.text.name}</h1>
        <h1>{prop.data}</h1>
        </div>
    )
}

